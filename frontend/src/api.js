export async function sendMessage(message, agent) {
  const res = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, agent })
  });
  return await res.json();
}