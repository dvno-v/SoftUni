function a(numberArr) {
    let sums = []
    for (let i = 0; i < numberArr.length; i++) {
        let sum = 1;
        if(Number(numberArr[i])<10 && Number(numberArr[i])>=0){
            for (let j = i+1; j <= i + Number(numberArr[i]); j++) {
                sum *= Number(numberArr[j]);
            }
            sums.push(sum);
        }
    }
    console.log(sums.sort((a,b)=> b-a)[0]);
}
a([ '100', '200', '2', '3', '2', '3', '2', '1', '1' ]);

a([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
])