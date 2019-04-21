import React from 'react';
import placeholder from './placeholder.png';





const Book = (props) =>{
    return (
        <div className="book-wrapper text-center">
            <img className="book-img" src={props.img} alt="book" />
            <h3>{props.bookName}</h3>
            <p>{props.author}</p>
        </div>
    );
  }
  


export default Book;
  