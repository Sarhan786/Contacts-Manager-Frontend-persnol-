import './toltip.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Navbar from './ToltipComponent/navbar';
import Sidebar from './ToltipComponent/sidebar';
import Import from '../ImportComponent/Import';



const TolTip = () => {
  return (
    <>
      <div className="ToltipContainer">
        <Sidebar/>  
        <div className='mainContainer'>
          <Navbar/>
          <div className='mainContactContainer'>
            <div className='buttonsandContactcontainer'>
              <div className='buttonsContainer'>
                <div style={{dispaly:"grid",girdTemplateColoums:"60% 40%"}}>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><CalendarMonthIcon/> SelectDate <KeyboardArrowDownIcon size="small" /></button>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right"><FilterListIcon size="small" /> Filters |<KeyboardArrowDownIcon size="small" /></button>
                </div>
                <div>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom"><DeleteOutlineIcon fontSize="medium" /> Delete</button>
                  <Import/>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left"><FileUploadIcon /> Export</button>
                </div>
              </div>
              <div className='ContactTable'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TolTip;