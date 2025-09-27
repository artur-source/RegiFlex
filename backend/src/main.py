import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db, User
from src.models.patient import Patient, Session
from src.routes.user import user_bp
from src.routes.auth import auth_bp
from src.routes.patients import patients_bp
from src.routes.sessions import sessions_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Configurar CORS para permitir requisições do frontend
CORS(app, origins=['*'])

# Registrar blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(patients_bp, url_prefix='/api')
app.register_blueprint(sessions_bp, url_prefix='/api')

# Configuração do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Criar tabelas e dados iniciais
with app.app_context():
    db.create_all()
    
    # Criar usuário admin padrão se não existir
    admin = User.query.filter_by(username='admin').first()
    if not admin:
        admin = User(
            username='admin',
            email='admin@regiflex.com',
            full_name='Administrador do Sistema',
            role='admin'
        )
        admin.set_password('admin123')
        db.session.add(admin)
    
    # Criar usuário psicólogo de teste
    psicologo = User.query.filter_by(username='psicologo1').first()
    if not psicologo:
        psicologo = User(
            username='psicologo1',
            email='psicologo1@regiflex.com',
            full_name='Dr. João Silva',
            role='psychologist',
            crp='CRP 12345',
            specialization='Psicologia Clínica'
        )
        psicologo.set_password('password')
        db.session.add(psicologo)
    
    # Criar usuário recepcionista de teste
    recepcionista = User.query.filter_by(username='recepcionista1').first()
    if not recepcionista:
        recepcionista = User(
            username='recepcionista1',
            email='recepcionista1@regiflex.com',
            full_name='Maria Santos',
            role='receptionist'
        )
        recepcionista.set_password('password')
        db.session.add(recepcionista)
    
    db.session.commit()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404

# Rota de teste para verificar se a API está funcionando
@app.route('/api/health', methods=['GET'])
def health_check():
    return {'status': 'OK', 'message': 'RegiFlex API está funcionando!'}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
