const input = $("#input-box");
const searchBt = $("#search");

const getBooks = ()=>{
    if(input.val() !=""){ //if input text is not empty
        $(".books-container").empty(); //remove all books
        $("#info").empty(); // remove books info

        $.get("https://www.googleapis.com/books/v1/volumes?q="+input.val()+"&maxResults=40&key=AIzaSyCCTinyvw6cYu4Fengg7zhPvBOUEZIuW9Q",
        (response)=>{ //make a request to the google books API

            const inputText = input.val();
            input.val("");
            if(response.totalItems <=0){ //if did not get any book 
                $('#info').text("No "+inputText+" books found in google books.")
            }else{ //fetched books correctly
               
                const booksContainer = $(".books-container");
                const books =[];
                let items = response.items;

                //in case a book does not have an author 
                for(var i=0; i < items.length; i++){
                    if(!(items[i].volumeInfo.authors)){
                        items[i].volumeInfo.authors=["unknown"]
                    }

                    if(!(items[i].volumeInfo.imageLinks)){
                        items[i].volumeInfo.imageLinks={};
                        items[i].volumeInfo.imageLinks.thumbnail="js/placeholder.png";
                    }
                }
                //pushing all books to the list
                for(var i=0; i < items.length; i++){
                    books.push(
                        {
                            title: items[i].volumeInfo.title,
                            author: items[i].volumeInfo.authors[0],
                            img: items[i].volumeInfo.imageLinks.thumbnail,
                            description: items[i].volumeInfo.description,
                            link: items[i].saleInfo.buyLink,

                        }
                    )
                }

                //info text
                let first = inputText[0].toUpperCase();
                let info = $("<p></p>").text(first+inputText.substring(1,inputText.length)+" books");
                info.addClass('book-info');
                $("#info").append(info);

                //constructing book cards and adding them to booksContainer
                for(var i=0; i < books.length; i++){
                    let title = $("<p></p>").text(books[i].title);
                    title.addClass("book-title")
                    let img = $("<img/>").attr("src",books[i].img);
                    let author = $("<p></p>").text(books[i].author);

                    let div = $("<div></div>");
                    div.addClass("book");
                    div.append(img);
                    div.append(title);
                    div.append(author);

                    let link = $("<a></a>").attr("href",books[i].link);
                    link.attr("target","_blank");
                    link.append(div);
                    booksContainer.append(link);
                }
                

                console.log(books);
            }
        });
            
    }else{
        alert("You need to type something");
    }
}

//Events
input.on('keypress', (e)=>{
    if(e.keyCode=='13'){
        getBooks();
    }
    
})


searchBt.on('click', getBooks);

