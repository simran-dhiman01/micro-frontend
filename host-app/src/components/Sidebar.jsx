import React from "react";
import { Home, MessageCircle, Mail } from "lucide-react";
import { theme } from "../design-system/theme";

const Sidebar = ({ active, onSelect }) => {
  const items = [
    { name: "Home", icon: <Home size={20} />, key: "home" },
    { name: "Chat", icon: <MessageCircle size={20} />, key: "chat" },
    { name: "Email", icon: <Mail size={20} />, key: "email" },
  ];

  return (
    <aside className="h-[calc(100vh-56px)] w-56 flex flex-col border-r p-4"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.background,
        fontFamily: theme.font.family,
      }} >
      {items.map((item) => (
        <button key={item.key}
          onClick={() => onSelect(item.key)}
          className={`flex items-center gap-3 p-3 rounded-lg mb-2 w-full text-left transition ${
            active === item.key
              ? "bg-linear-to-r from-pink-300 to-purple-300 text-white shadow-md"
              : "hover:bg-purple-100 text-purple-900"
          }`} >
          {item.icon}
          <span className="font-medium">{item.name}</span>
        </button>
      ))}
    </aside>
  );
};
export default Sidebar;