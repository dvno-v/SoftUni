function solve(arr) {
    let regex = /^([A-Z][a-z]+) - ([1-9][0-9]*) - ([0-9A-z -]+?)$/gm;
    for(let element of arr){
        let match = regex.exec(element);
        if(match)console.log(`Name: ${match[1]}\n` + `Position: ${match[3]}\n` + `Salary: ${match[2]}`);
    }
}

solve(['Jeff - 1500 - Staff', 'Ko - 150 - Ne'])