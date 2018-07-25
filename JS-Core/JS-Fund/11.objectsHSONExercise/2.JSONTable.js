function a(jsonArr) {
    let html = "<table>\n";
    for(let json of jsonArr){
        let currentWorker = JSON.parse(json)
        html += "\t<tr>\n"+`\t\t<td>${htmlEscape(currentWorker.name)}</td>\n` + `\t\t<td>${htmlEscape(currentWorker.position)}</td>\n` + `\t\t<td>${currentWorker.salary}</td>\n`;
        html += "\t<tr>\n";
    }
    html += "</table>";
    return html
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(a(['{"name":"Pesho","position":"Promenliva","salary":100000}']));