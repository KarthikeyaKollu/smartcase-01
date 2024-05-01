import {Card, CardBody,Badge} from "@nextui-org/react";
import styled from 'styled-components'
import React, { useEffect, useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import animationData from '../Assets/AI.json';
import animationData2 from '../Assets/AI-2.json';
import Lottie from 'lottie-web';


const LottieAnimation = ({ autoplay, width, height, className }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      renderer: "svg",
      loop: true,
      autoplay: autoplay
    });

    return () => {
      // Cleanup: Pause and destroy the animation when the component unmounts
      anim.stop();
      anim.destroy();
    };
  }, [autoplay]);

  return <div ref={animationContainer} className={className} style={{ width, height }} />;
};


const LottieAnimation2 = ({ autoplay, width, height, className }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData2,
      renderer: "svg",
      loop: true,
      autoplay: autoplay
    });

    return () => {
      // Cleanup: Pause and destroy the animation when the component unmounts
      anim.stop();
      anim.destroy();
    };
  }, [autoplay]);

  return <div ref={animationContainer} className={className} style={{ width, height }} />;
};

















export const SuggestionsCard = () => {
  return (
    
    <div >

      <Name>
          <span className="font-bold text-3xl  mt-20 ">Hi, <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Harrison</span></span>
          <span className="text-xs  ">Check the suggestions</span>
          

      </Name>
      <div className="flex items-center justify-center">
       
          <Card
          
          isBlurred
          isPressable
          
          className="border-none  bg-background/60 dark:bg-default-100/50 max-w-[610px]   w-11/12 h-20 mt-10"
          shadow="sm"
        > 
        
          <CardBody className="overflow-hidden mx-auto">
             <Link to="/suggestions"> 
              
             <div className="flex  items-center pt-5">
              <span className="text-md ml-3">AI Generated Recommendations</span>
              <div className={" absolute right-0"}><LottieAnimation2 autoplay={true} width="150px" height="150px"  /></div>
               
              </div>
             
             
              </Link>
          </CardBody>

          </Card>
          <div className="relative right-5 bottom-5"><Badge content="new" placement="top-right" color="primary" variant="shadow" ></Badge></div>
      
    </div>

    <div className=" flex items-center  ">
            <LottieAnimation autoplay={true} width="200px" height="200px" className="z-0 absolute top-0" />
            <LottieAnimation autoplay={true} width="100px" height="100px" className="z-0  absolute top-0" />
            <LottieAnimation autoplay={true} width="100px" height="100px" className=" z-0  absolute top-0" />
            <LottieAnimation autoplay={true} width="100px" height="100px" className="z-0  absolute top-0" />
    </div>
    
    </div>
  )
}

const Name =styled.div`
  
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    padding-left: 30px;
`





