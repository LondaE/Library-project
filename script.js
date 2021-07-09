
let myLibrary = [];

pnin = new book("Pnin", "Vladimir Nabokov", 200, true);
lolita = new book("Lolita", "Vladimir Nabokov", 300, true);
ulysses = new book("Ulysses", "James Joyce", 1000, false);
addBookToLibrary(pnin);
addBookToLibrary(lolita);
addBookToLibrary(ulysses);
display(myLibrary);

function book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function display(library)
{
    let container = document.querySelector('#container');
    for(let i = 0; i < library.length; i++)
    {
        let div = createBookPanel(library[i]);
        container.appendChild(div);
    }
}

function createBookPanel(aBook)
{
    let title = aBook.title;
    let author = aBook.author;
    let div = document.createElement('div');
    let titleP = document.createElement('p');
    let authorP = document.createElement('p');
    titleP.textContent = title;
    authorP.textContent = author;
    div.appendChild(titleP);
    div.appendChild(authorP);
    return div;
}