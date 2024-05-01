import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heart from '../Assets/Heart.png';
import BPM from "../Assets/BPM.png"
import SpO2 from "../Assets/SpO2.png"
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-web';
import animationData from '../Assets/ani.json';

const LottieAnimation = ({ autoplay, width, height }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      renderer: 'svg',
      loop: true,
      autoplay: autoplay,
    });

    return () => {
      // Cleanup: Pause and destroy the animation when the component unmounts
      anim.stop();
      anim.destroy();
    };
  }, [autoplay]);

  return <div ref={animationContainer} style={{ width, height }} />;
};


const getTitleStyles = (props) => {
  switch (props.title) {
    case 'BPM':
      return `
      background: #818cf8;
      
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
          
        `;
    case 'SpO2':

      return `
      
      background: #eab308;
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 5px );
      -webkit-backdrop-filter: blur( 5px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
          
        `;
    case 'Heart':

      return `
              background: #f46650;
              
            `;
    case 'Extra':

      return `
                  background: #22949e;
                  
                `;
    // Add more cases for other titles
    default:

      return `
          background: #00C9FF;
          background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF);
          background: linear-gradient(to right, #92FE9D, #00C9FF);
        `;
  }
};






export const Card = ({ title, value, timestamp, range }) => {



  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [pic, setPic] = useState();
  const [units, setUnits] = useState("");
  useEffect(() => {
    if (title == "BPM") {
      setPic(BPM)
      setUnits("BPM")
    }
    else if (title == "SpO2") {
      setPic(SpO2)
      setUnits("%")
    }
    else if (title == "Heart") {
      setPic(Heart)
      setUnits("bpm")
    }
    else
      setPic(Heart)
    //setUnits("..")

  }, [])

  const handleAnimationClick = () => {
    setIsAnimationPlaying(!isAnimationPlaying);
  };


  const CardContainer = styled.div`
  /* Card container styles here */
 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-radius: 10px;
      ${getTitleStyles({ title })}
      font-size: 10px;
      width: 150px;
      height: 150px;
      color: #ffffff;
      
`;




  return (
    <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}   >




      {value != null ? (
        <CardContainer className='shadow-xl shadow-slate-300' >


          <Title>
            <img src={pic} alt="" width="30px" height="30px" />
            <span className="text-lg">{title}</span>
          </Title>
          <div className="mb-4">
            <span className="text-5xl">{value}</span> <span>{units}</span>
          </div>
          <div > <span className="text-sm">{timestamp}</span>  min ago</div>
        </CardContainer>) : (
        <div class="animate-pulse flex space-x-4">
          <div className='w-[150px] h-[150px] bg-slate-400 rounded-md'></div>
        </div>
      )
      }
    </div>
  );
};



const Title = styled.span`

  font-size: 25px;
  font-weight: 10px;
  display: flex;
  padding-bottom: 5px;
  gap: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  

`;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
};
