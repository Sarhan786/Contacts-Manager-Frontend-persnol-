import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useContext, useState, useEffect } from "react";
import { userData } from "../../../../CommonUtils/Context";
import { Scrollbars } from "react-custom-scrollbars";
import { width } from "@mui/system";

const ContactTable = ({ Contact }) => {
  const { usercontacts, Token, onDeleteButtonClick } = useContext(userData);

  const deleteOne = (e) => {
    Contact.setDeleteContact([e.target.id]);
  };

  const Editone = (e) => {};

  const deletemany = (e) => {
    Contact.setDeleteManyContact([...Contact.deleteManyContact, e.target.id]);
  };

  useEffect(() => {
    Contact.deleteManyContact.forEach((element) => {
      document.getElementById(element).checked = false;
    });
  }, [onDeleteButtonClick]);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" style={{ cursor: "pointer" }} />
            </th>
            <td>Name</td>
            <td>Designation</td>
            <td>Comapny</td>
            <td>Industry</td>
            <td>Email</td>
            <td>Phone number</td>
            <td>Country</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {usercontacts.map((element, index) => {
            return (
              <>
                {index % 2 == 1 ? (
                  <>
                    <tr className="uncoloredRow">
                      <th scope="col">
                        <input
                          type="checkbox"
                          style={{ cursor: "pointer" }}
                          id={element._id}
                          onClick={deletemany}
                        />
                      </th>
                      <td>{element.name}</td>
                      <td>{element.Designation}</td>
                      <td>{element.Company}</td>
                      <td>{element.Industry}</td>
                      <td>{element.Email}</td>
                      <td>{element.Phone_number}</td>
                      <td>{element.Country}</td>
                      <td>
                        {" "}
                        <ModeEditIcon
                          id={element._id}
                          style={{ color: "green", cursor: "pointer" }}
                        />{" "}
                        <DeleteOutlineIcon
                          id={element._id}
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={deleteOne}
                        />{" "}
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr className="coloredRow">
                      <th scope="row">
                        <input
                          type="checkbox"
                          style={{ cursor: "pointer" }}
                          id={element._id}
                          onClick={deletemany}
                        />
                      </th>
                      <td>{element.name}</td>
                      <td>{element.Designation}</td>
                      <td>{element.Company}</td>
                      <td>{element.Industry}</td>
                      <td>{element.Email}</td>
                      <td>{element.Phone_number}</td>
                      <td>{element.Country}</td>
                      <td>
                        <ModeEditIcon
                          id={element._id}
                          style={{ color: "green", cursor: "pointer" }}
                          onClick={Editone}
                        />{" "}
                        <DeleteOutlineIcon
                          id={element._id}
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={deleteOne}
                        />
                      </td>
                    </tr>
                  </>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactTable;
