function toStringExtension() {
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
        toString(){
            return super.toString().slice(0,super.toString().length-1) + `, subject: ${this.subject})`
        }
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString(){
            return super.toString().slice(0,super.toString().length-1) + `, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let Person = toStringExtension().Person;
let Teacher = toStringExtension().Teacher;
let Student = toStringExtension().Student;

let p = new Person("goshko", "asd@asd.com");
let t = new Teacher("peshko", "asd@asd.com", "biology");
let s = new Student("stamat", "asd@asd.com", "chikiboistvo");


console.log(p.toString());
console.log(t.toString());
console.log(s.toString());
