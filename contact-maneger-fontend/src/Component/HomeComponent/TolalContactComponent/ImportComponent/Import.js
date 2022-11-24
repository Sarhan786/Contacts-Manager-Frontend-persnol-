import React from 'react';
import Popup from 'reactjs-popup';
import DragAndDrop from './DragAndDrop';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import {useState,useEffect} from 'react';
import axios from 'axios'




const Import  = ({setUserContactData})=>{

    return(
        <Popup className="Popup" trigger={ <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left"><ImportExportIcon /> Import</button>} 
         position="right center">
        <DragAndDrop setUserContactData={setUserContactData}/>
      </Popup>
    )
}

export default Import;