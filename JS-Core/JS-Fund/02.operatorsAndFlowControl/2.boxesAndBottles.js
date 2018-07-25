function boxes(bottles, boxCap) {
    let boxes = Math.ceil(bottles/boxCap);
    return boxes;
}

let a =boxes(15,7);
console.log(a);