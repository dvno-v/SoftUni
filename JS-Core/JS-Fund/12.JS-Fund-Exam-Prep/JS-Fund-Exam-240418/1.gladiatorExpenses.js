function a(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armourPrice) {
    let helmBrokeCount =0;
    let swordBrokeCount =0;
    let shieldBrokeCount =0;
    let armourBrokeCount =0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if(i%2===0 && i%3 ==0){
            shieldBrokeCount++;
            if(shieldBrokeCount%2===0 && shieldBrokeCount!== 0){
                armourBrokeCount++;
            }
        }
        if(i%2===0){
            helmBrokeCount++;
        }
        if(i%3===0){
            swordBrokeCount++;
        }

    }
    let expenses = helmetPrice*helmBrokeCount + swordPrice*swordBrokeCount + shieldPrice*shieldBrokeCount + armourBrokeCount*armourPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

a(7,2,3,4,5)
a(23,12.50,21.50,40,200);