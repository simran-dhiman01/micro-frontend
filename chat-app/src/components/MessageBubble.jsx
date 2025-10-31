import React from "react";

const MessageBubble = ({ text, sender }) => {
  const isUser = sender === "chat";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`} >
      <div className={`px-4 py-2 rounded-2xl max-w-[70%] shadow-sm ${
          isUser
            ? "bg-[#C084FC] text-white"
            : "bg-[#F9A8D4] text-[#3B0764]" }`} >
        {text}
      </div>
    </div>
  );
};
export default MessageBubble;