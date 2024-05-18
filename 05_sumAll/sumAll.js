function getSum(number) { 
    return (((number)*(number + 1))/2);
}

const sumAll = function(startValue, endValue) {
    if (typeof startValue != 'number' || typeof endValue != 'number'|| startValue < 0 || endValue < 0){
        return 'ERROR'
    } 
    let startCountAt = startValue; 
    let endCountAt = endValue;
    if (startValue > endValue){ 
        endCountAt = startValue;
        startCountAt = endValue;
    }
    let totalSum = 0;
    for (let i = startCountAt; i <= endCountAt; i++){ 
        totalSum += i; 
    }
    return totalSum; 
};
console.log(sumAll(1,4)); 

// Do not edit below this line
module.exports = sumAll;
