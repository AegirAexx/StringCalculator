function add(numbers){
    let delimiter = /[,|\n]/;
    if(numbers.startsWith('//')){
        const newDelimiter = numbers.charAt(2);
        const first = `[,|\\n|`;
        const end = `]`;
        numbers = numbers.substring(4);
        delimiter = new RegExp(first + newDelimiter + end);
    }
    const arr = numbers.replace(/\s\s+/g, '').split(delimiter).map(x => parseInt(x)).filter(x => x <= 1000);
    const negatives = arr.filter(x => x < 0);
    if(negatives.length > 0) { return `Negatives are not allowed: ${negatives}`}
    const reducer = (acc, curr) => acc + curr;
    if(isNaN(arr.reduce(reducer))) { return `Your input is invalid.`; }
    return arr.reduce(reducer);
};

module.exports = add;