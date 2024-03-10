import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LogIn.css';

function LogIn() {
  const navigate = useNavigate();
  const [voterId, setVoterId] = useState('');
  const [password, setPassword] = useState('');
  const [isVoterIdValid, setIsVoterIdValid] = useState(true); 

  const validCredentials = [
    { voterId: "ABC1234567", password: "varma", route: '/Onlinevoting' },
    { voterId: "XYZ9876543", password: "king", route: '/Voting' },
   
  ];

  async function submit(e) {
    e.preventDefault();

    const matchingCredential = validCredentials.find(credential => {
      return credential.voterId === voterId && credential.password === password;
    });

    if (matchingCredential) {
      navigate(matchingCredential.route); 
    } else {
      alert('Incorrect voter ID or password. Please try again.');
    }
  }

  // Validate voter ID format
  function validateVoterId(id) {
    const validFormat = /^([A-Z]{3}\d{7})$/; 
    return validFormat.test(id);
  }

  function handleVoterIdChange(e) {
    const newValue = e.target.value;
    setVoterId(newValue);
    setIsVoterIdValid(validateVoterId(newValue));
  }

  return (
    <div>
      <div className="login-container">
        <h1 className="login-title">Login For Voting</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="voterId">Voter ID:</label>
            <input
              type="text"
              id="voterId"
              value={voterId}
              onChange={handleVoterIdChange}
              className={isVoterIdValid ? '' : 'invalid'} // Apply a CSS class for invalid IDs
            />
            {!isVoterIdValid && <p className="error-message">Invalid voter ID format.</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="ac">
            <button type="submit" className="login-button">Sign In</button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <footer className="footer">
<div >

            <div className="col-lg-3 col-md-12 col-sm-12 col-12 section2">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 app-icons">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 copy-info"> 
                  <h6 className='version'>Version: Coming Soon</h6>
                  <h6 className='last'>Available Soon </h6>
                  <h6 className="copyright">© Copyright 2026 VoteForChange. All Rights Reserved.</h6>
                </div>
              </div>
            </div>


 </div>

</footer>
    </div>
  );
}

export default LogIn;
