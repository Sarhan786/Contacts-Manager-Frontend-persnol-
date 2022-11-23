import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {useContext} from 'react'
import {userData} from '../../../../CommonUtils/Context'

const ContactTable = ()=>{
  const {usercontacts,Token} = useContext(userData)
  console.log(usercontacts)
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
                    {
                      usercontacts.map((element,index)=>{
                        return(<>
                        {
                          (index%2==1)?
                          <>
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
                          </>:
                          <>
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
                          </>
                        }
                      
                   
                        </>)
                      })
                    }
                   
                    
                  </tbody>
                </table>
        </>

    )
}

export default ContactTable;