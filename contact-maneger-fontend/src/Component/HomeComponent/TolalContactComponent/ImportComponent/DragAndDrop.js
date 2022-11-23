import React, { useCallback, useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import { useDropzone } from "react-dropzone";
import "../../../../Styles/DragAndDrop.css"
import axios from 'axios'
import { useMediaQuery } from "@mui/material";


const DragAndDrop =({setUserContactData}) =>{
  
  const onDrop = useCallback ((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles) {
      Papa.parse(acceptedFiles[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setUserContactData(results.data)
        },
      });
    }
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
    <div className="PopupBox" {...getRootProps()}>
     <p className="para">Import</p>
      <input {...getInputProps()} />
      <p>Drag & Drop a CSV File to Upload</p>
      <button className="Cancelbtn">Cancel</button>
    </div>

    </>
    
  );
}

export default DragAndDrop;