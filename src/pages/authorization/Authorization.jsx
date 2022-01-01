import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import './authorization.css';


function Authorization() {
  const [mode, setMode] = useState('sign-in');

  return (
    <div className="authorization">
      <div className="authorization-form">
        <div className="sign">
          <span
            className="s-in"
            onClick={() => setMode('sign-in')}
          >
            Sign In
          </span>
          <span
            className="s-up"
            onClick={() => setMode('sign-up')}
          >
            Sign Up
          </span>
        </div>
          {mode === 'sign-in' && <SignInForm />}
          {mode === 'sign-up' && <SignUpForm />}
      </div>
    </div>
  );
};

export default Authorization;
