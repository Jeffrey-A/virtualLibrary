const input = $("#input-box");
const searchBt = $("#search");

const getBooks = ()=>{
    if(input.val() !=""){
        $(".books-container").empty();
        $("#info").empty();

        $.get("https://www.googleapis.com/books/v1/volumes?q="+input.val()+"&key=AIzaSyCCTinyvw6cYu4Fengg7zhPvBOUEZIuW9Q",
        (response)=>{

            const inputText = input.val();
            input.val("");
            if(response.totalItems <=0){
                $('#info').text("No "+inputText+" books found in google books.")
            }else{
               
                const booksContainer = $(".books-container");
                const books =[];
                let items = response.items;

                for(var i=0; i < items.length; i++){
                    if(!(items[i].volumeInfo.authors)){
                        items[i].volumeInfo.authors=["unknown"]
                    }

                    if(!(items[i].volumeInfo.imageLinks)){
                        items[i].volumeInfo.imageLinks={};
                        items[i].volumeInfo.imageLinks.thumbnail="../placeholder.png";
                    }
                }

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

                let first = inputText[0].toUpperCase();
                let info = $("<p></p>").text(first+inputText.substring(1,inputText.length)+" books");
                info.addClass('book-info');
                $("#info").append(info);

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

input.on('keypress', (e)=>{
    if(e.keyCode=='13'){
        getBooks();
    }
    
})


searchBt.on('click', getBooks);

