import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Usersprov } from '../App';
import {Link, useNavigate } from 'react-router-dom';

function Login() {
  const { Users } = useContext(Usersprov);
  const { SetUsers } = useContext(Usersprov);
  const { SetLogged } = useContext(Usersprov);
  const [Email, SetEmail] = useState('');
  const [Pass, SetPass] = useState('');
  const [error,SetError]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
     fetch('http://localhost:3001/Users').then(reponse=>reponse.json()).then(res=>SetUsers(res))
  
  },[])
  const handlesubmit = (e) => {
    e.preventDefault();
    const Userfound = Users.find((user) => user.email === Email && user.pass === Pass);
    if (Userfound) {
     navigate('/')
     SetLogged(true)
    }
    else{
       SetError("Incorrect Email or Password")
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
        {error&& <div class="alert alert-danger" role="alert">{error}</div>}
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