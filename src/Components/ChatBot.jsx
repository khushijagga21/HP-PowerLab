import React, { useState } from "react";
import { IoSend, IoChatbubbleEllipses } from "react-icons/io5";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const predefinedResponses = {
    hello: "Hi! How can I assist you today?",
    "fuel price in haryana": "The current fuel price in Haryana is ₹98 per liter.",
    services: "We offer fuel delivery, industrial solutions, and fleet management.",
    contact: "You can contact us at support@hpl.com.",
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const lowerCaseMessage = input.toLowerCase();
    const response = predefinedResponses[lowerCaseMessage] || "Sorry, I couldn't process that.";

    setMessages([...messages, { text: input, sender: "user" }, { text: response, sender: "bot" }]);
    setInput("");
  };

  const toggleChatbot = () => {
    if (isOpen) setMessages([]); // Clear messages when closing
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}>
      {!isOpen ? (
        <button
          onClick={toggleChatbot}
          style={{
            fontSize: "50px", // Bigger icon
            cursor: "pointer",
            background: "transparent",
            border: "none",
            color: "#0084ff", // Icon color
            padding: "10px",
          }}
        >
          <IoChatbubbleEllipses />
        </button>
      ) : (
        <div style={{ width: "320px", height: "420px", background: "white", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.3)", padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <strong>Chatbot</strong>
            <button onClick={toggleChatbot} style={{ cursor: "pointer", fontSize: "20px", background: "none", border: "none" }}>✖</button>
          </div>
          <div style={{ height: "320px", overflowY: "auto", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
                <span style={{ background: msg.sender === "user" ? "#0084ff" : "#e0e0e0", color: msg.sender === "user" ? "white" : "black", padding: "5px 10px", borderRadius: "5px", display: "inline-block" }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." style={{ flex: "1", padding: "5px" }} />
            <button onClick={sendMessage} style={{ marginLeft: "5px", cursor: "pointer", fontSize: "20px" }}>
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
