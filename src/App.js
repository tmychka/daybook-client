import { useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Authorization from './pages/authorization/Authorization';
import Dashboard from './pages/dashboard/Dashboard';
import Journal from "./pages/journal/Journal";

import { AppDispatchProvider, AppStateProvider } from './contexts';
import { setLocalStorageItem } from './utils/localStorage';

const initialState = { user: null };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.user };
    case 'DELETE_USER':
      return { ...state, user: null };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();
  const isAuthorized = Boolean(state.user);

  useEffect(() => {
    const handleLogout = () => {
      setLocalStorageItem('db_auth_token', null);
      dispatch({ type: 'DELETE_USER' });
      navigate('/');
    };

    document.addEventListener('logout', handleLogout);

    return () => {
      document.removeEventListener('logout', handleLogout);
    };
  }, []);

  return (
    <div className="app">
      <AppDispatchProvider value={dispatch}>
        {isAuthorized ? (
          <AppStateProvider value={state}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/journal" element={<Journal />} />
              </Routes>
            </BrowserRouter>
          </AppStateProvider>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Authorization />} />
            </Routes>
          </BrowserRouter>
        )}
      </AppDispatchProvider>
    </div>
  );
}

export default App;
