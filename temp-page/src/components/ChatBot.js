import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatMessage from "./ChatMessage";

function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null); // Reference to the chat container
  const isInitialRender = useRef(true); // Track initial render

  // Scroll to the bottom of the chat when messages change, but not on initial render
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "ما فهمت سؤالك" },
      ]);
    } catch (error) {
      console.error("Error fetching bot reply:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "حصل خطأ بالاتصال بالخادم " },
      ]);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h1 className="chatbot-title">المساعد الذكي</h1>
            <p className="chatbot-subtitle">
              مرحباً بك! أنا هنا لمساعدتك في اختيار أفضل الأجهزة التقنية
              والإجابة على استفساراتك
            </p>
          </div>

          <div className="chat-container">
            <div className="chatting" ref={chatContainerRef}>
              {messages.length === 0 ? (
                <div className="welcome-message">
                  <p>👋 مرحباً! كيف يمكنني مساعدتك اليوم؟</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <ChatMessage
                    key={index}
                    sender={msg.sender}
                    text={msg.text}
                  />
                ))
              )}
            </div>
            <div className="chat">
              <input
                type="text"
                value={input}
                placeholder="اكتب سؤالك هنا..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button className="chat-btn" onClick={handleSend}>
                إرسال
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ChatBot;
