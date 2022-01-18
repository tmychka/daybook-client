import { useState } from "react";
import { mapValues } from 'lodash';
import api from '../api';

const initialUser = {
  full_name: '',
  email: '',
  password: '',
};

function SignUpForm({
  onModeChange,
  onSubmitSuccess,
}) {
  const [user, setUser] = useState(initialUser);
  const [errors, setErrors] = useState({});

  const hasUnfilled = Object.values(user).some(value => !value.trim());
  const hasError = Object.values(errors).some(value => !!value);
  const isSubmitDisabled = hasUnfilled || hasError;

  const handleUserChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitDisabled) return;

    api.createUser(user)
      .then(({ data }) => {
        onSubmitSuccess(data);
      })
      .catch(({ response }) => {
        setErrors(mapValues(response.data.errors, ([error]) => error));
      });
  };

  const renderError = errorName => errors[errorName] && (
    <div class="invalid-feedback d-block text-center">{errors[errorName]}</div>
  );

  return (
    <form className="form d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <div className="w-100 mb-3">
        <input
          type="text"
          name="full_name"
          className="form-control"
          onChange={handleUserChange}
          value={user.full_name}
          placeholder="Full Name"
        />
        {renderError('full_name')}
      </div>

      <div className="w-100 mb-3">
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          className="form-control"
          onChange={handleUserChange}
        />
        {renderError('email')}
      </div>

      <div className="w-100 mb-3">
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          className="form-control"
          onChange={handleUserChange}
        />
        {renderError('password')}
      </div>

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="btn btn-dark left"
      >
        Create shelter
      </button>

      <hr />

      <p className="entrance">
        Aware already?&nbsp;
        <span className="s-in-up" onClick={() => onModeChange('sign-in')}>
          Dive here
        </span>
      </p>
    </form>
  );
};

export default SignUpForm;
