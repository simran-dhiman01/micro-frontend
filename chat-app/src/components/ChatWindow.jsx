import React, { useRef, useEffect, useState } from "react";
import { Card, Input, theme } from "hostApp/design-system";
import { Send } from "lucide-react";
import useChat from "../hooks/useChat";

const ChatWindow = () => {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input); 
    setInput("");
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8 flex flex-col h-[550px] border-0 shadow-lg"
      style={{ backgroundColor: theme.colors.surface, fontFamily: theme.font.family }}>
      {/* header */}
      <div className="py-3 px-5 border-b flex items-center justify-center text-lg"
        style={{ borderColor: theme.colors.border }}>
        MicroFrontend Chat App
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
        style={{ backgroundColor: theme.colors.background }}>
        {messages.length === 0 ? (
          <p className="text-center text-gray-400 mt-32 italic">
            No messages yet. Start chatting!
          </p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "chat" ? "justify-end" : "justify-start"}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow-sm ${
                msg.sender === "chat" ? "bg-purple-300 text-white rounded-br-none"
                : "bg-pink-200 text-purple-900 rounded-bl-none" }`}>
                <p>{msg.text}</p>
                <p className="text-[10px] opacity-70 mt-1 text-right">
                  {msg.sender === "chat" ? "You" : "Host"}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* input section */}
      <div className="flex items-center gap-2 border-t p-3" style={{ borderColor: theme.colors.border }}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-1" />
        <button onClick={handleSend}
         style={{
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              fontFamily: theme.font.family, }}
        className="flex flex-col items-center text-white gap-2 px-4 py-2 rounded-full">
          <Send size={16} />
        </button>
      </div>
    </Card>
  );
};

export default ChatWindow;
