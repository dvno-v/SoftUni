function a(strArr) {
    let juices = [];
    let juicesBottles = new Map();
    for (let juiceData of strArr) {
        let juiceObj = {};
        let tokens = juiceData.split(/\s*=>\s*/gm);
        let name = tokens[0];
        let quality = Number(tokens[1]);
        if (!juices.hasOwnProperty(name))
            juices[name] = 0;
        juices[name] += quality;
        while(juices[name] >= 1000) {
            if (juices[name] >= 1000 && juicesBottles.get(name) >= 1) {
                juicesBottles.set(name, juicesBottles.get(name) + 1);
                juices[name] -= 1000;
                continue;
            }
            juicesBottles.set(name, 1);
            juices[name] -= 1000;
        }
    }
    for(let [k,v] of juicesBottles){
        console.log(`${k} => ${v}`)
    }
}

a([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789",
])