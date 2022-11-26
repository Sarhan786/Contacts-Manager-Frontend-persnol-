import "./toltip.css";
import Navbar from "./ToltipComponent/navbar";
import Sidebar from "./ToltipComponent/sidebar";
import Button from "./ToltipComponent/Bottoncomponent";
import ContactTable from "./ToltipComponent/ContactTable";
import { userData } from "../../../CommonUtils/Context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

const TolTip = (props) => {
  const generatedToken = localStorage.getItem("GeneratedToken");
  const {
    setUserContacts,
    setToken,
    userContactData,
    outputArray,
    onDeleteButtonClick,
    setOnDeleteButtonClick,
    setOutputArray,
  } = useContext(userData);
  const [deleteContact, setDeleteContact] = useState([]);
  const [contactDeleted, setContactDeleted] = useState(false);
  const [sendContact, setSendContact] = useState(false);
  const [deleteManyContact, setDeleteManyContact] = useState([]);

  useEffect(() => {
    if (onDeleteButtonClick) {
      setDeleteContact(deleteManyContact);
      setOnDeleteButtonClick(false);
      setDeleteManyContact([]);
    }
  }, [onDeleteButtonClick]);

  useEffect(() => {
    try {
      const getUsersContact = async () => {
        const Responce = await axios.get("https://contactsmanager-backend.herokuapp.com/contacts/", {
          headers: {
            authorization: generatedToken,
          },
        });
        outputArray.length > 0
          ? setOutputArray(Responce.data.ContactData[0].userContacts)
          : setUserContacts(Responce.data.ContactData[0].userContacts);
        setToken("true");
        setContactDeleted(false);
        setSendContact(false);
      };
      getUsersContact();
    } catch (error) {
      console.log(error);
    }
  }, [sendContact, contactDeleted]);

  useEffect(() => {
    try {
      const sendUserContactData = async () => {
        if (userContactData) {
          const Responce = await axios.patch(
            `https://contactsmanager-backend.herokuapp.com/contacts/`,
            userContactData,
            {
              headers: {
                authorization: generatedToken,
              },
            }
          );
          setSendContact(true);
        }
      };
      sendUserContactData();
    } catch (error) {
      console.log(error);
    }
  }, [userContactData]);

  useEffect(() => {
    try {
      const DeleteUserContactData = async () => {
        if (deleteContact.length > 0) {
          const Responce = await axios.patch(
            `https://contactsmanager-backend.herokuapp.com/contacts/deleteOne/`,
            deleteContact,
            {
              headers: {
                authorization: generatedToken,
              },
            }
          );
          console.log(Responce);
          setDeleteContact([]);
          setContactDeleted(true);
        }
      };
      DeleteUserContactData();
    } catch (error) {
      console.log(error);
    }
  }, [deleteContact]);

  return (
    <>
      <div className="ToltipContainer">
        <Sidebar {...props} />
        <div className="mainContainer">
          <Navbar />
          <div className="mainContactContainer">
            <div className="buttonsandContactcontainer">
              <div className="buttonsContainer">
                <Button />
              </div>
              <div className="ContactTable">
                <ContactTable
                  Contact={{
                    setDeleteContact,
                    deleteManyContact,
                    setDeleteManyContact,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TolTip;
