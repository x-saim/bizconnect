import { Box, Button, Grid, TextField } from "@mui/material"
import { useState } from "react";
import { createOrUpdateProfile } from "../../redux/actions/profileActions";

export const Edit = () => {
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
        
        createOrUpdateProfile({company, website, location, bio, status, skills, youtube, facebook, twitter, instagram, linkedin, github})
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
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
                            autoComplete=''
                            autoFocus
                            value={github}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Button
                            type='submit'
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