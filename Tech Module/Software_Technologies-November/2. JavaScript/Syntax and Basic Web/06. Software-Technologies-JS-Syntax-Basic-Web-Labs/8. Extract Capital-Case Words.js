function extractCapitalCaseWords(arr) {
    let text = arr.join(",");
    let words = text.split(/\W+/);
    let nonEmptyWords = words.filter(w => w.length > 0);
    let upWords = nonEmptyWords.filter(isUppercase);
    console.log(upWords.join(", "));
    function isUppercase(str) {
        return str === str.toUpperCase();
    }
}

extractCapitalCaseWords(['We start by HTML, CSS, JavaScript, JSON and REST.\n' +
'Later we touch some PHP, MySQL and SQL.\n' +
'Later we play with C#, EF, SQL Server and ASP.NET MVC.\n' +
'Finally, we touch some Java, Hibernate and Spring.MVC.\n'])
