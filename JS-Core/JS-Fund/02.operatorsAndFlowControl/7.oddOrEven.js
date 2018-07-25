function oddOrEven(num) {
    if(num%2==0){
        console.log("even");
    }else if(num%2!=0 && num==Math.round(num)){
        console.log("odd");
    }else{
        console.log("invalid");
    }
}

oddOrEven(3.4)