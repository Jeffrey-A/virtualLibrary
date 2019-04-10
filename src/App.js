import React, { Component } from 'react';
import logo from './logo.svg';
import placeholder from './placeholder.png';
import './App.css';

const Header = () =>{
  return (
      <header className="welcome-section text-center">
          <h1 className="main-title">Vitual Library</h1>
          <p className="main-title-description">Welcome! feel free to searh or add books.</p>
      </header>
  );

}

const Nav = () =>{
  return (
      <nav className="navigation-bar text-center">
          <button type="button">
          Add Book
          </button>
          <input type="text" placeholder="Search books" />
          <Button className="search-bt" text="Search" />
          
      </nav>
  );
}

const Button = (props) =>{
  return (
      <button className={props.className}>{props.text}</button>
  );
}

const Book = (props) =>{
  return (
      <div className="book-wrapper text-center">
          <img className="book-img" src={placeholder}/>
          <h3>{props.bookName}</h3>
          <p>{props.author}</p>
      </div>
  );
}

const BookContainer = () =>{
  return (
      <div className="book-container">
          <Book bookName="Book 1" author="Author 1"/>
          <Book bookName="Book 2" author="Author 2"/>
          <Book bookName="Book 3" author="Author 3"/>
      </div>
  );
}


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
