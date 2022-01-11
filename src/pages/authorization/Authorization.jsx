import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import './authorization.css';


function Authorization() {
  const [mode, setMode] = useState('sign-in');
  const signIn = mode === 'sign-in'
  const signUp = mode === 'sign-up'

  return (
    <div className="authorization">
      <div className="authorization-form">
        <p className="authorization-p">Welcome aboard, buddy!</p>  
        {signIn && <SignInForm />}
        {signUp && <SignUpForm />}
        <div>
          <button type="submit" className="btn btn-dark left">Create shelter</button>
        </div>
        <hr />
        <div className="entrance">
          <p>Aware already?</p>
          {signUp ? 
            <span
              className="s-in-up"
              onClick={() => setMode('sign-in')}>
              Dive here 
            </span>
            :
            <span
              className="s-in-up"
              onClick={() => setMode('sign-up')}>
              Dive here 
            </span>
          }
        </div>
      </div>
    </div>
  );
};

export default Authorization;

