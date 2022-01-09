import { useState } from "react";
// import api from '../api';

import '../authorization.css';

function SignUpForm({ setMode }) {
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
          <input
            type="text"
            className="form-control"
            onChange={handleName}
            value={name}
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            onChange={handleEmail}
            value={email}
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            onChange={handlePassword}
            value={password} 
            placeholder="password"
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
          className="s-in"
          onClick={() => setMode('sign-in')}>
          Dive here 
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
