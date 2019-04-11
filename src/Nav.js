import React from 'react';
import Button from './Button';


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

export default Nav;