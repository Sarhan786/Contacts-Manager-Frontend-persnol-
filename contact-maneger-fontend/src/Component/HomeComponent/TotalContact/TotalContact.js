import ImportCompoent from '../TolalContactComponent/ImportComponent/Import'
import TolTip from '../TolalContactComponent/Toltip/TolTip';
import {useState,useEffect} from 'react'

const TotalContact = ()=>{
 const [userTotalContact,SetUserTotalContact] = useState([])

    return (
        <>
       <div style={{width:"100vw"}}>
       <TolTip TotalContact={{userTotalContact,SetUserTotalContact}}/>
       </div>
        </> 
    )
}

export default TotalContact;