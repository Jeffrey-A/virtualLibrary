import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Book from './Book';
import $ from 'jquery';


class App extends Component{

  constructor(){
    super();
    this.state = {booksList : []}
  }

  createBooks(books){
    const allbooks = books.map((book, i) =>{
      return <Book bookName={books[i].title} author={books[i].author}  />
    });
    
    return allbooks;
  }

  getBooks(){
    
  }
  
  componentDidMount(){
    const bookList =[];
    $.ajax({
      url:"https://www.googleapis.com/books/v1/volumes?q=dogs",
      dataType: "json",
      success: function(data){
        console.log(data);
        for(var i=0; i<data.items.length; i+=1){
          bookList.push({
            title: data.items[i].volumeInfo.title,
            author: data.items[i].volumeInfo.authors[0],
            description: data.items[i].volumeInfo.description,
            img: data.items[i].volumeInfo.imageLinks.thumbnail 
          });
        }
        
      },

      type:"GET"

    });
    
    this.setState ({booksList : bookList});

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
