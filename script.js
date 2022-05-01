const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
};

function addBookToLibrary() {
    let title = document.querySelector("input[name=title]").value;
    let author = document.querySelector("input[name=author]").value;
    let pages = document.querySelector("input[name=pages]").value;
    let status = document.querySelector("input[name=status]").checked;
    let myBook = new Book(title, author, pages, status);
    myLibrary.push(myBook)
};

function displayBook() {
    const form = document.querySelector(".form");
    form.reset()
    let book, title, author, pages, status, index;
    for (index = 0; index < myLibrary.length; index++) {
        book = myLibrary[index];
        title = book.title;
        author = book.author;
        pages = book.pages;
        status = book.status;
    }
    const container = document.querySelector(".cards-container");
    const div = document.createElement("div");
    div.classList.add("card");
    div.dataset.number = index - 1;
    container.appendChild(div)
    const titleDisplay = document.createElement("div");
    titleDisplay.classList.add("title")
    titleDisplay.innerHTML = title;
    div.appendChild(titleDisplay)
    const authorDisplay = document.createElement("div");
    authorDisplay.classList.add("author")
    authorDisplay.innerHTML = author;
    div.appendChild(authorDisplay);
    const pagesDisplay = document.createElement("div");
    pagesDisplay.classList.add("pages")
    pagesDisplay.innerHTML = `${pages} pages`;
    div.appendChild(pagesDisplay);
    const statusButton = document.createElement("button");
    if (status == true) {
        statusButton.classList.add("status");
        statusButton.classList.add("read");
        statusButton.innerHTML = "Read";
    } else {
        statusButton.classList.add("status");
        statusButton.classList.add("unread")
        statusButton.innerHTML = "Not read";
    }
    div.appendChild(statusButton);
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove")
    removeButton.innerHTML = "Remove";
    div.appendChild(removeButton);
}

const modal = document.querySelector(".modal");
const openModal = document.querySelector(".add-btn");

openModal.addEventListener("click", () => {
    modal.showModal()
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.close()
    }
    if (event.target.classList.contains('read')) {
        event.target.classList.remove("read");
        event.target.classList.add("unread");
        event.target.innerHTML = "Not read";
    } else if (event.target.classList.contains('unread')) {
        event.target.classList.remove("unread");
        event.target.classList.add("read");
        event.target.innerHTML = "Read";
    }
    if(event.target.classList.contains('remove')) {
        const index = event.target.parentElement.dataset.number;
        myLibrary.splice(index, 1);
        event.target.parentElement.remove();
    }
}

