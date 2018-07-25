function solve(str) {
    let regex = /^[0-9a-zA-Z]+@([a-z]+.[a-z]+)+$/g;
    if(regex.test(str)){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }
}

solve("gosho@abv.bg");