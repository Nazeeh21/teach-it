import React from "react";
import LayoutProvider from "../../layout/LayoutProvider";
import InnerNav from "../../components/Nav/InnerNav";
import Questions from '../../views/Learner/RichMediaService/Questions'
import { richService as navItems } from "../../constants/nav_items";

const Settings = () => {
  return (
    <LayoutProvider
      alternate
      rightContent={
        <InnerNav navItems={navItems} destructiveAction="Unsubscribe" />
      }
    >
      <Questions />
    </LayoutProvider>
  );
};

export default Settings;
