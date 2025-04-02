const areaCirculo = require('../circulo');

test('Calcula el area con radio positivo r=5', () => {
    expect(areaCirculo(5)).toBeCloseTo(78.5398, 4);
});

