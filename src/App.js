import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import BookContainer from './Book';


const App = () =>{
  return (
  <div>
      <Header />
      <Nav />
      <BookContainer />  
  </div>
  
  );
}

export default App;
