function storingObjects(input) {
    let students = [];
    for (line of input) {
        let student = {};
        let args = line.split(' -> ');
        student.name = args[0];
        student.age = Number(args[1]);
        student.grade = Number(args[2]).toFixed(2);
        students.push(student);
    }

    for (obj of students) {
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Grade: ${obj.grade}`);
    }
}

// Test:
storingObjects([
    "Pesho -> 13 -> 6.00",
    "Ivan -> 12 -> 5.57",
    "Toni -> 13 -> 4.90"
]);