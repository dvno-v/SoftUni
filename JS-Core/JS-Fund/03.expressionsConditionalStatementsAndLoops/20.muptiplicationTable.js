function table(n) {
    let result = "<table border=\"1\">\n";
    for (let i = 0; i <= n; i++) {
        result += "<tr>"
        for (let k = 0; k <= n; k++) {
            if (i + k === 0) {
                result += `<th>x</th>`;
            } else if (i == 0) {
                result += `<th>${k}</th>`
            }
        }
        if (i != 0) {
            result += `<th>${i}</th>`;
            for (let k = 1; k <= n; k++) {
                result += `<td>${k * i}</td>`;
            }
        }
        result += "</tr>\n"
    }
    result += "</table>";
    return result;
}

console.log(table(6));