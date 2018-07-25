let solve = (function () {
    class Employee{
        constructor(name, age){
            if(this.constructor == Employee){
                throw new Error;
            }
            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
        }
        work(){
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }
        collectSalary(){
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
        getSalary(){
            return this.salary
        }
    }
    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(' is working on a simple task.')
        }
    }
    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(" is supervising junior workers.")
        }
    }
    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }
        getSalary(){
            return this.salary + this.dividend;
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
});
let result = solve();

let ma = new result.Manager('goshko', '12');

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

console.log(guy3.hasOwnProperty('salary'));;