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
    ID_NUM = 'card-' + myLibrary.length;
    if (document.querySelector("#"+ID_NUM) == null) {
        index = myLibrary.length - 1;
        createElements('.Container', 'div', 'Card Book', content = null, id = ID_NUM);
        createElements('#' + ID_NUM, 'span', 'Title', 'Title: ' + myLibrary[index].title);
        createElements('#' + ID_NUM, 'span', 'Author', 'Author: ' + myLibrary[index].author);
        createElements('#' + ID_NUM, 'span', 'Page', 'Pages: ' + myLibrary[index].pages);
    }

}

function InsertBookIntoForm() {

    let myForm = document.querySelector('form');
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        let title = formData.get('title');
        let author = formData.get('author');
        let pages = formData.get('pages');
        addBookToLibrary(title, author, pages);
        displayBooks();
        myForm.reset();
    })
}

function toggleForm() {
    let toggle = document.querySelectorAll(".Toggle-Form");
    let myForm = document.querySelector("form");
    toggle.forEach((t) => {
        t.addEventListener("click", () => {
            myForm.classList.toggle("Visible");
        })
    })
}

toggleForm();
InsertBookIntoForm();
//addBookToLibrary("Harry Potter", "JK Rowling", 300, crypto.randomUUID());
//addBookToLibrary("Misery", "Stephen King", 306, crypto.randomUUID());
//addBookToLibrary("La Haine", "George Froid", 108, crypto.randomUUID());

//displayBooks();