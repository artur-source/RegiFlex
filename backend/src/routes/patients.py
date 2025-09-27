from flask import Blueprint, request, jsonify
from src.models.patient import Patient, Session, db
from src.models.user import User
import jwt
import qrcode
import io
import base64
from datetime import datetime
import os

patients_bp = Blueprint('patients', __name__)

SECRET_KEY = os.environ.get('SECRET_KEY', 'asdf#FGSgvasgf$5$WGT')

def verify_token_middleware():
    token = request.headers.get('Authorization')
    if not token:
        return None, jsonify({'error': 'Token não fornecido'}), 401
    
    if token.startswith('Bearer '):
        token = token[7:]
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        user = User.query.get(payload['user_id'])
        if not user or not user.is_active:
            return None, jsonify({'error': 'Token inválido'}), 401
        return user, None, None
    except jwt.ExpiredSignatureError:
        return None, jsonify({'error': 'Token expirado'}), 401
    except jwt.InvalidTokenError:
        return None, jsonify({'error': 'Token inválido'}), 401

def generate_qr_code(patient_id):
    """Gera QR Code para o paciente"""
    try:
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(f"REGIFLEX_PATIENT:{patient_id}")
        qr.make(fit=True)
        
        img = qr.make_image(fill_color="black", back_color="white")
        
        # Converter para base64
        buffer = io.BytesIO()
        img.save(buffer, format='PNG')
        img_str = base64.b64encode(buffer.getvalue()).decode()
        
        return f"data:image/png;base64,{img_str}"
    except Exception as e:
        return None

@patients_bp.route('/patients', methods=['GET'])
def get_patients():
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        search = request.args.get('search', '')
        
        query = Patient.query.filter_by(is_active=True)
        
        if search:
            query = query.filter(Patient.name.contains(search))
        
        patients = query.paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'patients': [patient.to_dict() for patient in patients.items],
            'total': patients.total,
            'pages': patients.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@patients_bp.route('/patients', methods=['POST'])
def create_patient():
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        data = request.get_json()
        
        required_fields = ['name', 'email']
        for field in required_fields:
            if not data or not data.get(field):
                return jsonify({'error': f'{field} é obrigatório'}), 400
        
        # Verificar se email já existe
        if Patient.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email já cadastrado'}), 400
        
        patient = Patient(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone'),
            birth_date=datetime.strptime(data['birth_date'], '%Y-%m-%d').date() if data.get('birth_date') else None,
            address=data.get('address'),
            medical_history=data.get('medical_history'),
            emergency_contact=data.get('emergency_contact'),
            emergency_phone=data.get('emergency_phone')
        )
        
        db.session.add(patient)
        db.session.flush()  # Para obter o ID
        
        # Gerar QR Code
        qr_code = generate_qr_code(patient.id)
        if qr_code:
            patient.qr_code = qr_code
        
        db.session.commit()
        
        return jsonify({
            'message': 'Paciente criado com sucesso',
            'patient': patient.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@patients_bp.route('/patients/<patient_id>', methods=['GET'])
def get_patient(patient_id):
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        patient = Patient.query.get(patient_id)
        if not patient or not patient.is_active:
            return jsonify({'error': 'Paciente não encontrado'}), 404
        
        return jsonify({'patient': patient.to_dict()}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@patients_bp.route('/patients/<patient_id>', methods=['PUT'])
def update_patient(patient_id):
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        patient = Patient.query.get(patient_id)
        if not patient:
            return jsonify({'error': 'Paciente não encontrado'}), 404
        
        data = request.get_json()
        
        # Atualizar campos
        if 'name' in data:
            patient.name = data['name']
        if 'email' in data:
            # Verificar se email já existe em outro paciente
            existing = Patient.query.filter_by(email=data['email']).first()
            if existing and existing.id != patient_id:
                return jsonify({'error': 'Email já cadastrado'}), 400
            patient.email = data['email']
        if 'phone' in data:
            patient.phone = data['phone']
        if 'birth_date' in data:
            patient.birth_date = datetime.strptime(data['birth_date'], '%Y-%m-%d').date() if data['birth_date'] else None
        if 'address' in data:
            patient.address = data['address']
        if 'medical_history' in data:
            patient.medical_history = data['medical_history']
        if 'emergency_contact' in data:
            patient.emergency_contact = data['emergency_contact']
        if 'emergency_phone' in data:
            patient.emergency_phone = data['emergency_phone']
        
        patient.updated_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify({
            'message': 'Paciente atualizado com sucesso',
            'patient': patient.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@patients_bp.route('/patients/<patient_id>', methods=['DELETE'])
def delete_patient(patient_id):
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    # Verificar se usuário é admin
    if user.role != 'admin':
        return jsonify({'error': 'Acesso negado'}), 403
    
    try:
        patient = Patient.query.get(patient_id)
        if not patient:
            return jsonify({'error': 'Paciente não encontrado'}), 404
        
        # Soft delete
        patient.is_active = False
        patient.updated_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify({'message': 'Paciente removido com sucesso'}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@patients_bp.route('/patients/<patient_id>/qr-code', methods=['GET'])
def get_patient_qr_code(patient_id):
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        patient = Patient.query.get(patient_id)
        if not patient or not patient.is_active:
            return jsonify({'error': 'Paciente não encontrado'}), 404
        
        if not patient.qr_code:
            # Gerar QR Code se não existir
            qr_code = generate_qr_code(patient.id)
            if qr_code:
                patient.qr_code = qr_code
                db.session.commit()
        
        return jsonify({
            'qr_code': patient.qr_code,
            'patient_id': patient.id,
            'patient_name': patient.name
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@patients_bp.route('/qr-code/read', methods=['POST'])
def read_qr_code():
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        data = request.get_json()
        qr_data = data.get('qr_data')
        
        if not qr_data:
            return jsonify({'error': 'Dados do QR Code não fornecidos'}), 400
        
        # Verificar se é um QR Code do RegiFlex
        if not qr_data.startswith('REGIFLEX_PATIENT:'):
            return jsonify({'error': 'QR Code inválido'}), 400
        
        patient_id = qr_data.replace('REGIFLEX_PATIENT:', '')
        patient = Patient.query.get(patient_id)
        
        if not patient or not patient.is_active:
            return jsonify({'error': 'Paciente não encontrado'}), 404
        
        return jsonify({
            'message': 'QR Code lido com sucesso',
            'patient': patient.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

