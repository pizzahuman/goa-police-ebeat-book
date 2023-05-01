// import logo from './logo.svg';
import './App.css';
import { Login } from './Login'
import { Signup } from './Signup'
import { Profile } from '../components/Profile/Profile'
import Header from "./Header"
import Error from './Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
      <>
      <Header />
      <Router>
          <Routes>

            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/profile/BeatOfficer' element={<Profile></Profile>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path="*" element={<Error></Error>}></Route>

          </Routes>
        </Router>
      </>
  );
}

export default App;
