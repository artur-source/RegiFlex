from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid

# Usar a mesma instância db do modelo user
from src.models.user import db

class Patient(db.Model):
    __tablename__ = 'patients'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    birth_date = db.Column(db.Date, nullable=True)
    address = db.Column(db.Text, nullable=True)
    medical_history = db.Column(db.Text, nullable=True)
    emergency_contact = db.Column(db.String(100), nullable=True)
    emergency_phone = db.Column(db.String(20), nullable=True)
    qr_code = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = db.Column(db.Boolean, default=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'birth_date': self.birth_date.isoformat() if self.birth_date else None,
            'address': self.address,
            'medical_history': self.medical_history,
            'emergency_contact': self.emergency_contact,
            'emergency_phone': self.emergency_phone,
            'qr_code': self.qr_code,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat(),
            'is_active': self.is_active
        }
    
    def __repr__(self):
        return f'<Patient {self.name}>'


class Session(db.Model):
    __tablename__ = 'sessions'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    patient_id = db.Column(db.String(36), db.ForeignKey('patients.id'), nullable=False)
    psychologist_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    session_date = db.Column(db.DateTime, nullable=False)
    duration = db.Column(db.Integer, default=50)  # duração em minutos
    notes = db.Column(db.Text, nullable=True)
    evolution = db.Column(db.Text, nullable=True)
    status = db.Column(db.String(20), default='scheduled')  # scheduled, completed, cancelled, no_show
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relacionamentos
    patient = db.relationship('Patient', backref='sessions')
    psychologist = db.relationship('src.models.user.User', backref='sessions')
    
    def to_dict(self):
        return {
            'id': self.id,
            'patient_id': self.patient_id,
            'psychologist_id': self.psychologist_id,
            'session_date': self.session_date.isoformat(),
            'duration': self.duration,
            'notes': self.notes,
            'evolution': self.evolution,
            'status': self.status,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }
    
    def __repr__(self):
        return f'<Session {self.id} - Patient {self.patient_id}>'

