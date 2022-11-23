import './toltip.css'
import Navbar from './ToltipComponent/navbar';
import Sidebar from './ToltipComponent/sidebar'; 
import Button from './ToltipComponent/Bottoncomponent'
import ContactTable from './ToltipComponent/ContactTable';

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
                <Button/>
              </div>
              <div className='ContactTable'>
                <ContactTable/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TolTip;