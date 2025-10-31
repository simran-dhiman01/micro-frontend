import React from "react";
import { Card } from "../design-system/components/Card";
import { theme } from "../design-system/theme";

const Dashboard = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      style={{ fontFamily: theme.font.family }} >
      <Card title="Chat App" description="Real-time chat functionality implemented as a micro-frontend." />
      <Card title="Email App" description="Email management micro-frontend for inbox & messages." />
    </div>
  );
};
export default Dashboard;
