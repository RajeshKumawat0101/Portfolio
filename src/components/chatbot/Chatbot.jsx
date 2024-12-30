// const Chatbot = ()=>{
//     return (
//         <div className="container">
//             <div className="chatbot-popup">
//                 <div className="chat-header">
//                     <div className="header-info">
//                         <h1>chatbotIcon</h1>
//                         <h2 className="logo-text">Chatbot</h2>

//                     </div>
//                     <button className="material-symbols-rounded">arrow_down</button>
//                 </div>
//                 <div className="chat-body">
//                     <div className="message bot-message">
//                         <p className="message-text">Hey there. How can I help you today?</p>
//                     </div>
//                     <div className="message user-message">
//                         <p className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga 
//                             quasi placeat culpa atque in....</p>
//                     </div>
//                 </div>
//                 <div className="chat-footer">
//                     <form action="#" className="chat-form">
//                         <input type="text" placeholder="message...."
//                          className="message-input" required></input>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useState } from "react";
// import "./Chatbot.css";
import styles from  "./chatbot.module.css";
import getRespfromBot from ".";

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
 
    const userMessage = { text: input, sender: "user" };
    const respReceived = await getRespfromBot(input);
    const botMessage = { text: `${respReceived}`, sender: "bot" };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setInput(""); // Clear input field
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.chatbot} id="chatbots">
      <div className={styles.chatbot_header} id="chatbot-header">Chat with Me</div>
      <div className={styles.chatbot_messages} id="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.chatbot_message} ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.chatbot_input} id ="chatbot-input" >
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
    </div>
  );
};

// export default Chatbot;
