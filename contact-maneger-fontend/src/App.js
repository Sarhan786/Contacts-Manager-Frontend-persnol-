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
  const [auth, setAuth] = useState("");
  const PrivateRoute = ({userToken})=>{
   return userToken?
   <>
   <Outlet/>
   </>:
   <>
   <Navigate to="/Login"/>
   </>
  }
  
console.log(auth);
  return (
    <Context>
      <Router>
        <Routes>
          <Route exact path="/Signup" element={<SignUp />}/>
          <Route path="/Login" element={<Login SetUserToken={setAuth} />}/>
          <Route path="/" element={<PrivateRoute userToken={auth}/>}>
            <Route path="/" element={<TotalContact />} />
          </Route>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
