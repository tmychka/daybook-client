import React, {useState} from "react";
import { Link } from 'react-router-dom';

import '../authorization.css'

function SignUpForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      {
        name: name,
        email: email,
        password: password
      }
    )
  }

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
        {/* <Link to="Dashboard"> */}
          <button 
                  type="submit"
                  className="btn btn-primary">
                    Submit
          </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default SignUpForm;