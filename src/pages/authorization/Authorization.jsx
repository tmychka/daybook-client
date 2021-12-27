import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import './authorization.css'


function Authorization() {
  const [isSignInMode, setIsSignInMode] = useState(true);

  return (
    <div>
      <div className="sign">
        <span className="s-in"
              onClick={() => setIsSignInMode(true)}>
                Sign In
        </span>
        <span className="s-up"
              onClick={() => setIsSignInMode(false)}>
                Sign Up
        </span>
      </div>
      { isSignInMode ? <SignInForm /> : <SignUpForm /> }
    </div>
  );
};

export default Authorization;