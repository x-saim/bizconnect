import { Box, Button, Grid, TextField } from "@mui/material"
import { useState } from "react";
import { createOrUpdateProfile } from "../../redux/actions/profileActions";
import { connect } from "react-redux";
import { setAlert } from '../../redux/actions/alertActions';
import PropTypes from 'prop-types';

const Edit = ({setAlert, createOrUpdateProfile, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        bio: '',
        status: '',
        skills: '',
        youtube: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        github: '',
    });

    // Destructure input values from formData
    const { company, website, location, bio, status, skills, youtube, facebook, twitter, instagram, linkedin, github } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(company, website, location, bio, status, skills, youtube, facebook, twitter, instagram, linkedin, github)

        createOrUpdateProfile({ company, website, location, bio, status, skills, youtube, facebook, twitter, instagram, linkedin, github })
        console.log("sdsds")
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    return (
        <>
            <Box sx={{}}>
                <Grid direction="row"
                    justifyContent="center"
                    alignItems="center"
                    container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='company'
                            label='Company'
                            name='company'
                            autoFocus
                            value={company}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='website'
                            label='Website'
                            name='website'
                            autoFocus
                            value={website}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='location'
                            label='Location'
                            name='location'
                            autoFocus
                            value={location}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='bio'
                            label='Bio'
                            name='bio'
                            autoFocus
                            value={bio}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='status'
                            label='Status'
                            name='status'
                            autoFocus
                            value={status}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='skills'
                            label='Skills'
                            name='skills'
                            autoFocus
                            value={skills}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='youtube'
                            label='Youtube'
                            name='youtube'
                            autoFocus
                            value={youtube}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='facebook'
                            label='Facebook'
                            name='facebook'
                            autoFocus
                            value={facebook}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='twitter'
                            label='Twitter'
                            name='twitter'
                            autoFocus
                            value={twitter}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='instagram'
                            label='Instagram'
                            name='instagram'
                            autoFocus
                            value={instagram}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='linkedin'
                            label='Linkedin'
                            name='linkedin'
                            autoFocus
                            value={linkedin}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='github'
                            label='Github'
                            name='github'
                            autoFocus
                            value={github}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                            value='Update'
                        >
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

//Get the auth state
const mapStateToProps = (state) => ({
    isAuthenticated: state.userReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, createOrUpdateProfile })(Edit);