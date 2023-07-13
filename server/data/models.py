from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Component(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.Text, nullable=False)
    className = db.Column(db.String(80), unique=True, nullable=False)
