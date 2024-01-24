
import { createContext, useState } from 'react';
import Nav from './Navigation/Nav';
import Registerform from './Reagistation/Registerform';
import { Routes, Route } from "react-router-dom";
import Login from './Login/Login';
 
export const Usersprov=createContext(null)

function App() {
 const [Users,SetUsers]=useState([]);

  return (
    <Usersprov.Provider value={{ Users, SetUsers }}>
    
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/register" element={<Registerform />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    
    </Usersprov.Provider>
  );
}

export default App;
