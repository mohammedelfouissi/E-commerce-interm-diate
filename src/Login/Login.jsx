import React, { useState } from 'react';
import { useContext } from 'react';
import { Usersprov } from '../App';
import { Link, Navigate } from 'react-router-dom';

function Login() {
  const { Users } = useContext(Usersprov);
  const { SetUsers } = useContext(Usersprov);
  const [Email, SetEmail] = useState('');
  const [Pass, SetPass] = useState('');
  const [loged, setLoged] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const Userfound = Users.find((user) => user.email === Email && user.pass === Pass);
    if (Userfound) {
      setLoged(true);
    }
    if (loged) {
        return <Navigate to="/" />;
      }
    
  };

 
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <form
        className="form-container border p-4"
        style={{ borderRadius: '10px' }}
        onSubmit={handlesubmit}
      >
        <h2 className="text-center">Sign In</h2>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={Email}
          placeholder="Enter your email"
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
        />
        <br />

        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="pass"
            name="pass"
            className="form-control"
            value={Pass}
            placeholder="Enter your password"
            onChange={(e) => {
              SetPass(e.target.value);
            }}
          />
          <br />
        </div>
        <button className="btn btn-primary me-2 px-2" type="submit">
          Login
        </button>
        <div id="emailHelp" className="form-text">
          Don't have an account? |{' '}
          <span>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;