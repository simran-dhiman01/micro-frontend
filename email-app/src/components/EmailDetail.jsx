import React from "react";
import { Card,  } from "hostApp/design-system";

const EmailDetail = ({ email, onBack }) => {
  return (
    <Card className="p-5">
      <button onClick={onBack} className="mb-3">← Back</button>
      <h2 className="text-lg font-bold">{email.subject}</h2>
      <p className="text-sm text-gray-500 mb-2">From: {email.sender}</p>
      <p><strong>Date:</strong> {email.date}</p>
      <p className="text-gray-700">{email.body}</p>
    </Card>
  );
};

export default EmailDetail;
