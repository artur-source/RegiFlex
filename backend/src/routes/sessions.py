from flask import Blueprint, request, jsonify
from src.models.patient import Patient, Session, db
from src.models.user import User
import jwt
from datetime import datetime, timedelta
import os

sessions_bp = Blueprint('sessions', __name__)

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

@sessions_bp.route('/sessions', methods=['GET'])
def get_sessions():
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        patient_id = request.args.get('patient_id')
        status = request.args.get('status')
        date_from = request.args.get('date_from')
        date_to = request.args.get('date_to')
        
        query = Session.query
        
        # Filtrar por psicólogo se não for admin
        if user.role != 'admin':
            query = query.filter_by(psychologist_id=user.id)
        
        if patient_id:
            query = query.filter_by(patient_id=patient_id)
        
        if status:
            query = query.filter_by(status=status)
        
        if date_from:
            date_from_obj = datetime.strptime(date_from, '%Y-%m-%d')
            query = query.filter(Session.session_date >= date_from_obj)
        
        if date_to:
            date_to_obj = datetime.strptime(date_to, '%Y-%m-%d') + timedelta(days=1)
            query = query.filter(Session.session_date < date_to_obj)
        
        query = query.order_by(Session.session_date.desc())
        
        sessions = query.paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        # Incluir dados do paciente e psicólogo
        sessions_data = []
        for session in sessions.items:
            session_dict = session.to_dict()
            session_dict['patient'] = session.patient.to_dict() if session.patient else None
            session_dict['psychologist'] = session.psychologist.to_dict() if session.psychologist else None
            sessions_data.append(session_dict)
        
        return jsonify({
            'sessions': sessions_data,
            'total': sessions.total,
            'pages': sessions.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@sessions_bp.route('/sessions', methods=['POST'])
def create_session():
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        data = request.get_json()
        
        required_fields = ['patient_id', 'session_date']
        for field in required_fields:
            if not data or not data.get(field):
                return jsonify({'error': f'{field} é obrigatório'}), 400
        
        # Verificar se paciente existe
        patient = Patient.query.get(data['patient_id'])
        if not patient or not patient.is_active:
            return jsonify({'error': 'Paciente não encontrado'}), 404
        
        # Converter data
        session_date = datetime.strptime(data['session_date'], '%Y-%m-%d %H:%M')
        
        # Verificar conflitos de horário
        existing_session = Session.query.filter(
            Session.psychologist_id == user.id,
            Session.session_date == session_date,
            Session.status.in_(['scheduled', 'completed'])
        ).first()
        
        if existing_session:
            return jsonify({'error': 'Já existe uma sessão agendada para este horário'}), 400
        
        session = Session(
            patient_id=data['patient_id'],
            psychologist_id=user.id,
            session_date=session_date,
            duration=data.get('duration', 50),
            notes=data.get('notes'),
            status='scheduled'
        )
        
        db.session.add(session)
        db.session.commit()
        
        # Incluir dados do paciente na resposta
        session_dict = session.to_dict()
        session_dict['patient'] = patient.to_dict()
        session_dict['psychologist'] = user.to_dict()
        
        return jsonify({
            'message': 'Sessão agendada com sucesso',
            'session': session_dict
        }), 201
        
    except ValueError as e:
        return jsonify({'error': 'Formato de data inválido. Use YYYY-MM-DD HH:MM'}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@sessions_bp.route('/sessions/<session_id>', methods=['GET'])
def get_session(session_id):
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        session = Session.query.get(session_id)
        if not session:
            return jsonify({'error': 'Sessão não encontrada'}), 404
        
        # Verificar permissão
        if user.role != 'admin' and session.psychologist_id != user.id:
            return jsonify({'error': 'Acesso negado'}), 403
        
        session_dict = session.to_dict()
        session_dict['patient'] = session.patient.to_dict() if session.patient else None
        session_dict['psychologist'] = session.psychologist.to_dict() if session.psychologist else None
        
        return jsonify({'session': session_dict}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@sessions_bp.route('/sessions/<session_id>', methods=['PUT'])
def update_session(session_id):
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        session = Session.query.get(session_id)
        if not session:
            return jsonify({'error': 'Sessão não encontrada'}), 404
        
        # Verificar permissão
        if user.role != 'admin' and session.psychologist_id != user.id:
            return jsonify({'error': 'Acesso negado'}), 403
        
        data = request.get_json()
        
        # Atualizar campos
        if 'session_date' in data:
            new_date = datetime.strptime(data['session_date'], '%Y-%m-%d %H:%M')
            
            # Verificar conflitos apenas se a data mudou
            if new_date != session.session_date:
                existing_session = Session.query.filter(
                    Session.psychologist_id == session.psychologist_id,
                    Session.session_date == new_date,
                    Session.status.in_(['scheduled', 'completed']),
                    Session.id != session_id
                ).first()
                
                if existing_session:
                    return jsonify({'error': 'Já existe uma sessão agendada para este horário'}), 400
            
            session.session_date = new_date
        
        if 'duration' in data:
            session.duration = data['duration']
        if 'notes' in data:
            session.notes = data['notes']
        if 'evolution' in data:
            session.evolution = data['evolution']
        if 'status' in data:
            if data['status'] in ['scheduled', 'completed', 'cancelled', 'no_show']:
                session.status = data['status']
        
        session.updated_at = datetime.utcnow()
        db.session.commit()
        
        session_dict = session.to_dict()
        session_dict['patient'] = session.patient.to_dict() if session.patient else None
        session_dict['psychologist'] = session.psychologist.to_dict() if session.psychologist else None
        
        return jsonify({
            'message': 'Sessão atualizada com sucesso',
            'session': session_dict
        }), 200
        
    except ValueError as e:
        return jsonify({'error': 'Formato de data inválido. Use YYYY-MM-DD HH:MM'}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@sessions_bp.route('/sessions/<session_id>', methods=['DELETE'])
def delete_session(session_id):
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        session = Session.query.get(session_id)
        if not session:
            return jsonify({'error': 'Sessão não encontrada'}), 404
        
        # Verificar permissão
        if user.role != 'admin' and session.psychologist_id != user.id:
            return jsonify({'error': 'Acesso negado'}), 403
        
        db.session.delete(session)
        db.session.commit()
        
        return jsonify({'message': 'Sessão removida com sucesso'}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@sessions_bp.route('/dashboard/stats', methods=['GET'])
def get_dashboard_stats():
    user, error_response, status_code = verify_token_middleware()
    if error_response:
        return error_response, status_code
    
    try:
        # Estatísticas básicas
        total_patients = Patient.query.filter_by(is_active=True).count()
        
        # Sessões do mês atual
        now = datetime.utcnow()
        start_of_month = datetime(now.year, now.month, 1)
        end_of_month = datetime(now.year, now.month + 1, 1) if now.month < 12 else datetime(now.year + 1, 1, 1)
        
        sessions_this_month = Session.query.filter(
            Session.session_date >= start_of_month,
            Session.session_date < end_of_month
        ).count()
        
        # Sessões agendadas para os próximos 7 dias
        next_week = now + timedelta(days=7)
        upcoming_sessions = Session.query.filter(
            Session.session_date >= now,
            Session.session_date <= next_week,
            Session.status == 'scheduled'
        ).count()
        
        # Taxa de sucesso (sessões completadas vs total)
        total_sessions = Session.query.count()
        completed_sessions = Session.query.filter_by(status='completed').count()
        success_rate = (completed_sessions / total_sessions * 100) if total_sessions > 0 else 0
        
        # Alertas de IA (simulado)
        alerts = 3  # Placeholder para alertas de IA
        
        return jsonify({
            'total_patients': total_patients,
            'sessions_this_month': sessions_this_month,
            'upcoming_sessions': upcoming_sessions,
            'success_rate': round(success_rate, 1),
            'alerts': alerts
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

