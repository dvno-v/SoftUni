let gosho = (function () {
    function List() {
        this.collection = [];
        this.size = 0;
    }
    List.prototype.sort = function () {
        this.collection.sort((a, b) => a - b);
    };
    List.prototype.add = function (element) {
        this.collection.push(element);
        this.size++;
        this.sort();
    };
    List.prototype.remove = function (index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection[index] = null;
            this.collection = this.collection.filter(e => e !== null);
            this.size--;
            this.sort();
        }
    };
    List.prototype.get = function (index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        }
        this.sort();
    };
    return List;
})();


let myList = new gosho();
console.log(myList);
console.log(myList.prototype);
