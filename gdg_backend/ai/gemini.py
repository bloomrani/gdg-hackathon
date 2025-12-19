import google.generativeai as genai
import os

genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")


def generate_issue_description(topic):
    prompt = f"""
    Generate a clear and concise campus issue description based on the topic below.
    The description should be formal and suitable for a college complaint system.

    Topic: {topic}
    """

    response = model.generate_content(prompt)
    return response.text.strip()
