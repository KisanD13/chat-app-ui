import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { BsFillSendFill } from 'react-icons/bs';
import DisplayMessage from './DisplayMessage';

const Chat = ({ user }) => {
  // console.log(user);
  const [inputMessages, setInputMessages] = useState('');
  const [messages, setMessages] = useState([]);

  const inputMessage = (e) => setInputMessages(e.target.value);

  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length,
        userId: user.id,
        info: inputMessages,
        date: new Date(),
      },
    ]);
    setInputMessages('');
  };

  const userMessages = messages.filter((message) => message.userId === user.id);

  const handlePress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className='chats'>
      <div className='chatsContainer'>
        <NavBar user={user} />

        <div className='displayMessage'>
          <DisplayMessage messages={userMessages} />
        </div>

        <div className='messageTyping'>
          <input
            type='text'
            className='chatsInputValue'
            value={inputMessages}
            onChange={inputMessage}
            onKeyDown={handlePress}
            required
          />
          <BsFillSendFill className='sendIcon' onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
