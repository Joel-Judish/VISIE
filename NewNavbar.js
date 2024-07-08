import { Link } from "react-router-dom";
import Logo from "../Components_final/finalimages/Group 6.png";
import React,{ useState } from "react";

import {HiOutlineBars3} from "react-icons/hi2";
import {Box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import List from "@mui/icons-material/List";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


import { useNavigate } from "react-router-dom";



export function NewNavbar(){
  

    const navigate = useNavigate();
    const [openMenu,setOpenMenu] = useState(false)
      const menuOptions = [
        {
          text: "Home",
          icon: <HomeIcon/>
        },
        {
          text: "About",
          icon: <InfoIcon/>
        },
        {
          text: "Contact",
          icon: <CommentRoundedIcon/>
        },
        {
          text: "COnatact",
          icon: <ShoppingCartRoundedIcon/>
        },
      ];
      
      
  return(
   
    <nav>
    <div className="nav-logo-container">
      <img src={Logo} alt="" />
    </div>
   <div className="navbar-links-container">
   <Link to="/" className="link">
      Home
    </Link>
    <Link to="/about" className="link" smooth>
      About
    </Link>
    <Link to="/brailgo" className="link" smooth>
      Know More
    </Link>
    <Link to="/contact" className="link" smooth>
      Contact
    </Link>
    
    
  </div>
  <div className="navbar-menu-container">
    <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>

  </div>
  <Drawer open={openMenu} onClose={() => setOpenMenu(false)}anchor="right">
    <Box sx={{width: 250}}
    role="presentation"
    onClick={() => setOpenMenu(false)}
    onKeyDown={() => setOpenMenu(false)}
    >
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text}  disablePadding >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
              </ListItem>
            

          ))}
        </List>
        </Box>
        </Drawer>

  </nav>
   
    
 
  )
}