const { add, addAgain } = require('./stringCalculator');


// add() test

test('add(): should return fifteen when there is a lot of white space in the string.', () => {
    expect(add('4      ,5,6')).toBe(15);
});

test('add(): should return six when a new line is used as a delimiter.', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('add(): should not allow negative numbers and then lists them if any.', () => {
    expect(add('1, -1, -3')).toBe('Negatives are not allowed: -1,-3');
});

test('add(): should ignore all values greater than 1000.', () => {
    expect(add('5, 1003, 1000')).toBe(1005);
});

test('add(): should add a delimiter if the first two chars are "//".', () => {
    expect(add('//;\n5; 10; 30\n100')).toBe(145);
});


// addAgain() tests
/*
test('addAgain(): ', () => {
    expect(addAgain('')).toBe();
});
*/

test('addAgain(): should return zero on an empty string.', () => {
    expect(addAgain('')).toBe(0);
});

test('addAgain(): should return the number when the string contains only one nember.', () => {
    expect(addAgain('3')).toBe(3);
});

test('addAgain(): should return the sum of two numbers.', () => {
    expect(addAgain('1,2')).toBe(3);
});

test('addAgain(): should return 10 when the sting contains 1, 2, 3, 4.', () => {
    expect(addAgain('1, 2, 3, 4')).toBe(10);
});

test('addAgain(): should return 6 when the string has "newline" as a delimiter "1\\n2, 3".', () => {
    expect(addAgain('1\n2, 3')).toBe(6);
});

test('addAgain(): should return the negative numbers with a message.', () => {
    expect(addAgain('2, -3, 4, -5')).toBe('Negatives not allowed: -3, -5');
});

test('addAgain(): should reject all numbers greater than 1000. "3, 5, 1001, 1000" = 1008.', () => {
    expect(addAgain('3, 5, 1001, 1000')).toBe(1008);
});

test('addAgain(): should allow the use of a custom delimiter. "//;\\n3;4;5" = 12.', () => {
    expect(addAgain('//;\n3;4;5')).toBe(12);
});
