function distance(arr) {
    let x1 = arr[0];let y1 = arr[1];let z1 = arr[2];
    let x2 = arr[3];let y2 = arr[4];let z2 = arr[5];

    let distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2);
    console.log(distance);
}

distance([3.5, 0, 1, 0, 2, -1]);
