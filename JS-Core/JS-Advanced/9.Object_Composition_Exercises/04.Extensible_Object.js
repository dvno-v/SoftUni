let solve = (function () {
    return  {
        extend: function (validObject) {
            for (let props in validObject) {
                let typeOfProp = typeof validObject[props];
                if(typeOfProp ==="function"){
                    this.__proto__[props] = validObject[props]
                }else{
                    this[props] = validObject[props];
                }
            }
        }
    }
})();


solve.extend({
    fight: function(target) { return `object fights with ${target}` },
    health: 100,
    mana: 50
})

console.log(solve.__proto__)