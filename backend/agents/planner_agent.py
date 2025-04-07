import openai
from config import AGENT_CONFIGS

async def handle(request):
    cfg = AGENT_CONFIGS["planner"]
    res = openai.ChatCompletion.create(
        model=cfg["model"],
        temperature=cfg["temperature"],
        max_tokens=cfg["max_tokens"],
        messages=[{"role": "system", "content": cfg["system_prompt"]}, {"role": "user", "content": request.message}]
    )
    return {"response": res.choices[0].message["content"]}