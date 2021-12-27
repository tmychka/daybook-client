import React from "react";
import { Link } from 'react-router-dom';

import '../authorization.css'

function SignInForm() {

  return (
    <div className="form">
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <Link to="Dashboard">
          <button type="submit" className="btn btn-primary">Submit</button>
        </Link>
      </form>
   </div>
  );
};

export default SignInForm;