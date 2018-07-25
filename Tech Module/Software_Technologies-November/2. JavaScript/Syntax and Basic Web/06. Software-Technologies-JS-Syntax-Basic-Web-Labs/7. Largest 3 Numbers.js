function largest3Numbers(arr) {
    let nums = arr.map(Number);
    let numbersSorted = nums.sort((a, b) => b - a);
    let count = Math.min(3, arr.length);
    for (let i = 0; i < count; i++) {
        console.log(numbersSorted[i]);
    }
}

largest3Numbers(['20', '30']);