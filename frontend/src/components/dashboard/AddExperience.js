import { Typography } from "@mui/material"
import BasicTable from "./Table"
import { Box, Button, Grid, TextField } from "@mui/material"
import { useState } from "react";
import { addEductionField } from "../../redux/actions/profileActions";
import { connect } from "react-redux";
import { setAlert } from '../../redux/actions/alertActions';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const AddExperience = ({ setAlert, addEductionField, profile }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldOfStudy: '',
        // from: dayjs(''),
        // to: dayjs(''),
    });
    const [from, setFrom] = useState(dayjs(''))
    const [to, setTo] = useState(dayjs(''))

    console.log(addEductionField)

    console.log(profile?.education)
    // Destructure input values from formData
    const { school, degree, fieldOfStudy } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();

        addEductionField({ school, degree, fieldOfStudy, from, to })
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Typography sx={{ marginY: '12px' }} variant='h3'>Education</Typography>
            <BasicTable col1='Company' col2='Title' col3='Location' col4='From' col5='To' rows={[['scholl', 'degree', 'sad', 'sds']]} />
            <Box sx={{}}>
                <Typography sx={{ marginY: '12px' }} variant='h5'>Add New Experience</Typography>
                <Grid direction="row"
                    justifyContent="center"
                    alignItems="center"
                    container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='school'
                            label='Company'
                            name='school'
                            autoFocus
                            value={school}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='degree'
                            label='Title'
                            name='degree'
                            autoFocus
                            value={degree}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='fieldOfStudy'
                            label='Location'
                            name='fieldOfStudy'
                            autoFocus
                            value={fieldOfStudy}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <DatePicker
                            label="From"
                            fullWidth
                            margin= 'normal'
                            value={from}
                            onChange={(value) => setFrom(value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <DatePicker
                            label="To"
                            fullWidth
                            margin= 'normal'
                            value={to}
                            onChange={(value) => setTo(value)}
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
    profiles: state.profileReducer.profiles,
});

export default connect(mapStateToProps, { setAlert, addEductionField })(AddExperience);