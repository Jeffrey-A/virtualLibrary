import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import BookInfo from './Addbook';

const addBook = () =>{
    const container = document.getElementById('addBook');
    container.style.display = "block";
    ReactDOM.render(
        <BookInfo />,
        container
    )
    
}


const Nav = () =>{
    return (
        <nav className="navigation-bar text-center">
            <button type="button" onClick={addBook}>
            Add Book
            </button>
            <input type="text" placeholder="Search books" />
            <Button className="search-bt" text="Search" />
            
        </nav>
    );
}

export default Nav;