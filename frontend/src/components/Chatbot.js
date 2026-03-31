import { useState } from "react";
import { sendMessage } from "../services/api";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    const userMessage = { sender: "user", text: input };

    setMessages([...messages, userMessage]);

    const res = await sendMessage(input);

    const botMessage = {
      sender: "bot",
      text: res.data.reply,
    };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div>
      <h3>Chat with AI Doctor</h3>

      <div>
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;