import { useState } from "react";
// import api from '../api';

import '../authorization.css';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password
    };

    // api.createUser(user);
    console.log(user);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={handleEmail}
            value={email}
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handlePassword}
            value={password} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
