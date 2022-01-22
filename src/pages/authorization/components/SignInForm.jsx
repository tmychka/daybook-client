import { useState } from "react";

import api from '../api';

const initialUser = {
  email: '',
  password: '',
};

function SignInForm({
  onModeChange,
  onSubmitSuccess,
}) {
  const [user, setUser] = useState(initialUser);
  const [errors, setErrors] = useState('');

  const hasUnfilled = Object.values(user).some(value => !value.trim());
  const isSubmitDisabled = hasUnfilled || !!errors;

  const handleUserChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }));
    setErrors('');
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    api.loginUser(user)
      .then(({ data }) => {
      onSubmitSuccess(data);
    })
    .catch(({ response }) => {
      setErrors(response.data.errors);
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          value={user.email}
          onChange={handleUserChange}
          placeholder="email"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          value={user.password}
          onChange={handleUserChange}
          placeholder='password'
          />
          {errors && (
            <div className="invalid-feedback d-block text-center">{errors}</div>
          )}
      </div>
  
      <button 
        type="submit"
        disabled={isSubmitDisabled} 
        className="btn btn-dark left"
      >
        Dive in
      </button>

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
  );
};

export default SignInForm;