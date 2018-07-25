function inperial(metric) {
    let foot = parseInt(metric / 12);
    let inches = parseInt(metric%12);
    console.log(`${foot}\'-${inches}\"`)
}
inperial(36);
inperial(55);
inperial(11)