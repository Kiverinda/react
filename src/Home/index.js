import React from "react";
import { useSelector } from 'react-redux';
import Chats from "../Chats";
import Profile from "../Profile"
import TestComponent from "../Test";

const HomeComponent = () => {
  const openComponent = useSelector(state => state.home);
  // return (
  //   <div>
  //     <TestComponent />
  //   </div>
  // )
  
  switch (openComponent.openComponent) {
    case ('profile'):
      return (
        <div>
          <Profile />
        </div>
    );
    case ('api'):
      return (
        <div>
          <TestComponent />
        </div>
    );
    default:
      return(
        <div>
          <Chats />
        </div>
    );
  }

};

export default HomeComponent;