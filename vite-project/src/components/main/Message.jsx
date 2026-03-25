import { useState } from "react";
import styles from "./Message.module.css";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Mary Ann" },
];

const initialMessages = {
  1: [
    { from: "them", text: "Where is my order?" },
    { from: "me", text: "It’s on the way 🚚" },
  ],
  2: [{ from: "them", text: "Thank you!" }],
};

const Message = () => {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = { from: "me", text: input };

    setMessages({
      ...messages,
      [activeUser.id]: [...messages[activeUser.id], newMsg],
    });

    setInput("");
  };

  return (
    <div className={styles.container}>
      {/* LEFT SIDEBAR */}
      <div className={styles.sidebar}>
        {users.map((user) => (
          <div
            key={user.id}
            className={`${styles.user} ${
              activeUser.id === user.id ? styles.active : ""
            }`}
            onClick={() => setActiveUser(user)}
          >
            {user.name}
          </div>
        ))}
      </div>

      {/* CHAT AREA */}
      <div className={styles.chat}>
        <div className={styles.header}>{activeUser.name}</div>

        <div className={styles.messages}>
          {messages[activeUser.id]?.map((msg, i) => (
            <div
              key={i}
              className={msg.from === "me" ? styles.sent : styles.received}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className={styles.inputArea}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
