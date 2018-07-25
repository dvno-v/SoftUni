function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    $("#submit").click(()=>{
        $(".display")
            .append($("<li>")
                .text(`Product: ${$(".custom-select").val()} Price:${$("#price").val()} Quantity: ${$("#quantity").val()}`));
        capacity(Number($("#price").val()), Number($("#quantity").val()));

        });
    $(".custom-select").on('input', ()=>{
        if($(".custom-select").val() && Number($("#capacity").val()) <150){
            $("#submit").prop("disabled", false);
        }else{
            $("#submit").prop("disabled", true);
        }
    });
    let capacity = (function () {
        let money = 0;
        let quantity = 0;
        return function (curMoney, curQuantity) {
            money+=curMoney;
            if(quantity + curQuantity >= 150){
                quantity = 150;
                $("#capacity").val("full");
                $("#capacity").addClass("fullCapacity");
                $("#submit").prop("disabled", true);


            }else {
                quantity += curQuantity;
                $("#capacity").val(quantity);
                $("#sum").val(money);
            }

        }
    })();
}
