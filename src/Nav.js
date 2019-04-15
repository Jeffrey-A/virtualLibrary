import React, {Component} from 'react';
import Button from './Button';





class Nav extends Component{
    

    render(){
        return (
            <nav className="navigation-bar text-center">
                <input type="text" placeholder="Search books" />
                <Button className="search-bt" text="Search" />
                
            </nav>
        );
    }
}

export default Nav;