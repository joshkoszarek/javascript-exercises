const repeatString = function(word, numberOfTimesToRepeatWord) {
    let totalString  = ''
    if (numberOfTimesToRepeatWord < 0) { 
        return 'ERROR';
    }
    for (let i = 0; i < numberOfTimesToRepeatWord; i++){ 
        totalString += word;
    }
    return totalString; 
};

// Do not edit below this line
module.exports = repeatString;
