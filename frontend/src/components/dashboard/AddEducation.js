import { Typography } from "@mui/material"
import EducationTable from "./EducationTable"
import { Box, Button, Grid, TextField } from "@mui/material"
import { useState } from "react";
import { addEductionField } from "../../redux/actions/profileActions";
import { connect } from "react-redux";
import { setAlert } from '../../redux/actions/alertActions';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const AddEduction = ({ setAlert, addEductionField, profile }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        description: '',
        // from: dayjs(''),
        // to: dayjs(''),
    });
    const [from, setFrom] = useState(dayjs(''))
    const [to, setTo] = useState(dayjs(''))

    console.log(addEductionField)
    // Destructure input values from formData
    const { school, degree, fieldofstudy, description } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();

        addEductionField({ school, degree, fieldofstudy, from, to, description })
        setFormData(prev => {
            return {
                ...prev,
                school: '',
                degree: '',
                fieldofstudy: '',
                description: '',
            }
        })
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
            <EducationTable rows={profile ? profile.education : []} />
            <Box sx={{}}>
                <Typography sx={{ marginY: '12px' }} variant='h5'>Add New Education</Typography>
                <Grid direction="row"
                    justifyContent="center"
                    alignItems="center"
                    container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            margin='normal'
                            fullWidth
                            id='school'
                            label='School'
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
                            label='Degree'
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
                            id='fieldofstudy'
                            label='Field of study'
                            name='fieldofstudy'
                            autoFocus
                            value={fieldofstudy}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <DatePicker
                            label="From"
                            fullWidth
                            margin='normal'
                            value={from}
                            onChange={(value) => setFrom(value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <DatePicker
                            label="To"
                            fullWidth
                            margin='normal'
                            value={to}
                            onChange={(value) => setTo(value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            fullWidth
                            rows={4}
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
    profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, { setAlert, addEductionField })(AddEduction);