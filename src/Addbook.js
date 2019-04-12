import React, {Component} from 'react';
// import Book from './Book';

const close = () =>{
    document.getElementById('addBook').style.display="none";
}

const getBookInfo = (info) =>{
    //add a book component
    alert(info.title +" "+info.author + " "+info.image);
}

class BookInfo extends Component{
    render(){
        return (
            <div>
                <span id="closeBookAdding" onClick={close}>X</span>
                <h1>Add Book</h1>
                <p>Title: </p>
                <input id="titleProvide"type="text" placeholder="Book's title"/>

                <p>Author: </p>
                <input id="authorProvide" type="text" placeholder="Book's Author"/>
            
                <p>Book's image: </p>
                <input id="imgProvide"type="text" placeholder="img url"/>

                <button id="addButton" onClick={()=>getBookInfo(
                    {
                        title:document.getElementById("titleProvide").value,
                        author:document.getElementById("authorProvide").value,
                        image:document.getElementById("imgProvide").value

                    }
                )}>ADD</button>  
            </div>
        );
    }
}



export default BookInfo;