const add = require('./stringCalculator');

test("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});