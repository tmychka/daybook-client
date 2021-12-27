import {BrowserRouter, Routes, Route} from "react-router-dom";
import Authorization from './pages/authorization/Authorization';
import Dashboard from './components/Dashboard/dashboard'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Authorization />} /> 
           <Route path="/Dashboard" element={<Dashboard />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
