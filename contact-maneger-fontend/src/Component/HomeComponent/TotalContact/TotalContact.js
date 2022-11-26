import TolTip from "../TolalContactComponent/Toltip/TolTip";
import { useState, useEffect, useContext } from "react";

const TotalContact = (props) => {
  const [userTotalContact, SetUserTotalContact] = useState([]);
  return (
    <>
      <div>
        <TolTip
          TotalContact={{ userTotalContact, SetUserTotalContact }}
          {...props}
        />
      </div>
    </>
  );
  
};

export default TotalContact;
