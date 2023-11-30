import React, { useState } from 'react';
//import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HistoryIcon from '@mui/icons-material/History';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import styled from '@emotion/styled';

const drawerWidth = 240;
const transitionDuration = 200;

const StyledDrawer = styled('div')({
  width: drawerWidth,
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  transform: 'translateX(-100%)',
  transition: `transform ${transitionDuration}ms`,
  // backgroundColor: '#2074d4',
   backgroundColor: '#ffffff',
});

const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 1,
});

const StyledTop = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
});

const largeIconStyle = {
  fontSize: '5rem',
};

const listItemStyle = {
  padding: '20px', 
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <StyledIconButton onClick={toggleDrawer}>
            <MenuIcon />
          </StyledIconButton>
        </Toolbar>
      </AppBar>
      <StyledDrawer style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <StyledTop>
          <ListItemIcon>
            <AccountCircleIcon style={largeIconStyle} />
          </ListItemIcon>
        </StyledTop>
        <List>
          <ListItem style={listItemStyle} button>

            <AccountCircleIcon/>
            <ListItemText primary="Profile" />
      
          </ListItem >
          <ListItem style={listItemStyle} button>
          
            <PlayArrowIcon />
            <ListItemText primary="Track Now" />
            {/* <Link to={'/profile'} style={{textDecoration:'none'}}></Link> */}
          </ListItem>
          <ListItem style={listItemStyle} button>
            <HistoryIcon />
            <ListItemText primary="History" />
          </ListItem>
          <ListItem style={listItemStyle}  button>
           < TipsAndUpdatesIcon/>
            <ListItemText primary="Tip of The Day" />
          </ListItem>
          {/* Add more menu items here */}
        </List>
      </StyledDrawer>
      <main>
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
