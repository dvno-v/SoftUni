function sortByLenght(arr) {
    "use strict";
    console.log(arr.sort(function (a, b) {
            if (a.length === b.length) {
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            }
            else {
                return a.length - b.length
            }
        }
        ).join("\n")
    );
}


sortByLenght(['aa', 'a', 'aaa'])