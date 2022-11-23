import { createContext, useState } from "react";

export const userData = createContext();

const Context = ({ children }) => {
  const [Token, setToken] = useState(null);

  return (
    <>
      <userData.Provider
        value={{
          Token,
          setToken,
        }}
      >
        {children}
      </userData.Provider>
    </>
  );
};

export default Context;
