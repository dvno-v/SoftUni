function filterByAge(min,name1,age1,name2,age2){
    let kid1 = {name : name1,age : age1};
    let kid2 = {name : name2,age : age2};
    if(kid1.age >= min)
    {
        console.log(kid1);
    }if(kid2.age >= min)
    {
        console.log(kid2);
    }
}
filterByAge(12,"goshko",22,`peshko`,31);