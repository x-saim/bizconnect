import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment'; // Import moment.js
import { deleteEducationField } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertActions';

const EducationTable = ({ rows, deleteEducationField, alert }) => {
  // Sort the education rows by the 'from' date in descending order
  const sortedRows = [...rows].sort((a, b) => {
    // Convert the 'from' values to Date objects for comparison
    const dateA = new Date(a.from);
    const dateB = new Date(b.from);

    // Sort in descending order
    return dateB - dateA;
  });

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
          {sortedRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.school}
              </TableCell>
              <TableCell align='right'>{row.degree}</TableCell>
              <TableCell align='right'>{row.fieldofstudy}</TableCell>
              <TableCell align='right'>
                {moment(row.from).format('YYYY-MM-DD')}
              </TableCell>
              <TableCell align='right'>
                {!row.to ? 'Current' : moment(row.to).format('YYYY-MM-DD')}
              </TableCell>
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

export default connect(null, { setAlert, deleteEducationField })(
  EducationTable
);
