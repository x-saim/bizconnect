import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';

const MainListItems = ({
  handleProfileClick,
  handleEditProfileClick,
  handleAddEducationClick,
  handleAddExperienceClick,
}) => {
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
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary='Edit Profile' />
      </ListItemButton>
      <ListItemButton onClick={handleAddEducationClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Add Education' />
      </ListItemButton>
      <ListItemButton onClick={handleAddExperienceClick}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Add Experience' />
      </ListItemButton>
    </>
  );
};

export default MainListItems;
