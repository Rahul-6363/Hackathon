from fastapi import APIRouter

router = APIRouter()

@router.post("/chat")
async def chat(message: dict):
    user_msg = message.get("message")

    # TEMP AI logic (replace later with real AI)
    response = f"AI Response to: {user_msg}"

    return {"reply": response}