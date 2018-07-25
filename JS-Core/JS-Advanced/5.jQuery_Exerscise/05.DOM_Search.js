function domSearch(selector, isCaseSensitive) {
    //add + addFunction
    function addInList() {
        let inputText = $("div.add-controls input").val();
        let list = $("div ul.items-list");
        let listItem = $("<li>")
            .addClass("list-item")
            .append($(`<a>`)
                .addClass("button")
                .text("X")
                .click((event) => {
                    $(event.target).parent().remove();
                }))
            .append($(`<strong>${inputText}</strong>`))
        ;
        list.append(listItem);
        $("div.add-controls input").val("")
    }

    let add = $("<div>")
        .addClass("add-controls")
        .append($("<label>")
            .text("Enter text:"))
        .append($("<input>"))
        .append($("<a href='#'>Add</a>")
            .addClass("button")
            .click(addInList));
    $(selector).append(add);

    //search + search FUnction
    function search() {
        let inputText = $("div.search-controls input").val();
        console.log(inputText);
        let list = $("div ul.items-list li.list-item");
        list.css('display', 'block');
        list.each((i, e) => {
            if (!isCaseSensitive) {
                if (!e.textContent.includes(inputText)) {
                    $(e).css("display", "none")
                }
            } else {
                if (!e.textContent.toLowerCase().includes(inputText.toLowerCase())) {
                    $(e).css("display", "none")
                }
            }
        })
    }

    let searchDiv = $("<div>")
        .addClass("search-controls")
        .append($("<label>")
            .text("Search:"))
        .append($("<input>"))
        .append($("<a href='#'>Search</a>")
            .addClass("button")
            .click(search));
    $(selector).append(searchDiv);
    let result = $("<div>")
        .addClass("result-controls")
        .append($("<ul>")
            .addClass('items-list'));
    result.appendTo($(selector));

}