function ChatMessage({ text, sender }) {
  return (
    <div className={`message-wrapper ${sender}`}>
      <div className="message-content">{text}</div>
    </div>
  );
}

export default ChatMessage;
