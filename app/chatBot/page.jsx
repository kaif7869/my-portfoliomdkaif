"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I am Mohammad Kaif's portfolio assistant. Ask me about skills, projects, experience, or contact details."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMsg = { role: "user", text: trimmedInput };
    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });

      const data = await res.json();
      const reply =
        data.answer ||
        data.error ||
        "Sorry, I could not get a response. Please try again.";
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: "assistant", text: "Something went wrong. Please try again later." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="fixed bottom-24 right-6 z-50 lg:bottom-6">
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
            <span className="absolute inset-[-8px] rounded-full border border-green-300/50 animate-pulse" />
            <span className="absolute inset-[-16px] rounded-full border border-green-400/20 animate-ping [animation-delay:400ms]" />
          </>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-400 text-black shadow-xl shadow-green-400/20 transition duration-300 hover:scale-110 hover:bg-green-300 active:scale-95"
          title="Chat with portfolio assistant"
        >
          <MessageCircle size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed bottom-40 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl lg:bottom-24 lg:right-6">
          <div className="flex items-center justify-between bg-[#111827] px-4 py-4 text-white">
            <div>
              <strong>Portfolio Assistant</strong>
              <div className="text-xs text-green-300">Online</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-white transition hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex max-h-[320px] flex-1 flex-col gap-2 overflow-y-auto p-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[82%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "self-end bg-green-400 text-black"
                    : "self-start bg-gray-100 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            ))}
            {loading && (
              <div className="self-start text-sm text-gray-500">Typing...</div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex gap-2 border-t border-gray-200 p-2">
            <input
              value={input}
              onChange={event => setInput(event.target.value)}
              onKeyDown={event => event.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-green-400"
            />
            <button
              onClick={sendMessage}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400 text-black transition hover:bg-green-300"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
