import React, { useReducer, useState } from 'react'
import { useContext } from 'react'
import { Usersprov } from '../App'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function Registerform() {
const {Users}=useContext(Usersprov)
const {SetUsers}=useContext(Usersprov)
const initvalue={name:'',email:'',pass:''}
const [register,SetRegister]=useState(false)

const reducerfunc=(state,action)=>{
  switch(action.type){
   case 'setname':
    return {...state,name:action.payload}
   case 'setemail':
    return {...state,email:action.payload}
   case 'setpass':
    return{...state, pass: action.payload};
    case 'reset':
    return initvalue;
  
    default:
        return state;

  }
}
const[state,dispatch]=useReducer(reducerfunc,initvalue)
const newuser={name:state.name,email:state.email,pass:state.pass}
const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newuser),
      });
  
      if (response.ok) {
        SetRegister(true)
      } else {
        console.error('Échec de l\'ajout des données.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout des données:', error);
    }
    
    dispatch({type:"reset"})
    
  };

  return (
    <div  className="d-flex justify-content-center align-items-center vh-100 ">
    <form className="form-container border p-4" style={{ borderRadius: '10px' }} onSubmit={handleSubmit}>
        {register&&<div className="alert alert-success" role="alert">
      Register succeeded
    </div>}
        <h2>Sign Up</h2>
        <div className="mb-3">
        <label htmlFor="name" className='form-label'>Fullname:</label><br />
        <input type="text" value={state.name} id="name" name="name" className="form-control" placeholder='Enter your fullname' required onChange={(e)=>{dispatch({type:'setname',payload:e.target.value})}}/><br />
        </div>
        <div className="mb-3">
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        <label htmlFor="email" className='form-label'>Email:</label><br />
        <input type="email" value={state.email} id="email" name="email" className="form-control" placeholder='Enter your email' required onChange={(e)=>{dispatch({type:'setemail',payload:e.target.value})}}/><br />
  
        </div>
        <div className="mb-3">
        <label htmlFor="pass" className='form-label'>Password:</label><br />
        <input type="password" value={state.pass} id="pass" name="pass" className="form-control" placeholder='Enter your password' required onChange={(e)=>{dispatch({type:'setpass',payload:e.target.value})}}/><br />
        </div>
        <button className="btn btn-primary me-2 px-4" type='submit'> Register</button>
        <div id="emailHelp" className="form-text">have account all ready | <span><Link to="/login">Login</Link></span></div>
        
        
    </form>
    
   
    </div>
   
  )
}

export default Registerform