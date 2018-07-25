function a(strArr) {
    let products = new Map();
    for (let str of strArr) {
        let tokens = str.split(/\s*:\s*/gm);
        products.set(tokens[0],Number(tokens[1]));
    }
    for(let i = 65; i <= 90; i++){
        let sortedKeysArr = Array.from(products.keys()).sort().filter(a => a[0] == String.fromCharCode(i));
        if(sortedKeysArr.length>0){
            console.log(String.fromCharCode(i));
            for (let key of sortedKeysArr) {
                console.log(`  ${key}: ${products.get(key)}`)
            }
        }
    }
}

a([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'

])