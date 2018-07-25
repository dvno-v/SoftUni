function properties(arr) {
    let prop1 = arr[0]; let value1 = arr[1];
    let prop2 = arr[2]; let value2 = arr[3];
    let prop3 = arr[4]; let value3 = arr[5];

    let myObj = {};
    myObj[prop1] = value1;
    myObj[prop2] = value2;
    myObj[prop3] = value3;

    console.log(myObj)
}

properties(['name', 'Pesho', 'age', '23', 'gender', 'male'])