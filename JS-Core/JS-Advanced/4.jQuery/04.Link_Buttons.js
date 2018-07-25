function attachEvents() {
    $("a.button").click(selected);
    function selected() {
        "use strict";
        $(".selected").removeClass('selected');
        $(this).addClass("selected")
    }
}