export default function SessionExplorer({ session }) {
  return (
    <div className="p-4 border-t bg-white">
      <h4 className="font-semibold mb-2">Session Explorer</h4>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {session.map((entry, i) => (
          <div key={i} className="p-2 border rounded">
            <p><b>{entry.agent}</b></p>
            <p className="text-sm text-gray-500">Zadatak:</p>
            <pre className="whitespace-pre-wrap text-sm">{entry.message}</pre>
            <p className="text-sm text-gray-500">Odgovor:</p>
            <pre className="whitespace-pre-wrap text-sm">{entry.response}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}