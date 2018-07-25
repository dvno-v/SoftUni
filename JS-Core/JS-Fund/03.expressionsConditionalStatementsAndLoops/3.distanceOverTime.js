function distanceOverTime(arr) {
    let speed1 = Number(arr[0]);
    let speed2 = Number(arr[1]);
    let time = Number(arr[2]) / 3600;
    let s1 = speed1 * time;let s2 = speed2*time;
    console.log(Math.abs((s1-s2)*1000));
}

distanceOverTime([11,10,120])