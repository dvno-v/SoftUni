function a(strArr) {
    let strCompanies = strArr.shift();
    let delimiter = strArr.shift();
    let companies = strCompanies.split(delimiter).map(a => a.trim())
    let valid = [];
    let invalid = [];
    let hasComp1 = false;
    let hasComp2 = false;
    let hasComp3 = false;
    for (let sent of strArr) {
        let toLower = sent.toLowerCase();
        if (toLower.includes(companies[0]))
            hasComp1 = true;
        if (toLower.includes(companies[1]))
            hasComp2 = true;
        if (toLower.includes(companies[2]))
            hasComp3 = true;
        if (hasComp1 && hasComp2 && hasComp3) {
            valid.push(toLower);
        } else {
            invalid.push(toLower);
        }
        hasComp1 = false;
        hasComp2 = false;
        hasComp3 = false;
    }
    if (valid.length > 0) {
        console.log("ValidSentences");
        for (let i = 0; i < valid.length; i++) {
            console.log(`${i + 1}. ${valid[i]}`)
        }
        if(valid.length>0 && invalid.length>0){
            console.log("=".repeat(30));
        }
    }
    if(invalid.length>0) {
        console.log("InvalidSentences");
        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i + 1}. ${invalid[i]}`)
        }
    }
}

a(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]);

a(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"])

