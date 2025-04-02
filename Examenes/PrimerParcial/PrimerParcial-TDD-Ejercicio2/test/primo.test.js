const esPrimo = require('../primo');

test('Numero primo n=7', () => {
    expect(esPrimo(7)).toBe(true);
});

test('Numero no primo n=6', () => {
    expect(esPrimo(6)).toBe(false);
});


