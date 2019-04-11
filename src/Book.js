import React from 'react';
import placeholder from './placeholder.png';





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

export default BookContainer;
  