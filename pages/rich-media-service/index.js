import React from "react";
import LayoutProvider from "../../layout/LayoutProvider";
import InnerNav from "../../components/Nav/InnerNav";
import Chat from '../../views/Learner/RichMediaService/ServiceChat'
import { richService as navItems } from "../../constants/nav_items";
 
const Settings = () => {
  return ( 
    <LayoutProvider
      alternate
      rightContent={
        <InnerNav navItems={navItems} destructiveAction="Unsubscribe" />
      }
    >
      <Chat />
    </LayoutProvider>
  );
};

export default Settings;
