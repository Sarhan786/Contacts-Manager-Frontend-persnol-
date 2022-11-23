import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import Import from '../../ImportComponent/Import';
import Export from '../../Export/Export';
import Delete from '../../Delete/Delete'
import {useState,useEffect} from 'react';
import react from 'react'
import axios from 'axios'


const Button = ()=>{
  const[userContactData,setUserContactData]= useState("")
  console.log(userContactData)
   useEffect(()=>{
     try{
       const sendUserContactData = async()=>{
         if(userContactData){
          console.log('hello')
           const Responce = await axios.patch(`http://localhost:5050/contacts/637d2c5584db83017daf7bfb`,userContactData)
           console.log(Responce)
       } }
       sendUserContactData();
     }
     catch(error){
      console.log(error)
     }
   },[userContactData])
    return(
        <>
<div style={{dispaly:"grid",girdTemplateColoums:"60% 40%"}}>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><CalendarMonthIcon/> SelectDate <KeyboardArrowDownIcon size="small" /></button>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right"><FilterListIcon size="small" /> Filters |<KeyboardArrowDownIcon size="small" /></button>
                </div>
                <div>
                  <Delete/>
                  <Import setUserContactData={setUserContactData}/>
                  <Export/>
                </div>

        </>
    )
}

export default Button;