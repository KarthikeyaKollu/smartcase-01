
import {Card} from "./components/card"
import {SuggestionsCard} from "./components/SuggestionsCard"
import {Button} from "./components/Button"

import  {Menu} from "./components/Menu"





import {readData,writeData} from "./components/firebaseExample"
import React, { useEffect, useRef,useState } from 'react';
import _debounce from 'lodash/debounce';
import {getLocation} from "./components/geoLocation"
import {getGyroscope} from "./components/gyroScope"


import {NextUIProvider} from "@nextui-org/react";
import "./input.css"
import styled from "styled-components"
import StraightenRoundedIcon from '@mui/icons-material/StraightenRounded';


export function Wrapper() {
  const display_flex ={ 
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
  }

  const [data, setData] = useState(0);


  const getData= async ()=>{
    var d = await readData("/UserData")
    setData(d)
    console.log(data)
  }

  const getLoc= async ()=>{
    var defaults= await readData("/PanicButton")
    if (defaults=="true"){
      var d = await getLocation()
      writeData("/Location",d);
      console.log(d)
    }
    
  }



  const getGyro= ()=>{
    getGyroscope((orientationValues) => {
      console.log('Orientation values:', orientationValues);
      var gyro =orientationValues;
      writeData("/gyro/alpha",gyro.alpha);
      writeData("/gyro/beta",gyro.beta);
      writeData("/gyro/gamma",gyro.gamma);
      
    });
  }

  const debouncedGetData = _debounce(getData, 2000);
  const debouncedGetGyro = _debounce(getGyro, 1000);
  const debouncedGetLoc = _debounce(getLoc, 1000);

  useEffect(()=>{
    //debouncedGetLoc()
    

    debouncedGetData();
    
   // debouncedGetGyro()
    
  })
  return (
    <>
    

    
    <NextUIProvider>
   
     
    <SuggestionsCard/>
    <Text/>
    <Cards >
    <Card title={"SpO2"} range={"100-200"} value={data.spo2} timestamp={"5"}/>
    <Card title={"BPM"} range={"100-200"} value={data.bpm} timestamp={"5"}/>
    </Cards>

   
    <Button/>
    {/* <Menu/> */}
    </NextUIProvider>
    </>
   

  );
}


const Cards=styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-left: 30px;
    margin-right: 30px;
    margin-top: -10px;
`






const Text=()=>{

  return(
    <TextDiv>
      <span>Measurements</span>
      <StraightenRoundedIcon fontSize="large"/>
    </TextDiv>

  )
};


const TextDiv=styled.div`

   display: flex;
    justify-content:space-between;
    margin-top:40px;
    margin-left: 30px;
    margin-right: 30px;
    align-items: center;
      
    font-size: 15px;
    font-weight: bold;
`