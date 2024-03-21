import React, { useEffect, useState } from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

import AddChat from './AddChat';

const ChatList = ({ onChatClick }) => {
  const [data, setData] = useState('');
  const [searchData, setSearchData] = useState('');
  const [showAddInput, setshowAddInput] = useState(false);
  const [users, setUsers] = useState([]);

  const changeHandler = (e) => setData(e.target.value);

  const addToChat = () => {
    if (data === '') {
      alert('Please fill the details');
    } else {
      const newId = new Date().getTime();
      setUsers([...users, { id: newId, chatName: data }]);
      setData('');
    }
    setshowAddInput(false);
  };

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(users));
  }, [users]);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('messages');
  //   if (storedData) {
  //     setUsers(JSON.parse(storedData));
  //   }
  //   console.log(storedData);
  // }, []);

  return (
    <div className='users'>
      <div className='container'>
        <h1>Chats</h1>
        <div className='chat'>
          <div className='add'>
            {showAddInput ? (
              <input
                type='text'
                placeholder='Add new user'
                value={data}
                onChange={changeHandler}
                className='Add-User'
              />
            ) : (
              <div className='search'>
                <RiSearch2Line className='searchUser' />
                <input
                  type='text'
                  placeholder='Search'
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                />
              </div>
            )}

            {showAddInput ? (
              <IoMdPersonAdd className='add-icons' onClick={addToChat} />
            ) : (
              <button onClick={() => setshowAddInput(true)} className='btn'>
                Add User
              </button>
            )}
          </div>
          <AddChat
            users={users}
            setUsers={setUsers}
            onChatClick={onChatClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
