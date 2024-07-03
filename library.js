function Book(title, author, publisher, isbn, copies){
    this.title=title;
    this.author=author;
    this.publisher=publisher;
    this.isbn=isbn;
    this.copies=copies;
}
var library=[];
function addBook(){
    var title=document.getElementById("title").value;
    var author=document.getElementById("author").value;
    var publisher=document.getElementById("publisher").value;
    var isbn=document.getElementById("isbn").value;
    var copies=document.getElementById("copies").value;
    var book = new Book(title, author, publisher, isbn, copies);
    library.push(book);
    displayBooks();
}
function removeBook(){
    var isbn = prompt("Enter the isbn to remove:");
    for(var i=0;i<library.length;i++)
        {
            if(library[i].isbn===isbn){
                library.slice(1,1);
                break;
            }
        }
        displayBooks();
}
function displayBooks(books){
        var bookList = document.getElementById("bookList");
        bookList.innerHTML="";
        if(!books){
            books=library;
        }
        for(var i=0; i< books.length;i++){
            var tr = document.createElement("tr");
            var tdTilte=document.createElement("td");
            tdTilte.innerText=books[i].title;
            var tdAuthor=document.createElement("td");
            tdAuthor.innerText=books[i].author;
            var tdPublisher=document.createElement("td");
            tdPublisher.innerText=books[i].publisher;
            var tdIsbn=document.createElement("td");
            tdIsbn.innerText=books[i].isbn;
            var tdCopies=document.createElement("td");
            tdCopies.innerText=books[i].copies;

            tr.appendChild(tdTilte);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdPublisher);
            tr.appendChild(tdIsbn);
            tr.appendChild(tdCopies);
            bookList.appendChild(tr);

        }
}