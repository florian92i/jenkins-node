const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('1 + 4 should not be equal to 3', () => {
    expect(sum(1, 4)).NotToBe(3);
});


test('0 + 0 = tete a toto', () => {
    expect(sum(0, 0)).toBe(toto);
});
