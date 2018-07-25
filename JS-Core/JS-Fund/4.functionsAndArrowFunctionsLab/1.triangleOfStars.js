function triangle(n) {
    function printStars(n) {
        return "*".repeat(n);
    }

    for(let i = 1 ; i <= n; i++){
        console.log(printStars(i));
    }
    for(let i = n-1; i>=1; i--){
        console.log(printStars(i));
    }
}

triangle(5)