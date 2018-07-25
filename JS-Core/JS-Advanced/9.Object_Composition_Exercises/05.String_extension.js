(function () {
    String.prototype.ensureStart = function (str) {
        let strLenght = str.length;
        let currentStr = this + "";
        if (currentStr.slice(0, strLenght) !== str) {
            return str + currentStr;
        }
        return currentStr;
    };
    String.prototype.ensureEnd = function (str) {
        let strLenght = str.length;
        let currentStr = this + "";
        if (currentStr.slice(-strLenght) !== str) {
            return currentStr + str;
        }
        return currentStr;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        if ((this + "").length <= n) {
            return this + "";
        }
        let splitted = this.split(" ");
        if (splitted.length === 1) {
            let result = (this + "").substr(0, n - 3) + ".".repeat(3);
            return result;
        }
        let result = "";
        for (let i = 0; i < splitted.length; i++) {
            //console.log(splitted[i]);
            if (result.length + (splitted[i] + "").length + 3 > n) {
                result = result.trim();
                return result + ".".repeat(3)
            }
            result += splitted[i] + " ";
        }
        return result;
    };
    String.format = function () {
        let args = [...(arguments)]
        let string = args.shift();
        console.log(string)
        for (let key  in args) {
            string = string.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
        return string;
    }
    String.prototype.isEmpty = function () {
        return !(this + '').length > 0;
    }
})();
/*let str = "hello my string"
str = str.truncate(16)
console.log(str);
str = str.truncate(14)
console.log(str);
str = str.truncate(8)
console.log(str);
str = str.truncate(4)
console.log(str);
str = str.truncate(2)
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
console.log(str)
console.log("".isEmpty());*/

let testString = 'the quick brown fox jumps over the lazy dog';


console.log(testString.truncate(6))
console.log(testString.truncate(12))
