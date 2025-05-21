import React from "react";
import { theme } from "./Theme";

export const DesktopView: React.FC = () => (
  <div style={{
    height: "100vh",
    background: "#18181a",
    color: "#aaa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <div style={{ fontSize: 22, marginBottom: 8, color: theme.primary }}>
      [Desktop View]
    </div>
    <div style={{ fontFamily: theme.fontFamily, fontSize: 14 }}>
      (Your code editor, terminal, or app content would display here.)
    </div>
  </div>
);