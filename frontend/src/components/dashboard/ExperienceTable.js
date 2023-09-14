import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

import { deleteExperienceField } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertActions';

const ExperienceTable = ({ rows, deleteExperienceField, alert }) => {
  // Sort the rows by the 'from' date in descending order
  const sortedRows = [...rows].sort((a, b) => {
    // Convert the 'from' values to Date objects for comparison
    const dateA = new Date(a.from);
    const dateB = new Date(b.from);

    // Sort in descending order
    return dateB - dateA;
  });

  return (
    <TableContainer component={Paper} sx={{}}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align='right'>Title</TableCell>
            <TableCell align='right'>Location</TableCell>
            <TableCell align='right'>From</TableCell>
            <TableCell align='right'>To</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.company}
              </TableCell>
              <TableCell align='right'>{row.title}</TableCell>
              <TableCell align='right'>{row.location}</TableCell>
              <TableCell align='right'>
                {moment(row.from).format('YYYY-MM-DD')}
              </TableCell>
              <TableCell align='right'>
                {!row.to ? 'Current' : moment(row.to).format('YYYY-MM-DD')}
              </TableCell>
              <TableCell
                onClick={() => deleteExperienceField({ exp_id: row._id })}
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

export default connect(null, { setAlert, deleteExperienceField })(
  ExperienceTable
);
