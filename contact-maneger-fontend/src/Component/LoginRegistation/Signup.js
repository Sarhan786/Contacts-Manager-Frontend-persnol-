import "../../Styles/Signup.css";
const SignUp = () => {
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
          ></input>
          <input
            className="input_fields"
            type="password"
            placeholder="Password"
          ></input>
          <input
            className="input_fields"
            type="password"
            placeholder="Confirm Password"
          ></input>
          <button className="signUp_button">Sign Up</button>
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
