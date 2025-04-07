export default function Sidebar({ setAgent }) {
  return (
    <div className="w-48 bg-gray-100 p-4 border-r">
      <h3 className="font-bold mb-4">Agenti</h3>
      <ul className="space-y-2 text-sm">
        <li><button onClick={() => setAgent("executor")}>Executor</button></li>
        <li><button onClick={() => setAgent("code")}>Code</button></li>
        <li><button onClick={() => setAgent("planner")}>Planner</button></li>
        <li><button onClick={() => setAgent("data")}>Data</button></li>
      </ul>
    </div>
  )
}