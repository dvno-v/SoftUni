class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelf = [];
        this._shelfGenre = shelfGenre;
        this._shelfCapacity = shelfCapacity
    }

    get room() {
        return this._room;
    }

    set room(value) {
        const validRooms = ['livingRoom', 'bedRoom', 'closet'];
        if (!validRooms.includes(value)) {
            throw (`Cannot have book shelf in ${value}`);
        }
        this._room = value;
    }

    get shelfGenre() {
        return this._shelfGenre;
    }

    set shelfGenre(value) {
        this._shelfGenre = value;
    }

    get shelfCapacity() {
        return this._shelfCapacity;
    }

    set shelfCapacity(value) {
        this._shelfCapacity = value;
    }

    get shelfCondition() {
        return this._shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        let curBook = {bookName, bookAuthor};
        if (genre) {
            curBook.genre = genre;
        }
        this.shelf.push(curBook);
        if (this.shelf.length > this.shelfCapacity) {
            this.shelf.shift();
        }
        this.sort(this.shelf);
        return this;
    }

    sort(arr) {
        arr.sort((a, b) => {
            return a.bookName.localeCompare(b.bookName);
        });
    }

    throwAwayBook(bookName) {
        let bookNames = [];
        this.shelf.forEach((e, i) => {
            bookNames.push(e.bookName);
        });
        let bookIndex = bookNames.indexOf(bookName);
        if (bookIndex >= 0)
            this.shelf.splice(bookIndex, 1);
        return this;
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":`;
        let bookWithThisGenre = [];
        this.shelf.forEach((e, i) => {
            if (e.genre == genre) {
                bookWithThisGenre.push(e);
            }
        });
        bookWithThisGenre.sort((a, b) => {
            return a.bookAuthor.localeCompare(b.bookAuthor);
        });
        for (let book of bookWithThisGenre) {
            result += `\n📖 ${book.bookAuthor} - "${book.bookName}"`
        }
        return result;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        }
        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:`;
        for (let book of this.shelf) {
            result += `\n📖 "${book.bookName}" - ${book.bookAuthor}`;
        }
        return result;
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");

livingRoom.throwAwayBook("gosho");

console.log(livingRoom.toString());

