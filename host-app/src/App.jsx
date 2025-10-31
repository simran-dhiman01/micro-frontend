import React, { useState, useEffect, Suspense } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { theme } from "./design-system/theme";
import { CHAT_EVENTS } from "chat/events";

const ChatApp = React.lazy(() => import("chat/ChatApp"));
const EmailApp = React.lazy(() => import("email/EmailApp"));

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleChatMessage = (e) => {
      const reply = {
        sender: "host",
        text: `Host received: "${e.detail.text}"`,
      };
      window.dispatchEvent(new CustomEvent(CHAT_EVENTS.HOST_TO_CHAT, { detail: reply }));
    };

    window.addEventListener(CHAT_EVENTS.CHAT_TO_HOST, handleChatMessage);
    return () => {
      window.removeEventListener(CHAT_EVENTS.CHAT_TO_HOST, handleChatMessage);
    };
  }, []);



  return (
    <div className="min-h-screen flex flex-col"
      style={{ backgroundColor: theme.colors.background }} >
      <Navbar onSelectApp={setActiveSection} />

      <div className="flex flex-1">
        <Sidebar active={activeSection} onSelect={setActiveSection} />

        <main className="flex-1 p-6 ">
          {activeSection === "home" && <Dashboard />}
          {activeSection === "chat" && (
            <Suspense fallback={<div>Loading Chat App...</div>}>
              <div
                className="min-h-screen flex flex-col items-center justify-start p-8"
                style={{ backgroundColor: theme.colors.background }} >
                <ChatApp />
              </div>
            </Suspense>
          )}
          {activeSection === "email" && (
            <Suspense fallback={<div>Loading Email App...</div>}>
              <div
                className="min-h-screen p-6 space-y-4"
                style={{ backgroundColor: theme.colors.background }} >
                <div className="flex flex-col gap-2 space-y-3">
                  <div className="my-4">
                    <EmailApp />
                  </div>
                </div>
              </div>
            </Suspense>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
