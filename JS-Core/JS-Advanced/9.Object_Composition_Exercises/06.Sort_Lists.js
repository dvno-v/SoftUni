function result() {
    let collection = [];
    function sort() {
        collection.sort((a,b) => a - b);
    }
    function add(element) {
        collection.push(element)
        this.size++
        sort();
    }
    function remove(index) {
        if(index>=0 && index<collection.length){
            collection[index] = null;
            collection =collection.filter(e => e !==null);
            this.size--;
            sort();
        }
    }
    function get(index) {
        if(index>=0 && index<collection.length) {
            return collection[index];
        }
        sort();
    }
    return {
        add:add,
        remove:remove,
        get:get,
        size: 0
    }
};

let asd = result();

asd.add(5);
asd.add(3);
console.log(asd.get(0));
asd.remove(0)
console.log(asd.get(0));
console.log(asd.size);
