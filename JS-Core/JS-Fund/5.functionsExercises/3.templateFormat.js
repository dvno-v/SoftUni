function format(arr) {
    "use strict";
    function formatPrinter(question, answer) {
        let text = "  <question>\n" + '    ' +  question + "\n" + "  </question>\n";
        text += "  <answer>\n" + '    ' + answer + '\n' + "  </answer>\n";
        return text;
    }
    let format = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + "<quiz>\n";

    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i];
        let answer = arr[i+1];
        format += formatPrinter(question,answer);
    }
    format += "</quiz>";

    return format;
}

console.log(format(['iskam da umra?', "iskash batko, iskash"]));