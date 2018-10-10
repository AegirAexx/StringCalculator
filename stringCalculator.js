function add(numbers){

    // Set up the default delimiter with regular expression.
    let delimiter = /[,|\n]/;

    // Check if the first two chars are "//", create an alternate regular expression and trim the numbers string.
    if(numbers.startsWith('//')){
        const newDelimiter = numbers.charAt(2);
        const first = `[,|\\n|`;
        const end = `]`;
        numbers = numbers.substring(4);
        delimiter = new RegExp(first + newDelimiter + end);
    }

    // Create an array from the string.
    // > replace all white space with "" >
    // > split with RegExp delimiter >
    // > map all the chars to numbers >
    // > filter all values greater than 1000.
    const arr = numbers.replace(/\s\s+/g, '').split(delimiter).map(x => parseInt(x)).filter(x => x <= 1000);
    
    // Push all the negative values to an array so it can be returned.
    const negatives = arr.filter(x => x < 0);
    if(negatives.length > 0) { return `Negatives are not allowed: ${negatives}`}
    
    // A reducer method to execute on all elements of the array.
    const reducer = (acc, curr) => acc + curr;
    
    // If any of the values in the array are not numbers throw an exception.
    if(isNaN(arr.reduce(reducer))) { return `Your input is invalid.`; }
    
    // Finally add all the values together with the reducer method.
    return arr.reduce(reducer);
};

module.exports = add;