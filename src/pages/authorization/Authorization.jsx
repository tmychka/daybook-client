import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import './authorization.css';


function Authorization() {
  const [mode, setMode] = useState('sign-in');

  return (
    <div className="authorization">
      <div className="authorization-form">
        <p className="authorization-p">Welcome aboard, buddy!</p>  
        {mode === 'sign-in' && <SignInForm setMode={setMode}/>}
        {mode === 'sign-up' && <SignUpForm setMode={setMode}/>}
      </div>
    </div>
  );
};

export default Authorization;

