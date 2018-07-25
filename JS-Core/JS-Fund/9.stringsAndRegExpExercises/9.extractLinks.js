function solve(stringArr) {
    let re = /www\.[a-zA-Z0-9-]+(\.[a-z]+){1,}/gm;
    let matches = [];
    for (let string of stringArr) {
        let match;
        while(match = re.exec(string)){
            matches.push(match[0]);
        }
    }
    return matches.join("\n")
}

console.log(solve(["www.iskam.bg","ww.goshkata.12","www.gosho-site.","ww.justASite.bg","lel.awesome.com","www.stamat_gosho.hit.bg","www.no-symb#^ols-allow%ed.com","www.pesho.12","www.gosho-site.","www.example-site._*^#","Some textwww.softuni.bg","Just a link in a www.sea-of-text.bg-swimming around","Instruments www.Instruments.rom.com.trombone2000 Instrument here","All your ice cream flavors-www.scream.for.ice.cream(We  also have squirrels)"]));