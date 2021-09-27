const {getGreeting, getSum} = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can get the sum of two numbers', () => {
  expect(getSum(1,2)).toEqual(3)
});