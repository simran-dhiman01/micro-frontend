import React from "react";
import { Card } from "hostApp/design-system";

const EmailList = ({ emails, onSelect }) => {
  return (
    <div className="space-y-3 flex flex-col gap-4">
      {emails.map((email) => (
        <Card key={email.id}
          className="p-4 cursor-pointer hover:bg-purple-50 transition"
          onClick={() => onSelect(email)} >
          <p className="font-semibold">{email.subject}</p>
          <p className="text-sm text-gray-500">{email.sender}</p>
          <p className="text-xs text-gray-400">{email.date}</p>
        </Card>
      ))}
    </div>
  );
};

export default EmailList;
