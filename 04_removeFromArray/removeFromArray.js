
const removeFromArray = function(arrayToCheck, ...thingsToRemoveFromArray) {
    let thingToCheckFor = undefined;
    for (let j = 0; j < thingsToRemoveFromArray.length; j++) { 
        thingToCheckFor = thingsToRemoveFromArray[j]
        for (let i = 0; i < arrayToCheck.length; i++){ 
            if (arrayToCheck[i] === thingToCheckFor){ 
                arrayToCheck.splice(i, 1); 
                i -= 1 
            }

            }
        }
    return arrayToCheck;  
    

};

removeFromArray([1,2,2,4], 2);

// Do not edit below this line
module.exports = removeFromArray;
