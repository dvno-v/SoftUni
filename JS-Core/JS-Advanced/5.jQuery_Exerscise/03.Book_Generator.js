 let createBook =(function () {
    let bookCounter = 1;
    return function (selector, title, author, isbn) {
        //createBook
        let bookId = 'book' + bookCounter;
        $("<div>")
            .attr("id", `${bookId}`)
            .append($("<p>")
                .addClass("title"))
            .append($("<p>")
                .addClass("author"))
            .append($("<p>")
                .addClass("isbn"))
            .append($("<button>")
                .text("Select")
                .click((event) => {
                    $(event.target).parent()
                        .css('border', '2px solid blue')
                }))
            .append($("<button>")
                .text("Deselect")
                .click((event) => {
                    $(event.target).parent().css("border", "")
                }))
            .appendTo(selector);
        //give the book its props
        $(`#${bookId} p.title`).text(title);
        $(`#${bookId} p.author`).text(author);
        $(`#${bookId} p.isbn`).text(isbn);
        bookCounter++;
    };

}())

