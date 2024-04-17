import React, { useState } from "react";
import "../styles/ChatApp.css";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const responses = {
    Hello: "Hey! How can i help you today?",
    Hi: "Hey! How can i help you today?",
    "How are you?": "All good. What about you",
    "What you can do?": "I can answer your any questons!",
  };

  const getResponse = (userInput) => {
    return responses[userInput] || "Sorry, something went wrong(((";
  };

  const sendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, author: "user" }];
      setMessages(newMessages);
      setInput("");
      setTimeout(() => {
        const responseText = getResponse(input);
        setMessages((messages) => [
          ...messages,
          { text: responseText, author: "bot" },
        ]);
      }, 2000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.author}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatApp;
