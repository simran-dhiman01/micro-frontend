import React, { useState } from "react";
import { Card, Input,theme } from "hostApp/design-system";

const ComposeEmail = ({ onSend, onCancel }) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    if (!to.trim() || !subject.trim() || !body.trim()) return;

    const newEmail = {
      id: Date.now(),
      sender: "you@bluebash.co",
      recipient: to,
      subject,
      body,
      date: new Date().toLocaleDateString(),
    };

    onSend(newEmail);
    setTo("");
    setSubject("");
    setBody("");
  };

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-lg font-bold mb-2">Compose New Email</h2>

      <Input
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}/>
      <Input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)} />
      <textarea
        placeholder="Write your message..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full border rounded-lg p-3 h-40 focus:outline-none" />

      <div className="flex gap-3">
        <button onClick={handleSend}
        className="px-5 py-2 rounded-lg text-white font-medium"
            style={{
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              fontFamily: theme.font.family,
            }}>Send</button>
         <button variant="secondary" onClick={onCancel}
         className="px-5 py-2 rounded-lg text-black font-medium">
          Cancel
        </button>
      </div>
    </Card>
  );
};

export default ComposeEmail;
