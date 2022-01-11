import { useState } from "react";

import '../authorization.css';

function SignInForm() {
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
      </form>
    </div>
  );
};

export default SignInForm;
