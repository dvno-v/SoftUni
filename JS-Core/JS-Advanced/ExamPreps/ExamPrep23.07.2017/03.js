class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(deadline) {
        if (deadline < Date.now()) {
            throw new Error
        }
        this._deadline = deadline
    }

    static comparator(a, b) {
        const overdue = 3;
        const inProgres = 2;
        const open = 1;
        const complete = 0;
        let aRank = 0;
        let bRank = 0;
        switch (a.status){
            case"Open":
                aRank = open;
                break;
            case"In Progress":
                aRank = inProgres;
                break;
            case"Complete":
                aRank = complete;
                break;
            case"Overdue":
                aRank = overdue;
                break;
        }
        switch (b.status){
            case"Open":
                bRank = open;
                break;
            case"In Progress":
                bRank = inProgres;
                break;
            case"Complete":
                bRank = complete;
                break;
            case"Overdue":
                bRank = overdue;
                break;
        }
        //if both have the same status
        if(a.status == b.status){
            return a.deadline - b.deadline;
        }
        return aRank - bRank;
    }

    isOverdue() {
        if (this.deadline < Date.now()) {
            if (this.status != "Complete") {
                this.status = "Overdue";
                return true;
            }
        }
        return false;
    }

    toString() {
        let result = "[";
        switch (this.status) {
            case"Open":
                result += "\u2731] ";
                break;
            case"In Progress":
                result += "\u219D] ";
                break;
            case"Complete":
                result += "\u2714] ";
                break;
            case"Overdue":
                result += "\u26A0] ";
                break;
        }
        return result + `${this.title} (${this.isOverdue() ? "overdue" : `deadline: ${this.deadline}`})`;
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

