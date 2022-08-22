const bookContainer = document.querySelector('.bookContainer')
const formButton = document.getElementById('addBook')
const bookForm = document.getElementById('bookForm')
const author = document.getElementById('author')
const title = document.getElementById('title')
const pages = document.getElementById('pages')
const finished = document.getElementById('finished')

let myLibrary = []

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

//creates book object on display
function addBookToContainer(newBook) {
    const card = document.createElement('div')
    bookContainer.appendChild(card)
    card.classList.add('book')
    card.innerHTML = `<p>Author: ${newBook.author}<br>Title: ${newBook.title}<br>Pages: ${newBook.pages}<br>Read: ${newBook.read}<p>`
}

//displays all books objects from myLibrary array
function displayBooks() {
    myLibrary.forEach(element => addBookToContainer(element)) 
}

//adds book to the array and displays it on page, clears form
bookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let book = new Book(author.value, title.value, pages.value, finished.checked)
    myLibrary.push(book)
    addBookToContainer(book)
    author.value = ''
    title.value  = ''
    pages.value = undefined
})

//shows form when button is clicked
formButton.addEventListener('click', () => {
    let popupStatus = bookForm.style.display
    switch (popupStatus) {
        case 'grid':
            bookForm.style.display = ''
            break
        case '':
            bookForm.style.display = 'grid'
            break 
    }
})

