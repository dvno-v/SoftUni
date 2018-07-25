let result = (function () {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id;
            id++;
        }
        extend(validObject){
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
/*
* (function () {
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
})*/