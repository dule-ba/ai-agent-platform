from agents import code_agent, planner_agent, data_agent

async def handle(request):
    msg = request.message.lower()
    if "plan and code" in msg:
        plan = await planner_agent.handle(request)
        request.message = f"Based on plan: {plan['response']}"
        code = await code_agent.handle(request)
        return {"response": plan["response"] + "\n\n" + code["response"], "flow": ["Executor", "Planner", "Code"], "agents": [plan["response"], code["response"]]}
    elif "code" in msg:
        res = await code_agent.handle(request)
        return {"response": res["response"], "flow": ["Executor", "Code"], "agents": [res["response"]]}
    elif "plan" in msg:
        res = await planner_agent.handle(request)
        return {"response": res["response"], "flow": ["Executor", "Planner"], "agents": [res["response"]]}
    elif "data" in msg:
        res = await data_agent.handle(request)
        return {"response": res["response"], "flow": ["Executor", "Data"], "agents": [res["response"]]}
    return {"response": "Executor: Unknown request", "flow": ["Executor"], "agents": ["Executor didn't match anything"]}