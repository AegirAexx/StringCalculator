const add = require('./stringCalculator');

test("should return fifteen when there is a lot of white space in the string", () => {
    expect(add('4      ,5,6')).toBe(15);
});

test("should return six when a new line is used as a delimiter", () => {
    expect(add('1\n2,3')).toBe(6);
});

test("should return a message saying the input is invalid", () => {
    expect(add('1,\n')).toBe(`Your input is invalid and does not return a number.`);
});

test("does not allow negative numbers and then lists them if any", () => {
    expect(add('1, -1, -3')).toBe(`Negatives are not allowed: -1,-3`);
});
