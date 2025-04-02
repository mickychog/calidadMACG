const areaCirculo = require('../circulo');

test('Calcula el area con radio positivo r=5', () => {
    expect(areaCirculo(5)).toBeCloseTo(78.5398, 4);
});

test('Calcula el area con radio cero r=0', () => {
    expect(areaCirculo(0)).toBe(0);
});


