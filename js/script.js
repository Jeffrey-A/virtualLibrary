const input = $("#input-box");
const searchBt = $("#search");




searchBt.on('click',()=>{
    if(input.val() !=""){

        $(".books-container").empty();

        $.get("https://www.googleapis.com/books/v1/volumes?q="+input.val()+"+intitle:keyes&key=AIzaSyCCTinyvw6cYu4Fengg7zhPvBOUEZIuW9Q",
        (response)=>{
            const booksContainer = $(".books-container");
            const books =[];
            let items = response.items;

            for(var i=0; i < items.length; i++){
                if(!(items[i].volumeInfo.authors)){
                    items[i].volumeInfo.authors=["unknown"]
                }

                if(!(items[i].volumeInfo.imageLinks)){
                    items[i].volumeInfo.imageLinks={};
                    items[i].volumeInfo.imageLinks.thumbnail="placeholder.png";
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

            
            for(var i=0; i < books.length; i++){
                let title = $("<h3></h3>").text(books[i].title);
                let img = $("<img src="+books[i].img+"/>");
                let author = $("<p></p>").text(books[i].author);

                let div = $("<div></div>");
                div.addClass("book");
                div.append(img);
                div.append(title);
                div.append(author);
                booksContainer.append(div);
            }
            

            console.log(books);
        });
    }else{
        alert("You must type something");
    }
    
});

