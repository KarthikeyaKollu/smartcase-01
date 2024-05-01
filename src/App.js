import React, { useEffect,useState } from 'react';
import { Wrapper } from './Wrapper';
import { Profile } from './components/Profile';
import { Suggestions } from './components/Suggestions';
import { Menu } from './components/Menu';
import {Headder} from "./components/Headder"
import {Page} from "./components/Page"
import {FAQ} from "./components/FAQ"
import {About} from "./components/About"
import {BluetoothReceiver} from "./components/BluetoothReceiver"

import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import { Tabs, Tab } from '@nextui-org/react';
import { Link } from 'react-router-dom';


import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const App = () => {
  const { pathname } = useLocation();
  const [appHeight, setAppHeight] = useState(window.innerHeight);

 
  
  return (
    <>
       
      <div  className="flex flex-col gap-2" >
      <Headder/>

        
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Outlet />} />
          </Route>
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/ble" element={<BluetoothReceiver/>} />
          <Route path="/breath" element={<Page type={"breath"}/>} />
          <Route path="/exercise" element={<Page type={"exercise"}/>} />
          <Route path="/walk" element={<Page type={"walk"}/>} />
        </Routes>


        
        <div className="flex justify-center fixed bottom-0 w-full bg-gray-100 p-2  ">
        <Tabs selectedKey={pathname} color="primary" aria-label="Tabs" classNames="" size='lg' fullWidth radius='sm' variant="light" >

          <Tab key="/"  title={
            <div className="flex items-center space-x-2">
              <HomeOutlinedIcon fontSize='large'/>
              <span><Link to="/">Home</Link></span>
            </div>}
            />

          <Tab key="/suggestions"  title={
            <div className="flex items-center space-x-2">
              <AutoAwesomeOutlinedIcon fontSize='large'/>
              <span><Link to="/suggestions">Suggestions</Link></span>
            </div>} />

          <Tab key="/profile"  title={
            <div className="flex items-center space-x-2">
              <AccountCircleOutlinedIcon fontSize='large'/>
              <span><Link to="/profile">Profile</Link></span>
            </div>} />
            
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default App;
