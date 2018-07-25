function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (this.constructor == Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = ''
            this._elementIndex = this.weight * this.melonSort.length;
        }
        get elementIndex() {
            return this._elementIndex;
        }
        toString() {
            let result = `Element: ${this.element}\n`;
            result += `Sort: ${this.melonSort}\n`;
            result += `Element Index ${this.elementIndex}`;
            return result;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Air';
        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(w, s) {
            super(w,s);
            this.element = 'Water'
        }
        morph() {
            let that = this;
            changeElement(that);
        }
    }
    let changeElement = (function () {
        let elements = ["Fire", "Earth", "Air", "Water"];
        return function (that) {
            that.element = elements.shift();
            elements.push(that.element);
        }
    })();
    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}
