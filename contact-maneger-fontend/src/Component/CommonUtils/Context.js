import { createContext, useState } from "react";

export const userData = createContext();

const Context = ({ children }) => {
  const [Token, setToken] = useState(null);
  const [usercontacts, setUserContacts] = useState([])
  const [userContactData, setUserContactData] = useState("")
  const [onDeleteButtonClick, setOnDeleteButtonClick] = useState(false)
  const [outputArray, setOutputArray] = useState([])

  return (
    <>
      <userData.Provider
        value={{
          Token,
          setToken,
          usercontacts,
          setUserContacts,
          userContactData,
          setUserContactData,
          onDeleteButtonClick,
          setOnDeleteButtonClick,
          outputArray,
          setOutputArray,
        }}
      >
        {children}
      </userData.Provider>
    </>
  );
};

export default Context;
