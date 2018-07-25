function a(strArr) {
    let firstChar = strArr.shift();let secondChar = strArr.shift();
    let rightWord = strArr.shift();let encryptedTetx = strArr.shift();
    let numberPattern = /[0-9\.]{3,}/g;let numbers = encryptedTetx.match(numberPattern);
    let countryPattern = /[A-Z][a-z]+[A-Z]/;let country = countryPattern.exec(encryptedTetx)[0];
    let substr = "";
    for(let i = firstChar; i<=secondChar; i++){
        substr+=country[i]
    }
    country = country.replace(substr,rightWord);
    let firstWord = country[0];
    let toLower = country.substr(1).toLowerCase();
    let result = firstWord+toLower;
    let town =""
    for(let i = 0; i<numbers.length; i++){
        town += String.fromCharCode(Math.ceil(numbers[i]));
    }
    let townResult = town[0].toUpperCase() + town.substr(1).toLowerCase();
    console.log(`${result} => ${townResult}`);

}


a(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
a(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])