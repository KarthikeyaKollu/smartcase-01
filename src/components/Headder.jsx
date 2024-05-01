import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {Avatar} from "@nextui-org/react";
import {  Dropdown,
      DropdownTrigger, 
      DropdownMenu,
        DropdownSection, 
          DropdownItem,
        Button} from "@nextui-org/react";

export const Headder = () => {
  const navigate = useNavigate();
  return (
    <div>
     <HeadderStyle> 
     <Dropdown>
      <DropdownTrigger>
        <MenuRoundedIcon/>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        onAction={(key) => {navigate(key)}}
      >
        <DropdownItem key="/" >Home</DropdownItem>
        <DropdownItem key="/suggestions">Suggestions</DropdownItem>
        <DropdownItem key="/faq"> FAQ</DropdownItem>
        <DropdownItem key="/about"> About us</DropdownItem>
        <DropdownItem key="/ble">Bluetooth</DropdownItem>
        <DropdownItem key="/" className="text-danger" color="danger">
           Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>





    
      <span><Link to="/">ProCase</Link></span>







      <Link to="/profile"><Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" /></Link>
      
      
      
      </HeadderStyle>
      
    </div>
  )
}

const HeadderStyle=styled.div`
    
    
    font-size: 30px;
    font-weight:bold;
    padding-top: 40px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 25px;
`
