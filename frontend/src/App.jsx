import ChatBox from './components/ChatBox'
import Sidebar from './components/Sidebar'
import TaskFlow from './components/TaskFlow'
import WorkEnvironment from './components/WorkEnvironment'
import SessionExplorer from './components/SessionExplorer'
import { useState } from 'react'

function App() {
  const [agent, setAgent] = useState("executor")
  const [flow, setFlow] = useState([])
  const [envType, setEnvType] = useState("terminal")
  const [agentResponses, setAgentResponses] = useState([])
  const [sessionData, setSessionData] = useState([])

  return (
    <div className="flex h-screen">
      <Sidebar setAgent={setAgent} />
      <div className="flex-1 flex flex-col">
        <TaskFlow flow={flow} agentResponses={agentResponses} setAgentResponses={setAgentResponses} setFlow={setFlow} />
        <ChatBox agent={agent} setFlow={setFlow} setEnvType={setEnvType} setAgentResponses={setAgentResponses} setSessionData={setSessionData} />
        <WorkEnvironment type={envType} />
        <SessionExplorer session={sessionData} />
      </div>
    </div>
  )
}

export default App