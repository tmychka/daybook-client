import { useState } from "react";

import '../authorization.css';

function SignInForm({ setMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      {
        email: email,
        password: password
      }
    );
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            onChange={handleEmail}
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            onChange={handlePassword}
            placeholder='password'
            />
        </div>
        <button
          type="submit" 
          className="btn btn-primary left">
          Create shelter
        </button>
      </form>
      <div className="entrance">
        <p>Aware already?</p>
        <span
          className="s-up"
          onClick={() => setMode('sign-up')}>
          Dive here 
        </span>
      </div>
   </div>
  );
};

export default SignInForm;
