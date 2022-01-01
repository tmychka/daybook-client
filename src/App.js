import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authorization from './pages/authorization/Authorization';
import Dashboard from './pages/dashboard/Dashboard'

import './App.css';

const isAuth = false;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Dashboard />} />
            </>
          ) : (
            <Route path="/" element={<Authorization />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
