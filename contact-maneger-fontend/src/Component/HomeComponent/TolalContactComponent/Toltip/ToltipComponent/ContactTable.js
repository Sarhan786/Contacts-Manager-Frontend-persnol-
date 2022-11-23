import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ContactTable = ()=>{
    return(
        <>
      <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"><input type="checkbox" /></th>
                      <td>Name</td>
                      <td>Designation</td>
                      <td>Comapny</td>
                      <td>Industry</td>
                      <td>Email</td>
                      <td>Phone number</td>
                      <td>Country</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='uncoloredRow'>
                      <th scope="col"><input type="checkbox" /></th>
                      <td>Name</td>
                      <td>Designation</td>
                      <td>Comapny</td>
                      <td>Industry</td>
                      <td>Email</td>
                      <td>Phone number</td>
                      <td>Country</td>
                      <td> <ModeEditIcon style={{color:"green"}}/> <DeleteOutlineIcon style={{color:"red"}}/> </td>
                    </tr>
                    <tr className="coloredRow">
                      <th scope="row"><input type="checkbox" /></th>
                      <td>Name</td>
                      <td>Designation</td>
                      <td>Comapny</td>
                      <td>Industry</td>
                      <td>Email</td>
                      <td>Phone number</td>
                      <td>Country</td>
                      <td><ModeEditIcon style={{color:"green"}}/> <DeleteOutlineIcon style={{color:"red"}}/>
                      </td>
                    </tr>
                  </tbody>
                </table>
        </>
    )
}

export default ContactTable;