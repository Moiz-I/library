let myLibrary = [];
const addButton = document.getElementById("addBook");
const modal = document.getElementById("myModal");
const closeButton = document.getElementsByClassName("close")[0];
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const submit = document.getElementById("submit");
const booksGrid = document.getElementById("booksGrid");
const checkbox = document.getElementById("hasRead");

submit.addEventListener("click", () => createBook(addToLibrary()));



addButton.onclick = function() {
  modal.style.display = "block";
  titleInput.style.display = "block";
  authorInput.style.display = "block";
  pagesInput.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function Book(title, author, pages, hasRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.hasRead = hasRead
  this.info = function() {
    if (hasRead) {
      return title + " by " + author + ", " + pages + ", has read"
    } else {
      return title + " by " + author + ", " + pages + ", has not read"
    }
    
  }
}

function addToLibrary() {
  return new Book(titleInput.value, authorInput.value, pagesInput.value, checkbox.checked)
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true)
//console.log(theHobbit.info())


const createBook = (book) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  booksGrid.appendChild(bookCard);
  
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const readStatus = document.createElement("button");
  
  
  title.textContent=book.title;
  author.textContent=book.author;
  pages.textContent=book.pages + " pages";
  if (book.hasRead) {
    readStatus.textContent="Read";
  } else {
    readStatus.textContent="Not read"
  }
  
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readStatus);

  console.log("title:" + title)
  bookCard.title=title;


  myLibrary.push(bookCard);
  console.log(myLibrary);

  myLibrary.forEach((book) =>
  book.children[3].addEventListener("click", () =>changeStatus(book.children[3]))
) 


  modal.style.display = "none";

}

createBook(theHobbit);

console.log(myLibrary[0].children[3])



function changeStatus(button) {
  if (button.textContent==="Read") {
    button.textContent="Not read"
  } else {
    button.textContent="Read"
  }
}

console.log(myLibrary[0].children[3])

theHobbit.hasRead=false

console.log(myLibrary[0].getAttribute('title'))

