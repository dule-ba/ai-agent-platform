export default function WorkEnvironment({ type }) {
  return (
    <div className="p-4 bg-gray-50 border-t h-[300px]">
      {type === "code" && (
        <div className="bg-black text-green-400 font-mono p-4 rounded">[Kôd editor simulacija]</div>
      )}
      {type === "terminal" && (
        <div className="bg-gray-900 text-white p-4 rounded">[Terminal output]</div>
      )}
      {type === "web" && (
        <iframe src="https://example.com" className="w-full h-full border rounded" title="Web view"></iframe>
      )}
    </div>
  )
}