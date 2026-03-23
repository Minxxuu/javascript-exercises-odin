
const reverseString = function(string) {
    const charArray = string.split("");
    const reversedArray = charArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
