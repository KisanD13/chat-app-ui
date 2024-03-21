import React, { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { BsFillPinAngleFill } from 'react-icons/bs';

const AddChat = ({ users, setUsers, onChatClick }) => {
  const [deleteBtnVisibility, setDeleteBtnVisibility] = useState({});

  const deleteChat = (id) => {
    const updatedUser = users.filter((user) => user.id !== id);
    setUsers(updatedUser);
    setDeleteBtnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: false,
    }));
  };

  const showDelete = (id) => {
    setDeleteBtnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  return (
    <div className='chatList'>
      {users.map((user) => {
        return (
          <div
            className='eachChat'
            key={user.id}
            onClick={() => onChatClick(user)}
          >
            <div className='chatStyle'>
              <RxAvatar />
              <h3>{user.chatName}</h3>
            </div>
            <div className='side-Item'>
              {deleteBtnVisibility[user.id] && (
                <div style={{ display: 'block' }}>
                  <div className='deleteChat'>
                    <h5>Delete User </h5>
                    <MdDeleteOutline
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(user.id);
                      }}
                    />
                  </div>
                </div>
              )}
              <MdOutlineMoreHoriz
                onClick={(e) => {
                  e.stopPropagation();
                  showDelete(user.id);
                }}
              />

              <BsFillPinAngleFill className='pin' />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddChat;
