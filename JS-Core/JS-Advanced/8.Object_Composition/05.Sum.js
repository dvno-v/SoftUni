function getModel() {
    let firstInput, secondInput, result;
    function init(selector1, selector2, resultSelector) {
        firstInput = $(selector1);
        secondInput = $(selector2);
        result = $(resultSelector);
    }
    function add() {
        let num1 = Number(firstInput.val());
        let num2 = Number(secondInput.val());
        result.val(num1 + num2);
    }
    function subtract() {
        let num1 = Number(firstInput.val());
        let num2 = Number(secondInput.val());
        result.val(num1 - num2);
    }
    return {
        init,
        add,
        subtract
    }
}