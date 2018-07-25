function a(professionArr) {
    let specProf = ['programming', 'hardware maintenance', 'cooking', 'translating', 'designing'];
    let averProf = ['driving', 'managing', 'fishing', 'gardening'];
    let clumsyProf = ['singing', 'accounting', 'teaching', 'exam-making', 'acting', 'writing', 'lecturing', 'modeling', 'nursing'];
    let totalGold = 0;
    let specClient = 0;
    let averClient = 0;
    let clumsyClient = 0;
    for (let i = 0; i < professionArr.length; i++) {
        let tokens  = professionArr[i].split(" : ");
        let prof =  tokens[0].toLowerCase();
        let gold = Number(tokens[1]);
        if(specProf.includes(prof) && gold>=200){
            specClient++;
            totalGold+= (gold*0.8);
            if(specClient%2===0) {
                totalGold += 200;
            }
        }if(averProf.includes(prof)){
            totalGold+=gold;
        }if(clumsyProf.includes(prof)){
            clumsyClient++;
            if(clumsyClient%2===0){
                totalGold += (gold*0    .95);
            }
            if(clumsyClient%3===0){
                totalGold += (gold*0.90);
            }else{
                totalGold+=gold;
            }
        }
    }
    console.log(`Final sum: ${totalGold.toFixed(2)}`);
    if(totalGold<1000){
        console.log(`Mariyka need to earn ${(1000-totalGold).toFixed(2)} gold more to continue in the next task.`);
    }else{
        console.log(`Mariyka earned ${(totalGold-1000).toFixed(2)} gold more.`)
    }
}
a(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
a(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);

