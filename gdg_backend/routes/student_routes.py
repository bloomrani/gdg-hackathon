from flask import Blueprint, jsonify
from firebase.auth import require_auth
from utils.role_guard import role_required

student_bp = Blueprint("student", __name__)

@student_bp.route("/dashboard")
@require_auth
@role_required("student")
def student_dashboard():
    return jsonify({"msg": "Welcome Student"})
