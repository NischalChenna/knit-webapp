import "./SignUpHead.scss";
import React from "react";

interface SignupHeaderProps {
  step: Number;
  newUser: Boolean;
}
function SignUpHead(props: SignupHeaderProps) {
  return (
    <div className="signup-container">
      <h2 className="signup-container-title">
        {props.newUser ? `Get Started` : `Welcome Back`}
      </h2>
      {props.newUser ? (
        <React.Fragment>
          {" "}
          <h4 className="signup-section-title">
            {props.step == 1 ? `1.Sign-Up` : `2. Additional Details`}
          </h4>
          <div className="status-shape-container">
            <div className="status-shape "></div>
            <div className="status-shape"></div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default SignUpHead;
