function lastMonth(arr) {
    function leapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    let day = arr[0];
    let month = arr[1];
    let year = arr[2];
    switch (month) {
        case 2:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(30)
            break;
        case 1:
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(31)
            break;
        case 3 :
            if (leapYear(year)) {
                console.log(29);
                break;
            } else {
                console.log(28);
                break;
            }
    }
}

lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004])