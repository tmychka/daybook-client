import { useState, useEffect, useCallback, useContext } from 'react';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

import api, { setAuthToken } from './api';
import { AppDispatchContext } from '../../contexts';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/localStorage';

import './authorization.scss';

function Authorization() {
  const dispatch = useContext(AppDispatchContext);

  const [mode, setMode] = useState('sign-in');

  const handleSubmitSuccess = useCallback(({ token, ...user }) => {
    if (token) {
      setAuthToken(token);
      setLocalStorageItem('db_auth_token', token);
    }

    dispatch({ type: 'ADD_USER', user });
  }, []);

  useEffect(() => {
    const authToken = getLocalStorageItem('db_auth_token');

    if (authToken) {

      setAuthToken(authToken);
      api.checkLogin().then(({ data }) => {
        handleSubmitSuccess(data);
      });
    }
  }, []);

  return (
    
    <div className="authorization">
      <div className="authorization-form">
        <p className="authorization-p">Welcome aboard, buddy!</p>
        {mode === 'sign-in' && (
          <SignInForm
            onModeChange={setMode}
            onSubmitSuccess={handleSubmitSuccess}
          />
        )}
        {mode === 'sign-up' && (
          <SignUpForm
            onModeChange={setMode}
            onSubmitSuccess={handleSubmitSuccess}
          />
        )}
      </div>
    </div>
  );
};

export default Authorization;
