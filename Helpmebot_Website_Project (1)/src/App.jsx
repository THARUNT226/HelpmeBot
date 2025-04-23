
import React, { useState } from "react";

export default function HelpmebotHome() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;
    const userMessage = { sender: "User", text: message };
    const botReply = { sender: "Helpmebot", text: "Thank you. Your report has been received." };
    setChatLog([...chatLog, userMessage, botReply]);
    setMessage("");
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2563eb' }}>Helpmebot</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>Smart Chatbot for Safety & Emergency Help</p>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', marginBottom: '20px', backgroundColor: '#f9f9f9', height: '300px', overflowY: 'auto' }}>
          {chatLog.map((msg, idx) => (
            <div key={idx} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left', marginBottom: '10px' }}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ flexGrow: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button onClick={handleSend} style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '5px' }}>
            Send
          </button>
        </div>

        <div style={{ marginTop: '30px' }}>
          <button style={{ backgroundColor: '#dc2626', color: 'white', padding: '10px', width: '100%', border: 'none', borderRadius: '5px', marginBottom: '10px' }}>
            Trigger SOS
          </button>
          <button style={{ backgroundColor: '#1d4ed8', color: 'white', padding: '10px', width: '100%', border: 'none', borderRadius: '5px', marginBottom: '10px' }}>
            Request Legal Help
          </button>
          <textarea placeholder="Describe the incident..." style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
          <button style={{ backgroundColor: '#16a34a', color: 'white', padding: '10px', width: '100%', border: 'none', borderRadius: '5px' }}>
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}
