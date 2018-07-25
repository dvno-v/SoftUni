function htmlEscape(arr) {
    function replace(input) {
        input = input.replace(/&/g, '&amp;');
        input = input.replace(/</g, '&lt;');
        input = input.replace(/>/g, '&gt;');
        input = input.replace(/"/g, '&quot;');
        return input;
    }
    let result = "<ul>\n";
    for (let i = 0; i < arr.length; i++) {
        result+=`  <li>${replace(arr[i])}</li>\n`;
    }
    result += "</ul>";
    return result;
}

console.log(htmlEscape(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));