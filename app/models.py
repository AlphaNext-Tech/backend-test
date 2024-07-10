import uuid
from . import db

class Competitor(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    business_name = db.Column(db.String(100), nullable=False)
    business_type = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    website_traffic = db.Column(db.Integer, nullable=False)
    top_performing_pages = db.Column(db.String(500), nullable=False)
