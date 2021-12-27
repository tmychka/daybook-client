import {useState} from "react";
// import { Link } from 'react-router-dom';

import '../authorization.css'

function SignInForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        email: email,
        password: password
      }
    )
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={handleEmail}
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password"
            className="form-control"
            onChange={handlePassword} />
        </div>
        {/* <Link to="Dashboard"> */}
          <button type="submit" className="btn btn-primary">Submit</button>
        {/* </Link> */}
      </form>
   </div>
  );
};

export default SignInForm;