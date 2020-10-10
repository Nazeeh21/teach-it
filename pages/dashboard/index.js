import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { EXPERT, LEARNER } from "../../constants";
import LayoutProvider from "../../layout/LayoutProvider";
import ExpertDashboard from "../../views/ExpertDashboard";
import LearnerDashboard from "../../views/LearnerDashboard";
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  let userType = useSelector((state) => state.app.userType);

  useEffect(() => {
    function checkUsetData() {
      const token = localStorage.getItem('token')
      
      console.log('Token', token)

      if (!token) {
        router.push('/')
      }
    }
  
    window.addEventListener('storage', checkUsetData)
  
    return () => {
      window.removeEventListener('storage', checkUsetData)
    }
  }, [])

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
