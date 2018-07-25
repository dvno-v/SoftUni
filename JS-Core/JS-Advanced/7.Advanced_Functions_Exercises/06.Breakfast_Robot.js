let solve = (function () {
    //ingredients
    let microElements = {protein: 0,carbohydrate: 0,fat: 0,flavour:0};
    //meals
    let meals = {apple:{carbohydrate:1,flavour:2},
        coke :{carbohydrate:10,flavour:20},
        burger :{carbohydrate:5,fat:7,flavour:3},
        omelet:{protein:5,fat:1,flavour:1},
        cheverme:{protein: 10,carbohydrate: 10,fat: 10,flavour: 10}
    };
    function reportingIngredients(ingredients) {
        let allIngredientsString = ""
        let ingredienstKeys = [...Object.keys(ingredients)];
        for (let ingredient of ingredienstKeys) {
            allIngredientsString+= `${ingredient}=${ingredients[ingredient]} `
        }
        return allIngredientsString;
    }
    //getting orders
    return function solution(command) {
        let commandTokens = command.split(" ");
        switch (commandTokens[0]){
            case"restock":
                let element = commandTokens[1];
                let quantity = Number(commandTokens[2])
                microElements[element]+= quantity;
                return "Success";
            case"prepare":
                let meal = commandTokens[1];
                let mealQuantity = Number(commandTokens[2]);
                let mealIngredients = [...Object.keys(meals[meal])]
                for (let i = 0; i < mealIngredients.length; i++) {
                    let ingredient = mealIngredients[i];
                    if(microElements[ingredient] < meals[meal][ingredient]){
                        return `Error: not enough ${ingredient} in stock`
                    }
                    meals[meal][ingredient]-=microElements[ingredient];
                }
                return "Success";
            case"report":
                return reportingIngredients(microElements)
        }
    }
})();

/*console.log(solve("restock flavour 50"));
console.log(solve("prepare coke 4"));*/
console.log(solve("prepare cheverme 1"));
console.log(solve("restock protein 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("restock carbohydrate 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("restock fat 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("restock flavour 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("report"));
console.log("End ot test 1");
console.log(solve("restock carbohydrate 10"))
console.log(solve("restock flavour 10"))
console.log(solve("prepare apple 1"))
console.log(solve("restock fat 10"))
console.log(solve("prepare burger 1"))
console.log(solve("report"))
console.log("End of test 2");