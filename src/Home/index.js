import React from "react";
import { useSelector } from 'react-redux';
import Chats from "../Chats";
import Profile from "../Profile"

const HomeComponent = () => {
  const openComponent = useSelector(state => state.home);
  
  return (
      <React.Fragment>
      {openComponent.openChat && <Chats />}
      {openComponent.openProfile && <Profile />}
      </React.Fragment>
  );
};

export default HomeComponent;