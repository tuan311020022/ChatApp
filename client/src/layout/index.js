import React from 'react';
import Header from '.././components/header';
import Footer from '.././components/footer';
import './style.css';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';
import Home from '../pages/Home/Home';
import { Route } from 'react-router-dom';
import { Routes ,route } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
      <div className='background-header'>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path = '/signin' element = {<Signin/>} />
          <Route path = '/signup' element = {<Signup/>} />
          <Route path = '/home' element = {<Home/>} />
        </Routes>
      </div>
      <div className='background-footer'>
        <Footer />
      </div>      
    </div>
  );
}

export default Layout;
