import nltk
from nltk.tokenize import word_tokenize

emotion_keywords = {
    "sad": ["sad", "depressed", "unhappy", "down", "cry"],
    "anxious": ["anxious", "nervous", "worried", "scared"],
    "angry": ["angry", "mad", "frustrated", "pissed"],
    "lonely": ["alone", "lonely", "isolated"],
    "happy": ["happy", "excited", "glad", "good"]
}

def detect_emotion_rule_based(text):
    words = word_tokenize(text.lower())

    for emotion, keys in emotion_keywords.items():
        if any(k in words for k in keys):
            return emotion

    return "neutral"
