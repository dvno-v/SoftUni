class TrainingCourse {
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }
    addTopic(title, date){
        let topic = {title, date};

        this.topics.push(topic);

        this.topics = this.topics.sort(function(a,b){
            let  c = new Date(a.date);
            let d = new Date(b.date);
            return c-d;
        });
    }
    get firstTopic(){
        return this.topics[0];
    }
    get lastTopic(){
        return this.topics[this.topics.length-1];
    }
    toString(){
        let result = `Course "${this.trainer}" by ${this.trainer}\n`;
        for (let topic of this.topics) {
            result+=`* ${topic.title} - ${topic.date}\n`
        }
        return result;
    }
}
let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
js.addTopic("Maps", new Date(2011, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2012, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2013, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2000, 9, 3, 18, 0));

//console.log(js.toString());

let test = new TrainingCourse('PHP', 'Royal');
test.addTopic('Strings', new Date(2017, 10, 10, 18, 0));

console.log(test.firstTopic)


