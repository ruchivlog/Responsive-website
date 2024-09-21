import React,{ useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from "./context";

const about = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection/>; 
} 
   
export default about
            