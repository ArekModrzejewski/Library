const bookContainer = document.querySelector('.bookContainer')
let myLibrary = []

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}
let book = new Book('Andrzej Sapkowski', 'Wiedźmin: Ostatnie Życzenie', 320, false)

myLibrary.push(book)

function addBookToContainer(newBook) {
    const card = document.createElement('div')
    bookContainer.appendChild(card)
    card.classList.add('book')
    card.innerHTML = `<p>Author: ${newBook.author}<br>Title: ${newBook.title}<br>Pages: ${newBook.pages}<br>Read: ${newBook.read}<p>`
}

function displayBooks() {
    myLibrary.forEach(element => addBookToContainer(element)) 
}

displayBooks()
