function initializeTable() {
    "use strict";
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    //addingTable;
    $("#createLink").click(addTable);
    function addTable() {
        let country = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();
        createCountry(country,capital);
        fixLinks()
    }
    //creatingCountry
    function createCountry(country, capital) {
        $("<tr>")
            .append(`<td>${country}</td>`)
            .append(`<td>${capital}</td>`)
            .append($("<td>")
                .append("<a href='#'>[Up]</a>")
                .append("<a href='#'>[Down]</a>")
                .append("<a href='#'>[Delete]</a>"))
            .appendTo($("#countriesTable"));
        $("#countriesTable tr td a:contains(Up)").click(moveUp);
        $("#countriesTable tr td a:contains(Down)").click(moveDown);
        $("#countriesTable tr td a:contains(Delete)").click(deleteRow);
        fixLinks();

    }
    //linkFixer
    function fixLinks() {
        let anchorTags = $("#countriesTable tr td a")
        anchorTags.css('display' ,'inline');
        let firstUpAnchorTag = $("#countriesTable tr:eq(2) td a:contains(Up)")
        firstUpAnchorTag.css('display', "none");
        let lastDownAnchorTag = $("#countriesTable tr:last-child td a:contains(Down)")
        lastDownAnchorTag.css('display', "none");
    }
    //move Up
    function moveUp(event) {
        let row = $(event.target).parent().parent();
        row.insertBefore(row.prev());
        fixLinks()
    }
    //moveDown
    function moveDown(event) {
        let row = $(event.target).parent().parent();
        row.insertAfter(row.next());
        fixLinks()
    }
    //delete
    function deleteRow(event) {
        $(event.target).parent().parent().remove();
        event.stopPropagation();
        fixLinks()
    }
}