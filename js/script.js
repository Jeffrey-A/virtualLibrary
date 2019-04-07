const Header = () =>{
    return (
        <header className="welcome-section text-center">
            <h1 className="main-title">Vitual Library</h1>
            <p className="main-title-description">Welcome! feel free to searh or add books.</p>
        </header>
    );

}

const Nav = () =>{
    return (
        <nav className="navigation-bar text-center">
            <input type="text" placeholder="Search books" />
            <Button />
        </nav>
    );
}

const Button = () =>{
    return (
        <button className="search-bt button">Search</button>
    );
}

const Book = () =>{
    return (
        <div className="book-wrapper text-center">
            <img className="book-img" src="../img/placeholder.png"/>
            <h3>Book Title</h3>
            <p>Author name</p>
        </div>
    );
}



const App = () =>{
    return (
    <div>
        <Header />
        <Nav />
        <Book />
    </div>
    
    );
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);