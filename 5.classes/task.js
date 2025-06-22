class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this.state = 0;
    } else if (newState > 100) {
      this.state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

////////////////////Задача 2. Библиотека/////////////////////
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      for (let key in book) {
        if (type === key && value === book[key]) {
          return book;
        }
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (bookName === this.books[i].name) {
        return this.books.splice(i, 1)[0];
        // return bookName;
      }
    }

    return null;
  }
}

const library = new Library("Modern Library");

library.addBook(
  new DetectiveBook(
    "Agatha Christie",
    "Murder on the Orient Express",
    1934,
    256
  )
);
library.addBook(new FantasticBook("George Orwell", "1984", 1949, 328));
library.addBook(new NovelBook("Jane Austen", "Pride and Prejudice", 1813, 432));
library.addBook(new Magazine("National Geographic Society", 1919, 98));

library.findBookBy("releaseDate", 1919);

const issuedBook = library.giveBookByName("Pride and Prejudice");
issuedBook.state = 80;
issuedBook.fix();
library.addBook(issuedBook);

//////////////////Задача 3. Журнал успеваемости
