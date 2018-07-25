function rotate(arr) {
    let rotations = Number(arr.pop());
    for (let i = 1; i <= rotations; i++) {
        let lastNumber = arr.pop();
        arr.unshift(lastNumber);
    }
    console.log(arr.join(" "));
}
rotate([]);