function attachEvents() {
    function renderTowns() {
        $("#root").empty();
        let townsArr = $("#towns").val().split(", ").map(e =>{
            e = {name:e};
            return e;
        });
        console.log(townsArr);
        let context = {
            towns: townsArr
        };
        let source = $("#towns-template").html();
        let teplate = Handlebars.compile(source);
        $("#root").html(teplate(context));
        $("#towns").val("");
    }
    $("#btnLoadTowns").click(renderTowns)
}