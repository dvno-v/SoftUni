function solve(order) {
    let carPattern = {
        model: order.model,
        engine: {power: 90, volume: 1800},
        carriage: {type: order.carriage, color: order.color},
        wheels: getWheels()
    };
    if (order.power > 90 && order.power < 120)
        carPattern.engine = {power: 120, volume: 2400};
    else if (order.power >= 121)
        carPattern.engine = {power: 200, volume: 3500};
    function getWheels() {
        let wheel = order.wheelsize;
        let wheels = [];
        if(wheel % 2 ==0){
            wheel--;
        }
        for (let i = 1; i < 5; i++) {
            wheels.push(wheel)
        }return wheels
    }

    return carPattern
}


console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));