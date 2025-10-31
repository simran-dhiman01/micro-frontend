import { useEffect, useState } from "react";
import { CHAT_EVENTS } from "../utils/event";

const useChat = () => {
  const [messages, setMessages] = useState([]);

  // message from Chat App
  const sendMessage = (text, sender = "chat") => {
    if (!text.trim()) return;

    const newMessage = { id: Date.now(), sender, text };
    setMessages((prev) => [...prev, newMessage]);

    if (sender === "chat") {
      window.dispatchEvent(
        new CustomEvent(CHAT_EVENTS.CHAT_TO_HOST, {
          detail: newMessage,
        })
      );
    }
  };


  // Listen for messages from Host
  useEffect(() => {
    const handleHostMessage = (e) => {
      const { text, sender } = e.detail;
      setMessages((prev) => [...prev, { id: Date.now(), sender, text }]);
    };
    window.addEventListener(CHAT_EVENTS.HOST_TO_CHAT, handleHostMessage);
    return () => {
      window.removeEventListener(CHAT_EVENTS.HOST_TO_CHAT, handleHostMessage);
    };
  }, []);
  return { messages, sendMessage };
};

export default useChat;