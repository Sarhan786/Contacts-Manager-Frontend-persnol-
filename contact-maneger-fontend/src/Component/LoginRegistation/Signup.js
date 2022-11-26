import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import "../../Styles/Signup.css";
const SignUp = () => {
  // const [value, setValue] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errormsg, setErrormsg] = useState("");
  const Navigator = useNavigate();

  async function registerNewUser() {
    await axios
      .post("https://contactsmanager-backend.herokuapp.com/register", {
        name: /^[a-zA-Z]+$/.test(email.substring(0, email.lastIndexOf("@")))
          ? email.substring(0, email.lastIndexOf("@"))
          : "NA",
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        Navigator("/Login");
      })
      .catch((e) => {
        console.log("--->", e);
        if (e.response.data.message === "User already exists") {
          setErrormsg("User already exists");
        } else if (e.response.data?.errors[0]?.param === "email") {
          setErrormsg("Enter a valid email ID");
        } else if (e.response.data?.errors[0]?.param === "password") {
          setErrormsg("Password length should be 6-16 characters only");
        }
      });
  }

  function handleSubmit() {
    console.log(email, password, confirmPass);
    if (password !== confirmPass) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
      registerNewUser();
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
          <p className="subheading">Create New Account</p>
          <input
            className="input_fields"
            type="email"
            placeholder="Mail ID"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>

          <input
            className="input_fields"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <input
            className={`input_fields ${passwordMatch}`}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
          ></input>
          {(!passwordMatch || errormsg) && (
            <p className="password-error">
              {errormsg ? errormsg : "Confirm Password did not matched"}
            </p>
          )}
          <button
            className="signUp_button"
            onClick={() => {
              setErrormsg("");
              handleSubmit();
            }}
          >
            Sign Up
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

export default SignUp;
