function a(meals, arr) {
    let firstIndex;
    let secondIndex;
    let mealsCount = 0;
    "use strict";
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        if (command === "End") {
            break;
        }

        switch (command[0]) {
            case"Serve":
                if (meals.length > 0) {
                    let servedMeal = meals.pop();
                    console.log(`${servedMeal} served!`);
                }
                break;
            case"Add":
                meals.unshift(command[1])
                break;
            case"Shift":
                firstIndex = Number(command[1]);
                secondIndex = Number(command[2]);
                if (meals[firstIndex] !== undefined && meals[secondIndex] !== undefined) {
                    let placeHolder = meals[firstIndex];
                    meals[firstIndex] = meals[secondIndex];
                    meals[secondIndex] = placeHolder;
                }
                break;
            case"Eat":
                if (meals.length > 0) {
                    let meal = meals.shift()
                    console.log(`${meal} eaten`);
                    mealsCount++
                }
                break;
            case"Consume":
                firstIndex = Number(command[1]);
                secondIndex = Number(command[2]);
                if (meals[firstIndex] !== undefined && meals[secondIndex] !== undefined) {
                    for (let i = firstIndex; i <= secondIndex; i++) {
                        delete meals[i];
                        mealsCount++
                    }
                }
                meals = meals.filter(a => a.length > 0);
                console.log("Burp!")
                break;
        }
    }
    let count = meals.length > 0 ? console.log("Meals left: " + meals.join(", ")) : console.log("The food is gone")
    console.log(`Meals eaten: ${mealsCount}`)
}


a(['soup', 'spaghetti', 'eggs'],
    ['Consume 0 2', 'Eat', 'Eat', 'Shift 0 1', 'End', 'Eat'])