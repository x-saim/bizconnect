import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { deleteEducationField } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertActions';

const EducationTable = ({ rows, deleteEducationField, alert }) => {
  return (
    <TableContainer component={Paper} sx={{}}>
      <Table sx={{ minWidth: 900 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>School</TableCell>
            <TableCell align='right'>Degree</TableCell>
            <TableCell align='right'>Field Of Study</TableCell>
            <TableCell align='right'>From</TableCell>
            <TableCell align='right'>To</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.school}
              </TableCell>
              <TableCell align='right'>{row.degree}</TableCell>
              <TableCell align='right'>{row.fieldofstudy}</TableCell>
              <TableCell align='right'>{row.from}</TableCell>
              <TableCell align='right'>{row.to}</TableCell>
              <TableCell
                onClick={() => deleteEducationField({ edu_id: row._id })}
                align='right'
              >
                <button className='btn btn-danger'>
                  <i class='fa-solid fa-trash'></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

//Get the auth state
const mapStateToProps = (state) => ({
  // profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, { setAlert, deleteEducationField })(
  EducationTable
);
