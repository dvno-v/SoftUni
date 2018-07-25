function coneCalc(r,h) {
    let volume = 1/3 * Math.PI * r**2 *h;
    let totalArea = Math.PI*r*(r + Math.sqrt(r**2 + h**2));
    console.log(volume);
    console.log(totalArea);
}


coneCalc(3,5);