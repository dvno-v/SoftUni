$(() => {
    let context = {
        cats: window.cats
    };
    renderCatTemplate();
    async function renderCatTemplate() {
        let catSource = await $.get('./templates/catTemplate.html');
        let catListSource = await $.get('./templates/catListTemplate.html');
        let catPartial = Handlebars.registerPartial('cat', catSource);
        let catListTemplate = Handlebars.compile(catListSource);
        $("#allCats").html(catListTemplate(context));
        //attaching event handlers for buttons
        (function () {
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
