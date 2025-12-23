
def admin_new_issue_email(issue):
    return f"""
    <h2>🚨 New Campus Issue Reported</h2>

    <p><b>Title:</b> {issue.get("title")}</p>
    <p><b>Category:</b> {issue.get("category")}</p>
    <p><b>Severity:</b> {issue.get("severity")}</p>
    <p><b>Location:</b> {issue.get("location")}</p>

    <p><b>Description:</b></p>
    <p>{issue.get("description")}</p>

    <hr/>
    <p>Please log in to the Admin Dashboard to take action.</p>
    """
