import { useState } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import ChatList from './Components/ChatList';

function App() {
  const [user, setUser] = useState({});

  const getUser = (infos) => {
    setUser(infos);
  };

  return (
    <div className='App'>
      <ChatList onChatClick={getUser} />
      <Chat user={user} />
    </div>
  );
}

export default App;
