
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-700 mb-2">Helpmebot</h1>
        <p className="text-gray-600 text-lg">Smart Chatbot for Community Safety & Emergency Response</p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        <section className="md:col-span-2">
          <Card className="shadow-xl">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">Chat with Helpmebot</h2>
              <div className="h-96 overflow-y-auto bg-gray-50 p-4 rounded-xl border mb-4">
                {chatLog.map((msg, idx) => (
                  <div key={idx} className={`mb-2 ${msg.sender === "User" ? "text-right" : "text-left"}`}>
                    <span className="font-semibold text-gray-700">{msg.sender}:</span> {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={handleSend} className="bg-blue-600 text-white hover:bg-blue-700">Send</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-red-600 mb-2">Emergency SOS</h3>
              <p className="text-sm text-gray-700 mb-3">Trigger an emergency alert that shares your live location and opens your camera and mic.</p>
              <Button variant="destructive" className="w-full">Trigger SOS</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Legal Assistance</h3>
              <p className="text-sm text-gray-700 mb-3">Connect with a verified lawyer or police official for professional help.</p>
              <Button variant="outline" className="w-full">Request Legal Help</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Report an Incident</h3>
              <Textarea placeholder="Describe the incident..." className="mb-3" />
              <Button className="w-full bg-green-600 text-white hover:bg-green-700">Submit Report</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Safety Tips</h3>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                <li>Always be aware of your surroundings.</li>
                <li>Don’t share personal details with strangers.</li>
                <li>Secure your home and valuables.</li>
                <li>Report any suspicious activity immediately.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Helpmebot. All rights reserved.
      </footer>
    </div>
  );
}
