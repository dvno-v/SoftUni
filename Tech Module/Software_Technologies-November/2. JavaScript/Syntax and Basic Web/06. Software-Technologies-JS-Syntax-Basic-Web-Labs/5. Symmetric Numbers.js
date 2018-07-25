function printSymetricNumbers(arr) {
    let num = Number(arr[0]);
    for (let i = 1; i <= num; i++) {
        if (isSymetric(i.toString())) {
            console.log(i);
        }
    }

    function isSymetric(str) {
    for (let i = 0; i < str.length / 2; i++)
        if (str[i] != str[str.length - i - 1])
            return false
        return true
    }
}

printSymetricNumbers(['1000'])