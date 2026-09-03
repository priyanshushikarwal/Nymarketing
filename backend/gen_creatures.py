import asyncio
import base64
import os

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv()

OUT_DIR = "/app/frontend/public/assets"
os.makedirs(OUT_DIR, exist_ok=True)

STYLE = (
    "Hyperrealistic cinematic 3D render, ultra detailed texture, dynamic energetic pose, "
    "seamless pure white background, soft studio lighting, subtle shadow under subject, "
    "deep charcoal grey body with emerald green iridescent accents, no text, no watermark, no logo."
)

PROMPTS = {
    "octopus.png": STYLE
    + " Subject: a majestic octopus with elegantly swirling curling tentacles, emerald green "
      "iridescent suction cups, a few fine water droplets flying off the tentacles.",
    "dolphin.png": STYLE
    + " Subject: a sleek dolphin leaping upward out of water, dramatic emerald-tinted water "
      "splash and droplets exploding beneath it, joyful energy.",
    "turtle.png": STYLE
    + " Subject: an original athletic sea turtle warrior character sprinting fast in an action "
      "pose, wearing emerald green fabric wraps and a flowing emerald mask ribbon, kicking up "
      "a dynamic dust motion trail.",
    "chameleon.png": STYLE
    + " Subject: a chameleon mid-step on a thin branch, charcoal body with vibrant emerald "
      "green color-splash patterns blooming across its skin, tail curled.",
    "parrot.png": STYLE
    + " Subject: a playful parrot with charcoal and emerald green plumage holding a tiny "
      "vintage film camera in one claw, wings slightly spread as if filming.",
    "owl.png": STYLE
    + " Subject: a wise owl with charcoal feathers and emerald green rim light, wearing tiny "
      "round glasses, perched behind a small open laptop, one wing raised.",
}


async def generate(name, prompt):
    chat = LlmChat(
        api_key=os.getenv("EMERGENT_LLM_KEY"),
        session_id=f"creature-{name}",
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
