from flask import Blueprint, request, jsonify
from .models import db, Competitor

bp = Blueprint('routes', __name__)

@bp.route('/competitor-profile', methods=['POST'])
def create_competitor():
    data = request.json
    competitor = Competitor(
        business_name=data['business_name'],
        business_type=data['business_type'],
        location=data['location'],
        website_traffic=data.get('website_traffic', 0),
        top_performing_pages=data.get('top_performing_pages', "")
    )
    db.session.add(competitor)
    db.session.commit()
    return jsonify({
        "message": "Competitor profile created",
        "competitor": {
            "id": competitor.id,
            "business_name": competitor.business_name,
            "business_type": competitor.business_type,
            "location": competitor.location,
            "website_traffic": competitor.website_traffic,
            "top_performing_pages": competitor.top_performing_pages
        }
    }), 201

@bp.route('/competitor/<string:id>', methods=['GET'])
def get_competitor(id):
    competitor = Competitor.query.get_or_404(id)
    return jsonify({
        "id": competitor.id,
        "business_name": competitor.business_name,
        "business_type": competitor.business_type,
        "location": competitor.location,
        "website_traffic": competitor.website_traffic,
        "top_performing_pages": competitor.top_performing_pages
    }), 200
