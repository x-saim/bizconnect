export const AddExperience = () => {
    return (
        <div class="inner-table">
            <div class="table-heading" >
                <h4>Experience</h4>
            </div>
            <table class="table" >
                <tr>
                    <th>Company</th>
                    <th>Tittle</th>
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
        </div>
    )
}