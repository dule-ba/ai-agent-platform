import openai
from config import AGENT_CONFIGS
from utils.chunker import chunk_text

async def handle(request):
    cfg = AGENT_CONFIGS["code"]
    chunks = chunk_text(request.message)
    responses = []
    for chunk in chunks:
        res = openai.ChatCompletion.create(
            model=cfg["model"],
            temperature=cfg["temperature"],
            max_tokens=cfg["max_tokens"],
            messages=[{"role": "system", "content": cfg["system_prompt"]}, {"role": "user", "content": chunk}]
        )
        responses.append(res.choices[0].message["content"])
    return {"response": "\n".join(responses)}