import React, { useState } from "react";
import "./App.css";
import Login from "./Component/LoginRegistation/Login";
import SignUp from "./Component/LoginRegistation/Signup";
import TotalContact from "./Component/HomeComponent/TotalContact/TotalContact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Context from "./Component/CommonUtils/Context";

function App() {
  const [userToken, SetUserToken] = useState(false);

  function PrivateRoute({ userToken }) {
    if (userToken) {
      return <Outlet />;
    } else {
      return <Navigate replace to="/Login" />;
    }
  }

  return (
    <Context>
      <Router>
        <Routes>
          <Route exact path="/Signup" element={<SignUp />}></Route>
          <Route
            path="/Login"
            element={<Login SetUserToken={SetUserToken} />}
          ></Route>
          <Route path="/" element={<PrivateRoute userToken={userToken} />}>
            <Route path="/" element={<TotalContact />} />
          </Route>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
