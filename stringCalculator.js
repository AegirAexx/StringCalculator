function add(numbers){
    const arr = numbers.replace(/\s\s+/g, '').split(/[,|\n|]/).map(x => parseInt(x)).filter(x => x <= 1000);
    const negatives = arr.filter(x => x < 0);
    if(negatives.length > 0) { return `Negatives are not allowed: ${negatives}`}
    const reducer = (acc, curr) => acc + curr;
    if(isNaN(arr.reduce(reducer))) { return `Your input is invalid.`; }
    return arr.reduce(reducer);
};

// console.log(add(''));

module.exports = add;