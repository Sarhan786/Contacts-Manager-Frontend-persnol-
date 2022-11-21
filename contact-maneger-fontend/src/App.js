import "./App.css";
import Login from "./Component/LoginRegistation/Login";
import SignUp from "./Component/LoginRegistation/Signup";
import TotalContact from "./Component/HomeComponent/TotalContact/TotalContact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/TotalContact" element={<TotalContact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
