// src/components/KFSChat.jsx
import { useState, useRef, useEffect } from "react";

export default function KFSChat() {
  const [message, setMessage] = useState("");
  const [threadId, setThreadId] = useState("");
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, isTyping]);

  const ask = async () => {
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage("");
    setChat((prev) => [...prev, { q: userMessage }]);
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/api/assistant/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, thread_id: threadId || null }),
      });
      const data = await res.json();
      setThreadId(data.thread_id);

      setChat((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last && !last.a) last.a = data.answer;
        return updated;
      });
    } catch (err) {
      setChat((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last && !last.a) last.a = "Sorry, I'm having trouble connecting";
        return updated;
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      ask();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-5 pt-4 pb-2 space-y-5">
        {chat.length === 0 && !isTyping && (
          <div className="text-center text-gray-500 mt-8 text-sm">
            Hi! Ask me anything about KFS services, forests, or policies
          </div>
        )}

        {chat.map((turn, i) => (
          <div key={i}>
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-[#2a7a3d] text-white px-4 py-3 rounded-2xl max-w-[85%] break-words rounded-br-none shadow-md text-sm font-medium">
                {turn.q}
              </div>
            </div>

            {/* Bot Message */}
            {turn.a && (
              <div className="flex justify-start mt-3">
                <div className="bg-green-100 text-gray-800 px-4 py-3 rounded-2xl max-w-[85%] break-words rounded-bl-none shadow-sm text-sm border border-green-200">
                  {turn.a}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-green-100 px-4 py-3 rounded-2xl rounded-bl-none border border-green-200">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-[#2a7a3d] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#2a7a3d] rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-[#2a7a3d] rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-green-100">
        <div className="flex gap-3">
          <textarea
            className="flex-1 resize-none border-2 border-[#2a7a3d]/30 rounded-full px-5 py-3 focus:outline-none focus:border-[#2a7a3d] text-sm placeholder-gray-400 transition"
            rows="1"
            placeholder="Ask about forests, policies, permits..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={ask}
            disabled={!message.trim() || isTyping}
            className="bg-[#2a7a3d] hover:bg-[#1e5a2c] disabled:opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center transition shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}