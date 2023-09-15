import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const MainListItems = ({ handleProfileClick, handleEditProfileClick }) => {
  return (
    <>
      <ListItemButton onClick={handleProfileClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='My Profile' />
      </ListItemButton>
      <ListItemButton onClick={handleEditProfileClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Edit Profile' />
      </ListItemButton>
    </>
  );
};

export default MainListItems;
