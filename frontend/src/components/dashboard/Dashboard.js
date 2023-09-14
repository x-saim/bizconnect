import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainListItems from './MainListItems';
import SecondaryListItems from './SecondaryListItems';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard';
import ExperienceTable from './ExperienceTable';
import EducationTable from './EducationTable';
import Spinner from '../layout/Spinner';
function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        BizConnect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Dashboard = ({
  getCurrentProfile,
  user: { user },
  profile: { profile, loading },
}) => {
  const [open, setOpen] = useState(true);

  //Upon mount, execute getCurrentProfile
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${user}`);
  };

  const handleEditProfileClick = () => {
    navigate('/edit-profile');
  };

  const handleAddEducationClick = () => {
    navigate('/add-education');
  };

  const handleAddExperienceClick = () => {
    navigate('/add-experience');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}></AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav'>
            <MainListItems
              handleProfileClick={handleProfileClick}
              handleEditProfileClick={handleEditProfileClick}
              handleAddEducationClick={handleAddEducationClick}
              handleAddExperienceClick={handleAddExperienceClick}
            />
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems />
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {loading && profile === null ? (
            <Spinner />
          ) : profile !== null ? (
            <>
              <ProfileCard profile={profile} user={user} />
              <Container maxWidth='lg' sx={{ mt: 5, mb: 4 }}>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 300,
                    }}
                  >
                    <h2 className='medium'>Experience</h2>
                    <ExperienceTable
                      rows={
                        profile ? (
                          profile.experience
                        ) : (
                          <p>No experience available.</p>
                        )
                      }
                    />
                  </Paper>
                </Grid>
              </Container>
              <Container maxWidth='lg' sx={{ mt: 5, mb: 4 }}>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 300,
                    }}
                  >
                    <h2 className='medium'>Education</h2>

                    <EducationTable
                      rows={
                        profile ? (
                          profile.education
                        ) : (
                          <p>No education available.</p>
                        )
                      }
                    />
                  </Paper>
                </Grid>
              </Container>
              <Copyright sx={{ pt: 4 }} />
            </>
          ) : (
            <>
              <p>You have not yet set up a profile. Please create one:</p>
              <Button
                variant='contained'
                color='primary'
                onClick={() => navigate('/edit-profile')}
              >
                Create Profile
              </Button>
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer,
  profile: state.profileReducer,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
