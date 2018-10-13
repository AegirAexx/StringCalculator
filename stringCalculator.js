function add(numbers){

    // Set up the default delimiters ("," or "\n") with a regular expression.
    let delimiter = /[,|\n]/;

    // Check if the first two chars are "//".
    if(numbers.startsWith('//')){
        // Grab the new delimiter.
        const newDelimiter = numbers.charAt(2);
        // Set up the first part of the new regular expression.
        const first = '[,|\\n|';
        // Set up the last part of the new regular expression.
        const end = ']';
        // Grab the the rest of the string, the actual numbers.
        numbers = numbers.substring(4);
        // Last but not the least, create dynamically a new regular expression.
        delimiter = new RegExp(first + newDelimiter + end);
    }

    // Create an array from the numbers string...
    const arr = numbers
        // ...replace all white space with an empty space...
        .replace(/\s\s+/g, '')
        // ...split the string with a regular expression delimiter...
        .split(delimiter)
        // ...parse string numbers to actual numbers...
        .map(stringNumber => parseInt(stringNumber))
        // ...filter out all the values greater than 1000.
        .filter(value => value <= 1000);

    // Check for and push all the negative values to an array so it can be returned.
    const negatives = arr.filter(potentiallyNegative => potentiallyNegative < 0);
    // If the array actually has anything in it, the program returns them in a message.
    if(negatives.length > 0) { return `Negatives are not allowed: ${negatives}`;}

    // A reducer method to execute on all elements in the array. It's the blueprint to add all the elements together.
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // If any of the values in the array are not numbers, return a message.
    if(isNaN(arr.reduce(reducer))) { return 'Your input is invalid.'; }

    // Finally add all the values together and return the total sum.
    return arr.reduce(reducer);
}

// Second go and now was able to do it in 11 lines of code and in less than 30 minutes!
function addAgain(numbers) {
    // Check for the "//" flag for the custom delimiter.
    if (numbers.startsWith('//')) { 
        // Dynamically create a regular expresion with the custom delimiter and global(greedy) flag.
        const delimiter = new RegExp(numbers.charAt(2), 'g');
        // Remove the slashes and replace the delimiters.
        numbers = numbers.substring(4).replace(delimiter, ',');
    }
    // Replace the "newline" with the "," delimiter.
    numbers = numbers.replace(/\n/g, ',');
    // Return zero if the string is empty.
    if (numbers.length == 0){ return 0; }
    // Split the numbers string into an array.
    const numbersArray = numbers.split(',');
    // Filter the negative numbers into a seperate array.
    const negatives = numbersArray.filter(x => x < 0);
    // Reject the negative numbers, if any, with a message.
    if (negatives.length > 0) { return `Negatives not allowed:${negatives}`;}
    // Create a sum method to reduce.
    const sum = (total, index) => total + index;
    // Finally return the parsed to numbers, without numbers greater than 1000 and added together final number!
    return numbersArray.map(i => parseInt(i)).filter(x => x <= 1000).reduce(sum);
}

module.exports = {
    add,
    addAgain
};
