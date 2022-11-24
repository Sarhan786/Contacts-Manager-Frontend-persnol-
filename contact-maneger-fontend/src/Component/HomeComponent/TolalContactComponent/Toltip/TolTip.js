import './toltip.css'
import Navbar from './ToltipComponent/navbar';
import Sidebar from './ToltipComponent/sidebar'; 
import Button from './ToltipComponent/Bottoncomponent'
import ContactTable from './ToltipComponent/ContactTable';
import {userData} from '../../../CommonUtils/Context'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios';


const TolTip = () => {

  const generatedToken = sessionStorage.getItem("GeneratedToken")
  const {setUserContacts,setToken} = useContext(userData)
  
 
  useEffect(()=>{
    try{
 const getUsersContact = async()=>{
   const Responce = await axios.get("http://localhost:5050/contacts/",{
    headers:{
        authorization:generatedToken
    }
   })
   setUserContacts(Responce.data.ContactData[0].userContacts
    )
   setToken('true')
 }
 getUsersContact();
    }
    catch(error){
        console.log(error)
    }
 },[])
  
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