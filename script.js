const myLibrary = [];
const ROOT= document.getElementsByTagName('html');

function Book(title, author, pages, ID) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ID = ID;
}

function addBookToLibrary(instance_name, instance_author, instance_pages, instance_ID) {
  let book = new Book(instance_name, instance_author, instance_pages, instance_ID);
  myLibrary.push(book);
}

function createElements(parent_node, type, className, content = null, id = null) {
    parent = document.querySelector(parent_node);
    element = document.createElement(type);
    element.textContent = content;
    element.className = className; 
    element.id = id;
    parent.appendChild(element);   
}

function displayBooks() {
    let card_index = 0;
    for (let i = 0; i < myLibrary.length; i++) {
        ID_NUM = 'card' + (i + 1);
        createElements('.Container', 'div', 'Card Book', content = null, id = ID_NUM);
        createElements('#' + ID_NUM, 'span', 'Title', 'Title: ' + myLibrary[i].title);
        createElements('#' + ID_NUM, 'span', 'Author', 'Author: ' + myLibrary[i].author);
        createElements('#' + ID_NUM, 'span', 'Page', 'Pages: ' + myLibrary[i].pages);
        let CARD_BOX = document.getElementsByClassName("Card Book");
    }

    card_books = document.getElementsByClassName('Card');
    console.log(card_books[0].id);


    /*

    for (let q = 0; q< myLibrary.length; q++) {
        createElements(CARD_BOX[q].className, 'span', 'Title', myLibrary[q].title);
    }
    */
    

}

addBookToLibrary("Harry Potter", "JK Rowling", 300, crypto.randomUUID());
addBookToLibrary("Misery", "Stephen King", 306, crypto.randomUUID());
addBookToLibrary("La Haine", "George Froid", 108, crypto.randomUUID());

displayBooks();