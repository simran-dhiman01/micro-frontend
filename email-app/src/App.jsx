import React, { useState } from "react";
import { theme, } from "hostApp/design-system";
import EmailList from "./components/EmailList";
import EmailDetail from "./components/EmailDetail";
import ComposeEmail from "./components/ComposeEmail";
import { mockEmails } from "./utils/MockEmails";

const App = () => {
  const [emails, setEmails] = useState(mockEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isComposing, setIsComposing] = useState(false);

  const handleSend = (newEmail) => {
    setEmails([newEmail, ...emails]); // add to top of list
    setIsComposing(false);
  };


  return (
    <div className="min-h-screen p-6 space-y-4"
      style={{ backgroundColor: theme.colors.background }} >
      <h1 className="text-2xl font-bold mb-4">Email App</h1>

      {isComposing ? (
        <ComposeEmail onSend={handleSend} onCancel={() =>setIsComposing(false)} />
      ) : selectedEmail ? (
        <EmailDetail email={selectedEmail} onBack={() =>setSelectedEmail(null)} />
      ) : (
        <>
          <button onClick={() => setIsComposing(true)} className="px-5 py-2 rounded-lg text-white font-medium"
            style={{
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              fontFamily: theme.font.family,
            }}>Compose</button>
          <EmailList emails={emails} onSelect={setSelectedEmail} />
        </>
      )}
    </div>
  );
};

export default App;
