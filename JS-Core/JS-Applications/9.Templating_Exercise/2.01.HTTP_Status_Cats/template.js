$(() => {
    let context = {
        cats: window.cats
    };
    renderCatTemplate();
    function renderCatTemplate() {
        let catSource = $("#cat-template").html();
        let catTemplate = Handlebars.compile(catSource);
        $("#allCats").html(catTemplate(context));
        //attaching event handlers for buttons
        (function () {
            console.log("attaching events")
            $("button").click(showInfo);
            function showInfo(e){
                let info = $(e.target).next();
                if(info.css("display") === 'none'){
                    info.css("display", "inline");
                    $(e.target).text("Hide status code");
                }else{
                    info.css("display", "none");
                    $(e.target).text("Show status code");
                }
            }
        })();
    }
});
