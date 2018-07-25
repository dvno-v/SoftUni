function rectangle(n = 5) {
    function printStars(n) {
        return "*" +  " *".repeat(n-1);
    }

    for(let i = 1; i <= n; i++){
        console.log(printStars(n));
    }
}

rectangle();