const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    if (inputData){
        inputData = inputData.split(";");
        if(findBook(library, inputData[0]) === -1){
            library.push(new Book(inputData[0],inputData[1],inputData[2],inputData[3]));
        }
        else{
            console.log("This book already exists");
        }
    }
    inputData = prompt('Enter book data separate by ";"');
}
printLibrary(library);

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++)
    {
        if(library[i].isbn === isbn)
        {
            return i;
        }
    }
    return -1;

}

function printLibrary(library){
    let ol_tag = document.createElement('ol');
    ol_tag.id = "ol";
    root.appendChild(ol_tag);
    for(let i = 0; i< library.length; i++)
    {
        const newBook = document.createElement('li');
        const text = document.createTextNode(library[i].toString());
        newBook.appendChild(text);
        newBook.style.fontSize = '1.6em';
        ol.appendChild(newBook);
    }  
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, 
        Year of publishing: ${this.year}`;
    }
}