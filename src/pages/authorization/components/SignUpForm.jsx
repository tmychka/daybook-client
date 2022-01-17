import { useState } from "react";

import api from '../api';

const initialUser = {
  name: '',
  email: '',
  password: '',
};

function SignUpForm({
  onModeChange,
  onSubmitSuccess,
}) {
  const [user, setUser] = useState(initialUser);

  const handleUserChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.createUser(user).then(({ data }) => {
      onSubmitSuccess(data);
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="full_name"
            className="form-control"
            onChange={handleUserChange}
            value={user.full_name}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Email"
            className="form-control"
            onChange={handleUserChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            className="form-control"
            onChange={handleUserChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-dark left">Create shelter</button>
        </div>
        <hr />
        <div className="entrance">
          <p>Aware already?</p>
          <span className="s-in-up" onClick={() => onModeChange('sign-in')}>
            Dive here
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
