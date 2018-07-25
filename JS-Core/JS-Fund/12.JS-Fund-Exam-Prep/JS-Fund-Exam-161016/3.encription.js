function a(strArr) {
    let specialKey = strArr.shift();
    let pattern = new RegExp("(\s|^])([a-zA-Z]+)\s+([A-Z!%#$]{8,})(?=(\s|\.|\,|$))","gm");
    for (let str of strArr) {
        let match = str.match(pattern)
        console.log(match)
    }
}
a([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);