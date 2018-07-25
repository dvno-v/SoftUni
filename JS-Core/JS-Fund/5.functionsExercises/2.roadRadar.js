function radar(arr) {
    let speed = arr[0];
    let area = arr[1];
    function speedLimit(area1) {
        switch (area1){
            case "city": return 50;
            case "motorway": return 130;
            case "interstate": return 90;
            case "residential": return 20;
        }
    }
    let speedDif = speed - speedLimit(area);
    if(speedDif<=0) return;
    else if(speedDif<=20) return "speeding";
    else if(speedDif<=40) return "excessive speeding";
    else return "reckless driving";
}

console.log(radar(130, 'city'));