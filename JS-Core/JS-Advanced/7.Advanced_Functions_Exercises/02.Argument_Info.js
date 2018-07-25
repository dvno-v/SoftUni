function solve() {
    let typeAppearances = {};
    for (let i = 0; i < arguments.length; i++) {
        let currObj = arguments[i];
        let type = typeof currObj;
        if (!typeAppearances[type]) {
            typeAppearances[type] = 0;
        }
        typeAppearances[type]++;
        console.log(`${type}: ${currObj}`);
    }
    let sortedKeyTypes = [...Object.keys(typeAppearances)]
        .sort((a, b) => typeAppearances[b] - typeAppearances[a]);
    for (let type of sortedKeyTypes) {
        console.log(`${type} = ${typeAppearances[type]}`)
    }
}

solve(1, 2, 3, 4);

