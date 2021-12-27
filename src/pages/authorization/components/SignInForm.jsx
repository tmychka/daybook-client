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
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={handleEmail}
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handlePassword} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
   </div>
  );
};

export default SignInForm;
