import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import BookContainer from './Book';


class App extends Component{

  constructor(){
    super();
    this.state ={
      books:[
        {
          title:"Book 1",
          author:"Author 1"
        },

        {
          title:"Book 2",
          author:"Author 2"
        },

        {
          title:"Book 3",
          author:"Author 3"
        }

      ]
    };
  }

  render(){
    return (
      <div>
          <Header />
          <Nav />
          <BookContainer />  
      </div>
      
      );
  }
  
}

export default App;
