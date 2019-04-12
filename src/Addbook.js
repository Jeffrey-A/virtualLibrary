import React, {Component} from 'react';
import Book from './Book';

const close = () =>{
    document.getElementById('addBook').style.display="none";
}

const addBook = () =>{
    //add a book component
}

class BookInfo extends Component{
    render(){
        return (
            <div>
                <span id="closeBookAdding" onClick={close}>X</span>
                <h1>Add Book</h1>
                <p>Title: </p>
                <input type="text" placeholder="Book's title"/>

                <p>Author: </p>
                <input type="text" placeholder="Book's Author"/>
            
                <p>Book's image: </p>
                <input type="text" placeholder="img url"/>

                <button id="addButton" onClick={addBook}>ADD</button>

                
            </div>
        );
    }
}



export default BookInfo;