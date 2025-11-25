from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import nltk
from function import generate_supportive_reply, detect_emotion

nltk.download('punkt')

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/soulsync/chat/")
async def soulsync_chat(message: str = Form(...)):
    """
    Main chat endpoint for SoulSync AI.
    """
    emotion = detect_emotion(message)
    reply = generate_supportive_reply(message, emotion)

    return {
        "user_message": message,
        "emotion_detected": emotion,
        "reply": reply
    }

@app.get("/")
def home():
    return {"message": "SoulSync AI Running Successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)