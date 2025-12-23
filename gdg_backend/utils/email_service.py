import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# ---------------- ENV VARIABLES ----------------

SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))

SENDER_EMAIL = os.getenv("SENDER_EMAIL")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")

# Optional safety check
if not SENDER_EMAIL or not SENDER_PASSWORD:
    print("❌ SMTP credentials missing in environment variables")

# ---------------- EMAIL FUNCTION ----------------

def send_email(to_emails, subject, html_content):
    try:
        print("📧 send_email() CALLED")
        print("➡️ To emails:", to_emails)
        print("🔌 Connecting to SMTP:", SMTP_SERVER, SMTP_PORT)

        if not to_emails:
            print("⚠️ No recipients, skipping email")
            return

        msg = MIMEMultipart()
        msg["From"] = SENDER_EMAIL
        msg["To"] = ", ".join(to_emails)
        msg["Subject"] = subject
        msg.attach(MIMEText(html_content, "html"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=20) as server:
            server.set_debuglevel(1)
            server.starttls()
            print("🔐 TLS started")

            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            print("✅ SMTP login successful")

            server.sendmail(
                SENDER_EMAIL,
                to_emails,
                msg.as_string()
            )

            print("📨 Email sent successfully")

    except Exception as e:
        print("❌ EMAIL FAILED:", repr(e))
