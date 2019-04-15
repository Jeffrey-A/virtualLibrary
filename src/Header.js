import React, {Component} from 'react';

class  Header extends Component{
    render ( ){
        return (
        <header className="welcome-section text-center">
            <h1 className="main-title">Vitual Library</h1>
            <p className="main-title-description">Welcome! feel free to searh.</p>
        </header>
        );
    }
  
}

export default Header;