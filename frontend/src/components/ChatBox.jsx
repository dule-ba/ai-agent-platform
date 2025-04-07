import { useState } from 'react'
import { sendMessage } from '../api'

export default function ChatBox({ agent, setFlow, setEnvType, setAgentResponses, setSessionData }) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const handleSend = async () => {
    const res = await sendMessage(input, agent)
    setMessages([...messages, { user: input, ai: res.response }])
    setFlow(res.flow || [])
    setEnvType(res.type || "terminal")
    setAgentResponses(res.agents || [])

    const session = await fetch("http://localhost:8000/session/default")
    const sessionJson = await session.json()
    setSessionData(sessionJson)

    setInput("")
  }

  return (
    <div className="p-4 border-t">
      <div className="mb-2">
        {messages.map((msg, i) => (
          <div key={i} className="mb-1">
            <p><b>User:</b> {msg.user}</p>
            <p><b>Agent:</b> {msg.ai}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 border p-2" />
        <button onClick={handleSend} className="ml-2 bg-blue-500 text-white px-4 py-2">Send</button>
      </div>
    </div>
  )
}