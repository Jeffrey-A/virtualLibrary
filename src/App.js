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

  createBooks(){
    const allbooks =[];
    for(var i =0; i<this.state.booksList.length; i++){
      allbooks.push(<Book bookName={this.state.booksList[i].title} author={this.state.booksList[i].author} img={this.state.booksList[i].img} />);
    }
    
    return allbooks;
  }

  getBooks(){
    let books = [];
    $.get("https://www.googleapis.com/books/v1/volumes?q=dogs",(response)=>{
          books = response.items.map((i)=>{
            return {title: i.volumeInfo.title,author: i.volumeInfo.authors[0],description: i.volumeInfo.description,img: i.volumeInfo.imageLinks.thumbnail}
          });

          this.setState({
            booksList: books});
          
    });
    
  }
  
  render(){
    this.getBooks();
    const books = this.createBooks();
    
    return (
      <div>
          <Header />
          
          <Nav getBook={this.getBookInfo}/>  {/* passing the method */}
          <div className="book-container">
            {books}
          </div>  
          
      </div>);
  }
  
}

export default App;
