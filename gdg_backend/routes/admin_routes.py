from flask import Blueprint, request, jsonify
from firebase.auth import require_auth
from role_guard import role_required
from firebase.database import get_all_issues, update_issue_status

admin_bp = Blueprint("admin", __name__)

# -------------------------------
# Fetch all issues (Admin)
# -------------------------------
@admin_bp.route("/issues", methods=["GET"])
@require_auth
@role_required("admin")
def get_issues():
    issues = get_all_issues()
    return jsonify(issues), 200


# -------------------------------
# Update issue status (Admin)
# -------------------------------
@admin_bp.route("/update-status", methods=["PUT"])
@require_auth
@role_required("admin")
def update_status():
    data = request.json

    issue_id = data.get("issue_id")
    new_status = data.get("status")

    if not issue_id or not new_status:
        return jsonify({"error": "issue_id and status are required"}), 400

    update_issue_status(issue_id, new_status)

    return jsonify({"message": "Issue status updated successfully"}), 200
