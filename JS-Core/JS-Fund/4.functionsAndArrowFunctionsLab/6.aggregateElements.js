function aggregateElements(elements) {
    function aggregate(es, start, func) {
        for (let e of es) {
            start = func(start, e);
        }
        return start;
    }

    console.log(aggregate(elements, 0, (a, b) => a + b));
    console.log(aggregate(elements, 0, (a, b) => a + 1/b));
    console.log(aggregate(elements, '', (a, b) => a + b));
}

aggregateElements([1,2,3]);