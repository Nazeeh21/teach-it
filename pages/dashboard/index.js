import React from "react";
import { useSelector } from "react-redux";
import { EXPERT, LEARNER } from "../../constants";
import LayoutProvider from "../../layout/LayoutProvider";
import ExpertDashboard from "../../views/ExpertDashboard";
import LearnerDashboard from "../../views/LearnerDashboard";

const Index = () => {
  let userType = useSelector((state) => state.userType);

  if (userType === LEARNER) {
    return (
      <LayoutProvider>
        <LearnerDashboard />
      </LayoutProvider>
    );
  }

  if (userType === EXPERT) {
    return (
      <LayoutProvider>
        <ExpertDashboard />
      </LayoutProvider>
    );
  }
};

export default Index;
