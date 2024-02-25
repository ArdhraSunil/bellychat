import { useState } from 'react';
import styles from './chatbox.module.css'
export default function Chatbox(){
  const [messages, setMessages] = useState([]);
    
  const [inputText, setInputText] = useState('');

  const handleMessageSend = () => {
    if (inputText.trim() !== '') {
      setMessages([messages, inputText]);
      setInputText('');
    }
  };
    return(
        <div className={styles.chatPageBody}>
        <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>{message}</div>
        ))}
      </div>

      <input
        type="text"
        className={styles.messageInput} placeholder="Type a message..."
        
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className={styles.sendButton} onClick={handleMessageSend}>Send</button>
    </div>
    </div>
    )

}