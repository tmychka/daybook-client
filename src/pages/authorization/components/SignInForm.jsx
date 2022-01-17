import { useState } from "react";

import api from '../api';

function SignInForm({
  onModeChange,
  onSubmitSuccess,
}) {
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

    api.loginUser({
      email: email,
      password: password,
    }).then(({ data }) => {
      onSubmitSuccess(data);
    });
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
        <div>
          <button type="submit" className="btn btn-dark left">Dive in</button>
        </div>
        <hr />
        <div className="entrance">
          <p>No shelter?</p>
            <span
              className="s-in-up"
              onClick={() => onModeChange('sign-up')}>
              Dive here
            </span>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
