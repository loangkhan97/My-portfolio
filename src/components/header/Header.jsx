import React from 'react';
import "./header.css";
import { Menu, Drawer } from "antd";
import { useState } from 'react';
import { MenuOutlined } from "@ant-design/icons";



const Header = () => {
  const [openMenu, setOpenMenu ]  = useState(false);
  return (
    <div style={{ height:"100vh", backgroundColor:"rgb(0, 150, 255)"}}>
      <div 
        className='menuIcon' 
        style={{
          backgroundColor:"darkorange", 
          height:60, 
          paddingLeft:12, 
          paddingTop: 12
          }}>
        <MenuOutlined 
          style={{ 
            color: "white", 
            fontSize:30 
          }} 
          onClick={()=> {
          setOpenMenu(true);
        }} 
      />
      </div>

      <span className='headerMenu'> 
        <AppMenu /> 
      </span>

      <Drawer 
        placement='left' 
        open={openMenu}
        onClose={()=> { 
          setOpenMenu(false);}
        } 
        closable={false} 
        drawerStyle={{backgroundColor:"darkorange"}}
      >
        <AppMenu isInline />
      </Drawer>
    </div>
  );
}

function AppMenu({isInline=false}) {
  return (
    <Menu 
      style={{backgroundColor:"darkorange", color:"white", fontSize:24, border:"none"}}
      mode={ isInline? "inline" : "horizontal"}
      items={[
        {
          label: "About",
          key: "about",
        },
        {
          label: "Services",
          key: "services",
        },
        {
          label: "Portfolio",
          key: "portfolio",
        },
        {
          label: "Conta",
          key: "home",
        },
      ]}
      ></Menu>
  )
}

export default Header