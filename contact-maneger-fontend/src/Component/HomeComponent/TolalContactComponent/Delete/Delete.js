import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userData } from "../../../CommonUtils/Context";
import { useContext } from "react";
import Popup from "reactjs-popup";
import "../../../../Styles/DragAndDrop.css";

const Delete = () => {
  const { setOnDeleteButtonClick } = useContext(userData);
  return (
    <>
      <Popup
        classname="Popup"
        trigger={
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Tooltip on bottom"
          >
            <DeleteOutlineIcon fontSize="medium" /> Delete
          </button>
        }
        position="right center"
      >
        <div className="PopupBox">
          <p className="paraimport">Delete Contacts</p>
          <p className="paradrag">Sure you want delete this Contacts ?</p>
          <button
            className="Cancelbtn"
            onClick={() => {
              setOnDeleteButtonClick(true);
            }}
          >
            Delete
          </button>
        </div>
      </Popup>
    </>
  );
};

export default Delete;
