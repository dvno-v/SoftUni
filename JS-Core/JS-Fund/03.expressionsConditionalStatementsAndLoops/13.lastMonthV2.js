function lastMonth(arr) {
    function leapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    let day = arr[0];
    let month = arr[1];
    let year = arr[2];
    let monthsReturning31 = [1,4,6,9,11];
    let monthsReturning30 = [2,5,7,8,10,12];
    if(monthsReturning31.includes(month))console.log(31);
    else if(monthsReturning30.includes(month))console.log(30);
    else{
        if(leapYear(year))console.log(29);
        else console.log(28);
    }
}

lastMonth([11,12,2000]);
