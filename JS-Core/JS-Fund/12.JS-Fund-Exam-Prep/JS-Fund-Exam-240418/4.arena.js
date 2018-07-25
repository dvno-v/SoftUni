function a(strArr) {
    "use strict";
    let gladList = {};
    for(let i = 0; i<strArr.length-1; i++){
        if(strArr[i].includes("->")){
            let tokens = strArr[i].split("->").map(a => a.trim()).filter(a => a.length>0);
            let name = tokens[0];
            let technique = tokens[1];
            let skill  = Number(tokens[2]);
            if(!gladList.hasOwnProperty(name)){
                gladList[name] = {};
                gladList[name]["total"]=0;
            }
            if(!gladList[name].hasOwnProperty(technique)){
                gladList[name][technique] = skill;
                gladList[name]["total"]+=skill;
            }else{
                if(gladList[name][technique] < skill){
                    gladList[name][technique] = skill;
                }
            }
        }else if(strArr[i].includes("vs")){
            let tokens = strArr[i].split("vs").map(a=> a.trim()).filter(a=>a.length>0);
            let glad1 = tokens[0];
            let glad2 = tokens[1];
            let glad2abilities = Object.keys(gladList[glad2]);
            let commonAbilities = [];
            for(let prop in gladList[glad1]){
                if(prop!== 'total' && glad2abilities.includes(prop)){
                    commonAbilities.push(prop)
                }
            }
            let damage1 = 0;
            let damage2 = 0;
            for (let ability of commonAbilities) {
                damage1 += gladList[glad1][ability];
                damage2 += gladList[glad2][ability];
            }
            if(damage1 > damage2){
                delete gladList[glad2];
            }else{
                delete gladList[glad1];
            }
        }
    }
    let sortedGladList = Object.keys(gladList).sort((glad1, glad2) =>{
        if(gladList[glad1]["total"] === gladList[glad2]["total"]){
            return glad1.localeCompare(glad2)
        }return gladList[glad2]["total"] - gladList[glad1]["total"]
    })
    for (let glad of sortedGladList) {
        console.log(`${glad}: ${gladList[glad]['total']} skill`);
        let sortedSkills = Object.keys(gladList[glad]).filter(a => a!=='total').sort((s1,s2) => {
            if(gladList[glad][s1] === gladList[glad][s2]){
                return s1.localeCompare(s2)
            }return gladList[glad][s2] - gladList[glad][s1];
        })
        for (let skill of sortedSkills) {
            console.log(`- ${skill} <!> ${gladList[glad][skill]}`)
        }
    }
}

a( ['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Gladius -> Shield -> 250',
    'Julius -> Shield -> 150',
    'Gladius vs Julius',
    'Ave Cesar' ])