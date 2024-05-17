const reverseString = function(stringToReverse) {
   
    let charactersOfString = stringToReverse.split('');
    let charactersReversed = charactersOfString.reverse();
    return charactersReversed.join('');
};



// Do not edit below this line
module.exports = reverseString;
