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
            console.log(i);
            return i;
        }
    }
    return -1;

}

function printLibrary(library){
    for(let i = 0; i < library.length;i++){
        console.log(`Book #${i+1}, ISBN: ${library[i].isbn} Title: ${library[i].title}, Author: ${library[i].author}, Year: ${library[i].year}`)
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