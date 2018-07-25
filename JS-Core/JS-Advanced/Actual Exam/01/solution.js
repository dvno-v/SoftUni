function addSticker(){
    let title = $(".title");
    let content = $(".content");
    if(title.val()&& content.val()){
        let stikers = $("#sticker-list");
        let li = $("<li>")
            .append($("<a>")
                .text("x")
                .addClass("button")
                .click(function(){
                let currentNote = $(this).parent();
                currentNote.remove();
                }))
            .append($(`<h2>${title.val()}</h2>`))
            .append($(`<hr>`))
            .append($(`<p>${content.val()}</p>`));

        li.appendTo(stikers);
        title.val("");
        content.val("");
    }
}