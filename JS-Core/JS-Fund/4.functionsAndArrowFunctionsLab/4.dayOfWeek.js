function day(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday", "Sunday"];
    if(days.includes(day)){
        return days.indexOf(day) + 1;
    }else{
        return "error"
    }
}

console.log(day('Iskam da umra'));