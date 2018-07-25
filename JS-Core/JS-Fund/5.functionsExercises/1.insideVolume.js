function insideVolume(arr) {
    function isInside(x, y, z) {
        let x1 = 10; let x2 = 50;
        let y1 = 20; let y2 = 80;
        let z1 = 15; let z2 = 50;

        if (x >= x1 && x <= x2)
            if (y>= y1 && y <= y2)
                if (z >= z1 && z <= z2) return true;

        return false;
    }
    for(let i = 0; i < arr.length ; i+=3){
        console.log(isInside(arr[i], arr[i + 1], arr[i + 2]) ? "inside" : "outside");;
    }
}
insideVolume([30,30,30,13,50,31]);