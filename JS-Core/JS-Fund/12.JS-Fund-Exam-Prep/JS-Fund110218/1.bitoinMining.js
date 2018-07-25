function a(strArr) {
    let bitcoins = 0;
    let dayBought = 0;
    let gold = 0;
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    for (let i = 0; i < strArr.length; i++) {
        let goldGrams = Number(strArr[i]);
        if(i===2){
            goldGrams *= 0.7 ;
        }
        gold += Number((goldPrice * goldGrams));
        while(gold >= bitcoinPrice){
            bitcoins++;
            if(bitcoins===1)
                dayBought = i+1;
            gold -= bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(dayBought!==0)
        console.log(`Day of the first purchased bitcoin: ${dayBought}`)
    console.log(`Left money: ${(Math.round(gold * 100) / 100).toFixed(2)} lv.`);
}
a([ '100', '200', '300' ]);
a([ '50', '100' ]);
a([ '3124.15', '504.212', '2511.124' ]);