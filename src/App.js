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
  
      },

      {
        title:"Book 2",
        author:"Author 2",
        
      },

      {
        title:"Book 3",
        author:"Author 3",
        
      },
      {
        title:"Book 4",
        author:"Author 4",
        
      },
      {
        title:"Book 5",
        author:"Author 5",
        
      }
    ]
  };
    
  }

  createBooks(books){
    const allbooks = books.map((book, i) =>{
      books[i].id = i;
    return <Book bookName={books[i].title} author={books[i].author} key={books[i].id} />
    });
    
    return allbooks;
  }
  
  

  render(){
    const books = this.createBooks(this.state.booksList);
    
    return (
      <div>
          <Header />
          
          <Nav getBook={this.getBookInfo}/>  {/* passing the method */}
          <div className="book-container">
            {books}
          </div>  
          
      </div>
      
      );
  }
  
}

export default App;
