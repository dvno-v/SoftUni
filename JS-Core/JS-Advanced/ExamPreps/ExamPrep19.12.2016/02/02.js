function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}
let list = makeList();
list.addLeft(2);
list.addRight(3);
list.addLeft(4);
list.addRight([1,2,3,4,5,6]);
console.log(list.toString());
module.exports = {makeList};
