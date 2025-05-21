import React, { useState } from "react";
import { theme } from "./Theme";
import { ChatPanel } from "./ChatPanel";
import { DesktopView } from "./DesktopView";

export const App: React.FC = () => (
  <div style={{
    display: "flex",
    height: "100vh",
    background: theme.background,
    color: theme.text,
    fontFamily: theme.fontFamily
  }}>
    <div style={{ flex: 1, borderRight: `2px solid ${theme.primary}` }}>
      <DesktopView />
    </div>
    <div style={{ flex: 1.5 }}>
      <ChatPanel />
    </div>
  </div>
);