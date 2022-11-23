import React, { useCallback } from "react";
import Papa from "papaparse";
import { useDropzone } from "react-dropzone";
import "../../../../Styles/DragAndDrop.css"


export default function DragAndDrop() {

  const onDrop = useCallback ((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles) {
      console.log(acceptedFiles[0]);
      Papa.parse(acceptedFiles[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log("Finished:", results.data);
        },
      });
    }
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
    <div className="PopupBox" {...getRootProps()}>
      <input {...getInputProps()} />
      <img className ="fileimg" src ="./file.svg"/>
      <p className="para">Drag & Drop CSV file to upload</p>
      <button className="Cancelbtn">Upload</button>
    </div>

    </>
    
  );
}
