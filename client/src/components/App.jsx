// import logo from './logo.svg';
import './App.css';
import { Login } from './Login'
import { Signup } from './Signup'
import { Home } from './Home'
import Header from "./Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
      <>
      <Header />
        <Router>
          <Routes>

            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>

          </Routes>
        </Router>
      </>
  );
}

export default App;
