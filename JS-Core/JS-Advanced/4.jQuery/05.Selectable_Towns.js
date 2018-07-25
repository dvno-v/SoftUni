function attachEvents() {
    $("#items li").click(select);
    function select() {
        console.log($(this).attr("data-selected"));
        if($(this).attr("data-selected")){
            $(this).attr("data-selected", '');
            $(this).css("background-color", '');
        }else{
            $(this).attr("data-selected", 'true');
            $(this).css("background-color", '#DDD')
        }
    }
    $("#showTownsButton").click(show);
    function show() {
        $("#selectedTowns").text($("#items li[data-selected*=true]").toArray().map(li=> li.textContent).join(", "))


    }
}