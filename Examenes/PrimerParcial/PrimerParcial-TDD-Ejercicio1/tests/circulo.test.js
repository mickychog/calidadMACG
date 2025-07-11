const areaCirculo = require('../circulo');

test('Calcula el area con radio positivo r=5', () => {
    expect(areaCirculo(5)).toBeCloseTo(78.5398, 4);
});

test('Calcula el area con radio cero r=0', () => {
    expect(areaCirculo(0)).toBe(0);
});

test('Devuelve error con radio negativo r=-3', () => {
    expect(areaCirculo(-3)).toBe('Radio no puede ser negativo');
});

test('Calcula el area con radio grande r=1000', () => {
    expect(areaCirculo(1000)).toBeCloseTo(3141592.6536, 4);
});

test('Calcula el area con radio decimal r=3.5', () => {
    expect(areaCirculo(3.5)).toBeCloseTo(38.4845, 4);
});
