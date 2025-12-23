
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT"))
SENDER_EMAIL = os.getenv("SENDER_EMAIL")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")

print("📧 ABOUT TO SEND EMAIL")

def send_email(to_emails, subject, html_content):
    if not to_emails:
        return

    print("📧 send_email() CALLED")
    print("➡️ To emails:", to_emails)
    print("🔌 Connecting to SMTP:", SMTP_SERVER, SMTP_PORT)

    msg = MIMEMultipart()
    msg["From"] = SENDER_EMAIL          # ⚠️ IMPORTANT
    msg["To"] = ", ".join(to_emails)
    msg["Subject"] = subject

    msg.attach(MIMEText(html_content, "html"))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=20)
        server.starttls()
        print("🔐 TLS started")

        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        print("✅ Logged into SMTP")

        server.sendmail(
            SENDER_EMAIL,
            to_emails,
            msg.as_string()
        )
        print("📨 Email SENT successfully")

        server.quit()

    except Exception as e:
        print("❌ EMAIL FAILED:", e)
