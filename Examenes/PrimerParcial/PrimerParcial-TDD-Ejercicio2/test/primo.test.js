const esPrimo = require('../primo');

test('Numero primo n=7', () => {
    expect(esPrimo(7)).toBe(true);
});

test('Numero no primo n=6', () => {
    expect(esPrimo(6)).toBe(false);
});

test('Numero negativo n=-3', () => {
    expect(esPrimo(-3)).toBe(false);
});

test('Numero grande n=997', () => {
    expect(esPrimo(997)).toBe(true);
});

test('Numero cero n=0', () => {
    expect(esPrimo(0)).toBe(false);
});
