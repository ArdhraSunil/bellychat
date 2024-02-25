import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './chatbox.module.css'

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isEmergencyCallInProgress, setIsEmergencyCallInProgress] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(prevState => !prevState);
  };

  const handleEmergencyCallButtonClick = () => {
    setIsEmergencyCallInProgress(prevState => !prevState);
  };

  return (
    <div className={styles.chatPageBody}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Welcome to our website</h1>
      </div>
      <br></br>
      <div className={styles.buttonContainer}>
        <Link onClick={handleChatButtonClick} to={'/chat'}>
          <button>
            {isChatOpen ? 'Close Chat' : 'CHAT WITH DOCTOR'}
          </button>
        </Link>

        <button onClick={handleEmergencyCallButtonClick}>
          {isEmergencyCallInProgress ? 'Cancel Emergency Call' : 'EMERGENCY CALL'}
        </button>

        <button onClick={handleEmergencyCallButtonClick}>
          {isEmergencyCallInProgress ? 'Cancel Emergency Call' : 'VIDEO CALL'}
        </button>

        <button onClick={handleEmergencyCallButtonClick}>
          {isEmergencyCallInProgress ? 'Cancel Emergency Call' : 'MEDICINE TRACKER'}
        </button>

      </div>
    </div>
  );
};

export default HomePage