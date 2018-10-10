function add(numbers){
    const arr = numbers.replace(/\s\s+/g, '').split(',').map(x => parseInt(x));
    const reducer = (acc, curr) => acc + curr;
    if(isNaN(arr.reduce(reducer))) { return 0; }
    return arr.reduce(reducer);
};

// console.log(add('1'));

module.exports = add;