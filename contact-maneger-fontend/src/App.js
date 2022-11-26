import React, { useEffect, useState, useMemo,lazy,Suspense } from "react";
import "./App.css";
import Login from "./Component/LoginRegistation/Login";
import SignUp from "./Component/LoginRegistation/Signup";
import ErrorBoundary from "./Component/CommonUtils/Errorboundries";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Context from "./Component/CommonUtils/Context";
const TotalContact = lazy(()=>import("./Component/HomeComponent/TotalContact/TotalContact"))

function App() {
  const [auth, setAuth] = useState("");
  const PrivateRoute = ({ userToken }) => {
    return userToken ? (
      <>
        <Outlet />
      </>
    ) : (
      <>
        <Navigate to="/Login" />
      </>
    );
  };

  return (
    <ErrorBoundary>
    <Context>
      <Router>
        <Routes>
          <Route exact path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login SetUserToken={setAuth} />} />
          <Route path="/" element={<PrivateRoute userToken={auth} />}>
            <Route path="/" element={<Suspense fallback="loading..."><TotalContact SetUserToken={setAuth} /></Suspense>} />
          </Route>
        </Routes>
      </Router>
    </Context>
    </ErrorBoundary>
  );
}

export default App;
