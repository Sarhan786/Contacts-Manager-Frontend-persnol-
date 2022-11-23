import React from 'react';
import Popup from 'reactjs-popup';
import DragAndDrop from './DragAndDrop';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import "../Toltip/toltip.css"

const Import  = ()=>{
    return(
        <Popup trigger={<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left" ><ImportExportIcon/> Import </button>}>
        <DragAndDrop/>
      </Popup>
    )
}

export default Import;