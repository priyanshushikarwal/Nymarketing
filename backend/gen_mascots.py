import asyncio
import base64
import os

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv()

OUT_DIR = "/app/frontend/public/assets"
os.makedirs(OUT_DIR, exist_ok=True)

STYLE = (
    "Premium minimal 3D clay-render mascot character for a high-end digital marketing agency. "
    "A smooth rounded capsule-shaped character in matte charcoal black with a glossy emerald green "
    "lightning-bolt badge on its chest, big expressive friendly eyes, soft studio lighting, subtle "
    "emerald green rim light, high quality, centered composition, no text, no watermark."
)

PROMPTS = {
    "mascot.png": STYLE
    + " The character is waving one hand and holding a small emerald green megaphone in the other, "
      "floating slightly. Solid very dark charcoal background, hex #0D0D0E.",
    "mascot-rocket.png": STYLE
    + " The character is riding a small glossy emerald green rocket flying upward with a tiny flame, "
      "joyful pose. Solid very dark charcoal background, hex #0D0D0E.",
    "mascot-light.png": STYLE
    + " The character is jumping with joy, arms up, surrounded by two tiny floating emerald green "
      "sparkle shapes. Solid warm off-white background, hex #F9F8F5.",
}


async def generate(name, prompt):
    chat = LlmChat(
        api_key=os.getenv("EMERGENT_LLM_KEY"),
        session_id=f"mascot-{name}",
        system_message="You are a helpful AI assistant",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    text, images = await chat.send_message_multimodal_response(UserMessage(text=prompt))
    if images:
        path = os.path.join(OUT_DIR, name)
        with open(path, "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(f"saved {name} ({len(images[0]['data']) // 1024} kb b64)")
    else:
        print(f"NO IMAGE for {name}: {str(text)[:120]}")


async def main():
    for name, prompt in PROMPTS.items():
        await generate(name, prompt)


asyncio.run(main())
