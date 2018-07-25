function solve(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        let x = Number(arr[i]);
        let y = Number(arr[i + 1]);
        console.log(location(x,y));
    }

    function location(x, y) {
        let location = "";
        if ((x >= 1 && x <= 3) && ( y >= 1 && y <= 3 )) {
            location = "Tuvalu";
        } else if ((x >= 8 && x <= 9) && (y >= 0 && y <= 1)) {
            location = "Tokelau";
        } else if ((x >= 5 && x <= 7) && (y >= 3 && y <= 6)) {
            location = "Samoa";
        } else if ((x >= 0 && x <= 2) && (y >= 6 && y <= 8)) {
            location = "Tonga";
        } else if ((x >= 4 && x <= 9) && (y >= 7 && y <= 8)) {
            location = "Cook";
        } else {
            location = "On the bottom of the ocean";
        }
        return location;
    }
}
solve([4, 2, 1.5, 6.5, 1, 3]);
solve([6,4])