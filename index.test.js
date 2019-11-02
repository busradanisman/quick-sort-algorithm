const sort = require('./index')

test('Should be sort unsorted random array', () => {
  expect(sort([3, 37, 10, 9, 50, 46, 1, -3])).toStrictEqual([-3, 1, 3, 9, 10, 37, 46, 50])
})

test('Should be sort sorted random array', () => {
  expect(sort([1, 2, 3, -2, 5, 7])).toStrictEqual([-2, 1, 2, 3, 5, 7])
})
