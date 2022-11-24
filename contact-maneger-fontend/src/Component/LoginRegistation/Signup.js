import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
import "../../Styles/Signup.css";
const SignUp = () => {
  // const [value, setValue] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  async function registerNewUser() {
    await axios
      .post("http://localhost:5050/register", {
        name: email.substring(0, email.lastIndexOf("@")),
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e.message);
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
          {!passwordMatch && (
            <p className="password-error">Confirm Password did not matched</p>
          )}
          <button
            className="signUp_button"
            onClick={() => {
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
