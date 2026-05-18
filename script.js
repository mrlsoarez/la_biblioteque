const myLibrary = [];
const ROOT= document.getElementsByTagName('html');

function Book(title, author, pages, ID, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ID = ID;
  this.status = false;
}

Book.prototype.changeStatus = function ()  {
    if (!(this.status)) {this.status = true}
    else                {this.status = false}
}

function addBookToLibrary(instance_name, instance_author, instance_pages, instance_ID) {
  let book = new Book(instance_name, instance_author, instance_pages, instance_ID);
  myLibrary.push(book);
}

function createElements(parent_node, type, className, content = null, id = null, input = null) {
    parent = document.querySelector(parent_node);
    element = document.createElement(type);
    element.textContent = content;
    element.className = className; 
    element.id = id;
    element.type = input;
    parent.appendChild(element);   
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        ID_CARD = myLibrary[i].ID;
        if (document.querySelector("#" + ID_CARD) == null) {
            createElements('.Container', 'div', 'Card Book', content = null, id = ID_CARD);
            createElements("#" + ID_CARD, 'span', 'Title', 'Title: ' + myLibrary[i].title);
            createElements("#" + ID_CARD, 'span', 'Author', 'Author: ' + myLibrary[i].author);
            createElements("#" + ID_CARD, 'span', 'Page', 'Pages: ' + myLibrary[i].pages);
            createElements("#" + ID_CARD, 'button', 'Delete', 'delete', id = 'delete-btn');

            // read status
            createElements("#" + ID_CARD, 'div', 'Read-Status', content = null, id = 'check-' + ID_CARD);
            createElements("#check-" + ID_CARD, 'span', null, 'Read?');
            createElements("#check-" + ID_CARD, 'input', 'Status-Checkbox', null, null, 'checkbox');


        }
    }

    listenDeleteButton();
    listenCheckBoxes();
}

function listenDeleteButton() {
    let btns = document.querySelectorAll('.Delete');
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].ID == btn.parentElement.id)  {
                    myLibrary.splice(i, 1);
                    btn.parentElement.remove();
                    break
                }
            }
        })
    })
}

function listenCheckBoxes() {
    let checkboxes = document.querySelectorAll('.Status-Checkbox');
    checkboxes.forEach((check) => {
        check.addEventListener("click", (e) => {
            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].ID == check.parentElement.parentElement.id)  {
                    myLibrary[i].changeStatus();
                    console.log(myLibrary[i].status)
                    break
                }
            }
        })
    })
}

 function InsertBookIntoForm() {

    let myForm = document.querySelector('form');
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        let title = formData.get('title');
        let author = formData.get('author');
        let pages = formData.get('pages');
        addBookToLibrary(title, author, pages, 'a' + crypto.randomUUID());
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