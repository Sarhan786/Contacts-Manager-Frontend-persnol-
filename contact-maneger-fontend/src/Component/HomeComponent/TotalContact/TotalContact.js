import TolTip from '../TolalContactComponent/Toltip/TolTip';
import {useState,useEffect,useContext} from 'react'
import axios from 'axios';
import {userData} from '../../CommonUtils/Context'

const TotalContact = ()=>{
 const [userTotalContact,SetUserTotalContact] = useState([]) 
    return (
        <>
       <div>
       <TolTip TotalContact={{userTotalContact,SetUserTotalContact}}/>
       </div>
        </> 
    )
}

export default TotalContact;



