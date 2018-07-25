function matchDates(str) {
    let regex = /\b(\d{1,2})-(\w{3})-(\d{4})\b/g;
    let result = str.match(regex);

    for(let word of result){
        if(word.length==11){
            console.log(word + ` (Day: ${word.slice(0,2)}, Month: ${word.slice(3,6)}, Year: ${word.slice(7)})`)
        }else{
            console.log(word + ` (Day: ${word.slice(0,1)}, Month: ${word.slice(2,5)}, Year: ${word.slice(6)})`)
        }
    }
}
matchDates("1-Jan-1999 is a valid date.\n" +
    "So is 01-July-2000.\n" +
    "I am an awful liar, by the way\n" +
    "-- Ivo, 28-Sep-2016.");