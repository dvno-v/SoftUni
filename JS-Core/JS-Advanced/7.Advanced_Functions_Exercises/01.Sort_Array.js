function solve(arr, sortMethod) {
    let method = sortMethod === "asc";
    return method ? arr.sort((a, b) => a-b) : arr.sort((a, b) => b - a);
}

function solve2(arr,sortMethod) {
    let sorting = {
        "asc": function () {
            return arr.sort((a,b) => a-b);
        },
        "desc": function () {
            return arr.sort((a,b) => b - a);
        }
    }
    if(sortMethod == "asc") return sorting.asc(arr);
    return sorting.desc(arr);
}
function solve3(arr,sortMethod) {
    let sorting = {
        "asc": function () {
            return arr.sort((a,b) => a-b);
        },
        "desc": function () {
            return arr.sort((a,b) => b - a);
        }
    }
    return sorting[sortMethod](arr);
}


console.log(solve3([1, 2, 5, 6, 8, 9, 1222], "desc"));;