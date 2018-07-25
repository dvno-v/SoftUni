function attachEventsListeners() {
    "use strict";
    let inputs = document.querySelectorAll('input');
    for (let i = 1; i < inputs.length; i+=2) {
        let button = inputs[i];
        let time = inputs[i-1];
        button.addEventListener("click" ,()=>{
            let timeUnit = time.value;
            let typeofTime = time.id;
            switch (typeofTime){
                case"days":
                    document.getElementById('hours').value = (timeUnit * 24);
                    document.getElementById('minutes').value = (timeUnit * 24 * 60);
                    document.getElementById('seconds').value = (timeUnit * 24 * 60* 60);
                    break;
                case"hours":
                    document.getElementById('days').value = (timeUnit / 24);
                    document.getElementById('minutes').value = timeUnit * 60;
                    document.getElementById('seconds').value = timeUnit * 60 * 60;
                    break;
                case"minutes":
                    document.getElementById('days').value = (timeUnit / 24 / 60);
                    document.getElementById('hours').value = (timeUnit / 60);
                    document.getElementById('seconds').value = (timeUnit *60);
                    break;
                case"seconds":
                    document.getElementById('days').value = (timeUnit / 24 / 60 / 60);
                    document.getElementById('hours').value = (timeUnit / 60 / 60);
                    document.getElementById('minutes').value = (timeUnit / 60);
                    break;
            }
        })
    }
}