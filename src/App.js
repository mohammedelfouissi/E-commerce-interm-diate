
import { createContext, useState } from 'react';
import Nav from './Navigation/Nav';
import Registerform from './Reagistation/Registerform';
import { Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.css'
export const Usersprov=createContext(null)

function App() {
 const [Users,SetUsers]=useState([]);
 const [logged,SetLogged]=useState(false)
 const [Categoriesvalue,SetCategoriesvalue]=useState()
  return (
    <Usersprov.Provider
      value={{
        Users,
        SetUsers,
        logged,
        SetLogged,
        Categoriesvalue,
        SetCategoriesvalue,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
 
            </>
          }
        />
        <Route path="/register" element={<Registerform />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Usersprov.Provider>
  );
}

export default App;
