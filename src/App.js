import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Book from './Book';


class App extends Component{

  constructor(){
    super();
    this.state = {
     booksList :[
      {
        title:"Book 1",
        author:"Author 1",
        id:1
      },

      {
        title:"Book 2",
        author:"Author 2",
        id:2
      },

      {
        title:"Book 3",
        author:"Author 3",
        id:3
      },
      {
        title:"Book 4",
        author:"Author 4",
        id:4
      },
      {
        title:"Book 5",
        author:"Author 5",
        id:5
      }
    ]
  };
    
  }

  createBooks(){
    const allbooks = this.state.booksList.map((book, i) =>{
    return <Book bookName={this.state.booksList[i].title} author={this.state.booksList[i].author} key={this.state.booksList[i].id} />
    });
    return allbooks;
  }
  

  render(){
    const books = this.createBooks();
    return (
      <div>
          <Header />
          <Nav />
          <div className="book-container">
            {books}
          </div>  
          
      </div>
      
      );
  }
  
}

export default App;
