from model import run_model
from emotions import detect_emotion_rule_based
from utils import format_support_prompt

def detect_emotion(text):
    return detect_emotion_rule_based(text)

def generate_supportive_reply(message, emotion):
    prompt = format_support_prompt(message, emotion)
    response = run_model(prompt)
    return response
