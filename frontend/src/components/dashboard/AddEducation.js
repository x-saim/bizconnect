import { Typography } from "@mui/material"
import BasicTable from "./Table"

export const AddEduction = () => {
    return (
        <>
            <Typography sx={{marginY: '12px'}} variant='h3'>Education</Typography>
            <BasicTable />
        {/* <div class="inner-table">
            <div class="table-heading">
                <h4>Education</h4>
            </div>
            <table class="table" >
                <tr>
                    <th>School</th>
                    <th>Degree</th>
                    <th>From</th>
                    <th>to</th>
                    <th colspan="2">Edit / Delete</th>
                </tr>
                <tr>
                    <td>abc</td>
                    <td>abc</td>
                    <td>abc</td>
                    <td>abc</td>
                    <td style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>edit</span>
                        <span>delete</span>
                    </td>
                </tr>
            </table>
        </div> */}
        </>
    )
}