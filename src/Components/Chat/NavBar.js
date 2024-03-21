import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { IoCallOutline } from 'react-icons/io5';
import { IoMdMore } from 'react-icons/io';

const NavBar = ({ user }) => {
  // console.log(user);
  return (
    <nav>
      <h1>{user.chatName}</h1>
      <div className='nav_side'>
        <RiSearch2Line />
        <IoCallOutline />
        <IoMdMore />
      </div>
    </nav>
  );
};

export default NavBar;
