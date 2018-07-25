function solution1([input]) {
    let numArr = input.split(' ');
    let num1 = Number(numArr[0]);
    let num2 = Number(numArr[1]);
    let num3 = Number(numArr[2]);

    if (num1 + num2 == num3) {
        console.log(Math.min(num1, num2) + ' + ' + Math.max(num1, num2) + ' = ' + num3);
    }
    else if (num1 + num3 == num2) {
        console.log(Math.min(num1, num3) + ' + ' + Math.max(num1, num3) + ' = ' + num2);
    }
    else if (num2 + num3 == num1) {
        console.log(Math.min(num2, num3) + ' + ' + Math.max(num2, num3) + ' = ' + num1);
    }
    else {
        console.log('No');
    }
}

function solution2(arr) {
    let nums = arr[0].split(' ').map(Number);
    //same result:
    // let numbers = input.split(' ').map(x => Number(x));
    console.log(
        check(nums[0], nums[1], nums[2]) ||
        check(nums[0], nums[2], nums[1]) ||
        check(nums[1], nums[2], nums[0]) || 'No');
    function check(num1, num2, sum) {
        if (num1 + num2 != sum)
            return false;
        if (num1 > num2)
            [num1, num2] = [num2, num1]; // Swap num1 and num2
        return `${num1} + ${num2} = ${sum}`;
    }
}


solution2([2, 3, 5]);