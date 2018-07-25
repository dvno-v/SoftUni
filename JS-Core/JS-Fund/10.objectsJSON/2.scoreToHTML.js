function solve(json) {
    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        let result = text.replace(/[\"&'<>]/g, ch => map[ch]);
        //return text.replace(/[\"&'<>]/g, ch => map[ch]);
        return result;

    }

    let objArr = JSON.parse(json);
    let html = "<table>\n  <tr><th>name</th><th>score</th></tr>\n"
    for (let obj of objArr) {
        let name = obj.name;
        let score = Number(obj.score);
        html += `  <tr><td>${htmlEscape(name)}</td><td>${htmlEscape(score)}</td></tr>\n`
    }

    return html + "</table>";
}

console.log(solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));