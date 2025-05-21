import React, { useState } from "react";
import { theme } from "./Theme";
// Import AiAgent class here and instantiate (stub in browser for demo)
const agent = {
  interact: async (input: string) => `Echo: ${input}`
};

export const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<{user: string, bot: string}[]>([]);
  const [input, setInput] = useState("");

  const send = async () => {
    if (!input.trim()) return;
    const reply = await agent.interact(input);
    setMessages([...messages, { user: input, bot: reply }]);
    setInput("");
  };

  return (
    <div style={{ padding: 32 }}>
      <h2 style={{ color: theme.primary }}>DesktopMind AI Agent</h2>
      <div style={{ height: 400, overflowY: "auto", marginBottom: 16, background: "#232323", padding: 16, borderRadius: 8 }}>
        {messages.map((m, i) => (
          <div key={i}>
            <div style={{ color: theme.accent }}>You: {m.user}</div>
            <div style={{ color: theme.text, marginBottom: 12 }}>AI: {m.bot}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your command…"
          style={{
            flex: 1,
            fontFamily: theme.fontFamily,
            fontSize: 16,
            padding: 8,
            border: `1px solid ${theme.primary}`,
            borderRadius: 4,
            background: theme.background,
            color: theme.text
          }}
          onKeyDown={e => (e.key === "Enter" ? send() : undefined)}
        />
        <button
          onClick={send}
          style={{
            marginLeft: 8,
            background: theme.accent,
            color: "#fff",
            padding: "8px 20px",
            border: "none",
            borderRadius: 4,
            fontFamily: theme.fontFamily
          }}
        >Send</button>
      </div>
    </div>
  );
};