import { createContext, useState } from "react";

export const userData = createContext();

const Context = ({ children }) => {
  const [Token, setToken] = useState(null);
  const [usercontacts,setUserContacts] = useState([])
  //console.log(usercontacts)
  return (
    <>
      <userData.Provider
        value={{
          Token,
          setToken,
          usercontacts,
          setUserContacts
        }}
      >
        {children}
      </userData.Provider>
    </>
  );
};

export default Context;
