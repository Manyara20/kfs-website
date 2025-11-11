// KFSChat.jsx
import { useState } from 'react';

export default function KFSChat() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [threadId, setThreadId] = useState('');
  const [chat, setChat] = useState([]);

  const upload = async () => {
    const form = new FormData();
    form.append('file', file);
    await fetch('http://localhost:5000/api/assistant/upload-pdf', {
      method: 'POST',
      body: form
    });
    alert('PDF indexed instantly!');
  };

  const ask = async () => {
    const res = await fetch('http://localhost:5000/api/assistant/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, thread_id: threadId || null })
    });
    const data = await res.json();
    setAnswer(data.answer);
    setThreadId(data.thread_id);
    setChat([...chat, { q: message, a: data.answer }]);
    setMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">KFS Document Chatbot</h1>
      
      <input type="file" accept=".pdf" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload} className="bg-green-600 text-white px-4 py-2 rounded">
        Upload PDF
      </button>

      <div className="mt-8">
        {chat.map((turn, i) => (
          <div key={i} className="mb-6">
            <div className="bg-blue-100 p-3 rounded">You: {turn.q}</div>
            <div className="bg-gray-100 p-3 rounded mt-2">Bot: {turn.a}</div>
          </div>
        ))}
        
        <textarea
          className="w-full p-3 border rounded"
          rows="3"
          placeholder="Ask anything about KFS documents..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={ask} className="mt-2 bg-orange-600 text-white px-6 py-3 rounded">
          Send
        </button>
      </div>
    </div>
  );
}