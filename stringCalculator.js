function add(numbers){
    const arr = numbers.replace(/\s\s+/g, '').split(/[,|\n]/).map(x => parseInt(x));
    const reducer = (acc, curr) => acc + curr;
    if(isNaN(arr.reduce(reducer))) { return `Your input is invalid and does not return a number.`; }
    return arr.reduce(reducer);
};

console.log(add('1, \n'));

module.exports = add;