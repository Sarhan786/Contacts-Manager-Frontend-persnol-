import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { userData } from "../CommonUtils/Context";
import axios from "axios";
import "./Login.css";

const Login = (props) => {
  const { setToken, Token } = useContext(userData);
  const { SetUserToken } = props;
  const [showPassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigator = useNavigate();

  useEffect(()=>{
     const Token = localStorage.getItem("GeneratedToken")
      if(Token){
        SetUserToken(true);
         Navigator("/");
      }
   },[])
  
  async function handleLogin() {
    const res = await axios.post("https://contactsmanager-backend.herokuapp.com/login", {
      email: email,
      password: password,
    });
    if (res) {
      setToken(res.data.token);
      SetUserToken(true);
      Navigator("/");
      localStorage.setItem("GeneratedToken", res.data.token);
    }
  }

  return (
    <>
      <div className="signup-main-div">
        <img
          className="image1"
          src="/EllipseTopLeft.png"
          alt="EllipseTopLeft"
        ></img>

        <div className="signup_form">
          <h2 className="main_heading">Logo</h2>
          <p className="subheading">
            Enter your credentials to access your account
          </p>
          <input
            className="input_fields"
            type="email"
            placeholder="Mail ID"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>

          <div className="input_fields wrapper">
            {showPassword ? (
              <img
                className="password-icon"
                src="/hidePassword.png"
                alt="password-icon"
                onClick={() => {
                  setShowpassword(false);
                }}
              ></img>
            ) : (
              <img
                className="password-icon"
                src="/showPassword.png"
                alt="password-icon"
                onClick={() => {
                  setShowpassword(true);
                }}
              ></img>
            )}

            <input
              className="input_fields password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="loginPage-signIn_button"
            onClick={() => {
              handleLogin();
            }}
          >
            Sign In
          </button>
          <button className="loginPage-signUp_button">
            <Link to="/Signup">Sign Up</Link>
          </button>
        </div>
        <img
          className="image2"
          src="/EllipseBottomRight.png"
          alt="EllipseBottomRight"
        ></img>
      </div>
    </>
  );
};

export default Login;
