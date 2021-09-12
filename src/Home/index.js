import React from "react";
import { useSelector } from 'react-redux';
import Chats from "../Chats";
import Profile from "../Profile"

const HomeComponent = () => {
  const openComponent = useSelector(state => state.home);
  
  return (
      <div>
      {openComponent.openChat && <Chats />}
      {openComponent.openProfile && <Profile />}
      </div>
  );
};

export default HomeComponent;