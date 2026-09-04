import asyncio
import base64
import os
from collections import deque

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage
from PIL import Image

load_dotenv()

OUT_DIR = "/app/frontend/public/assets"

PROMPT = (
    "Full-body hyperrealistic cinematic 3D render of an original muscular anthropomorphic sea turtle "
    "warrior mascot, standing upright in a confident friendly pose, deep charcoal grey skin, emerald "
    "green eye mask with a flowing ribbon, emerald green wraps on his wrists and ankles, emerald green "
    "belt with a round buckle, his left arm raised and bent sideways with the elbow propped as if "
    "leaning on an invisible tall box next to him, right fist resting on his hip, gentle confident "
    "smile, seamless pure white background, soft studio lighting, subtle contact shadow under feet, "
    "entire body visible from head to feet, no text, no watermark, no logo."
)


def remove_bg(src, dst, thresh=232):
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    px = img.load()
    seen = bytearray(w * h)
    queue = deque(
        [(x, 0) for x in range(w)]
        + [(x, h - 1) for x in range(w)]
        + [(0, y) for y in range(h)]
        + [(w - 1, y) for y in range(h)]
    )
    while queue:
        x, y = queue.popleft()
        if not (0 <= x < w and 0 <= y < h):
            continue
        i = y * w + x
        if seen[i]:
            continue
        seen[i] = 1
        r, g, b, a = px[x, y]
        if r >= thresh and g >= thresh and b >= thresh:
            px[x, y] = (0, 0, 0, 0)
            queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.save(dst)
    print("bg removed, size:", img.size)


async def main():
    chat = LlmChat(
        api_key=os.getenv("EMERGENT_LLM_KEY"),
        session_id="turtle-hero",
        system_message="You are a helpful AI assistant",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    text, images = await chat.send_message_multimodal_response(
        UserMessage(text=PROMPT)
    )
    if not images:
        print("NO IMAGE:", str(text)[:200])
        return
    raw = os.path.join(OUT_DIR, "turtle-hero-raw.png")
    with open(raw, "wb") as f:
        f.write(base64.b64decode(images[0]["data"]))
    print("raw saved")
    remove_bg(raw, os.path.join(OUT_DIR, "turtle-hero.png"))


if __name__ == "__main__":
    asyncio.run(main())
