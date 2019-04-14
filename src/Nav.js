import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import BookInfo from './Addbook';




class Nav extends Component{
    constructor(){
        super();
    }
    
    addBook = () =>{
        const container = document.getElementById('addBook');
        container.style.display = "block";
        {/* method passed from App*/}
        ReactDOM.render(<BookInfo getBook={this.props.getBook}/>,container); 
    }

    render(){
        return (
            <nav className="navigation-bar text-center">
                <button type="button" onClick={this.addBook}>Add Book</button>
                <input type="text" placeholder="Search books" />
                <Button className="search-bt" text="Search" />
                
            </nav>
        );
    }
}

export default Nav;