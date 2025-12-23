def send_email(to_emails, subject, html_content):
    try:
        print("📧 send_email() CALLED")
        print("➡️ To emails:", to_emails)
        print("🔌 Connecting to SMTP:", SMTP_SERVER, SMTP_PORT)

        msg = MIMEMultipart()
        msg["From"] = SENDER_EMAIL        # ⚠️ NO display name for now
        msg["To"] = ", ".join(to_emails)
        msg["Subject"] = subject

        msg.attach(MIMEText(html_content, "html"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=20) as server:
            server.set_debuglevel(1)      # 🔥 THIS LINE
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(
                SENDER_EMAIL,
                to_emails,
                msg.as_string()
            )

        print("✅ Email sent successfully")

    except Exception as e:
        print("❌ EMAIL FAILED:", repr(e))
