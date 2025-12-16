from firebase.init import db
from datetime import datetime


def create_user_profile(uid, data):
    user = {
        "name": data["name"],
        "dept": data["dept"],
        "year": data.get("year"),
        "email": data["email"],
        "role": "student",  # MODEL 1
        "created_at": datetime.utcnow()
    }
    db.collection("users").document(uid).set(user)


def get_user_role(uid):
    doc = db.collection("users").document(uid).get()
    if doc.exists:
        return doc.to_dict().get("role")
    return None
