import React from 'react';
import Popup from 'reactjs-popup';
import DragAndDrop from './DragAndDrop';

const Import  = ()=>{
    return(
        <Popup trigger={<button> Import </button>} 
     position="right center">
        <DragAndDrop/>
      </Popup>
    )
}

export default Import;