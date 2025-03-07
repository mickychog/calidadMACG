const {
    calcularFormacionAcademica,
    calcularActualizacionAcademica,
    calcularExperienciaProfesional,
    calcularProduccionIntelectual,
    calcularTotalPuntos,
    calcularPuntosA
} = require('../src/calculations');

// Pruebas para calcularFormacionAcademica
test('calcularFormacionAcademica - Caso con 1 diplomado', () => {
    expect(calcularFormacionAcademica(1, 0, 0, 0)).toBe(2);
});

test('calcularFormacionAcademica - Caso con 3 diplomados', () => {
    expect(calcularFormacionAcademica(3, 0, 0, 0)).toBe(4); // 2 + 1 + 1 = 4
});

test('calcularFormacionAcademica - Caso con 4 diplomados (máximo 4 puntos)', () => {
    expect(calcularFormacionAcademica(4, 0, 0, 0)).toBe(4);
});

test('calcularFormacionAcademica - Caso con 1 especialidad', () => {
    expect(calcularFormacionAcademica(0, 1, 0, 0)).toBe(4);
});

test('calcularFormacionAcademica - Caso con 2 especialidades', () => {
    expect(calcularFormacionAcademica(0, 2, 0, 0)).toBe(6); // 4 + 2 = 6
});

test('calcularFormacionAcademica - Caso con 4 especialidades (máximo 6 puntos)', () => {
    expect(calcularFormacionAcademica(0, 4, 0, 0)).toBe(6);
});

test('calcularFormacionAcademica - Caso con 1 maestría', () => {
    expect(calcularFormacionAcademica(0, 0, 1, 0)).toBe(8);
});

test('calcularFormacionAcademica - Caso con 2 maestrías', () => {
    expect(calcularFormacionAcademica(0, 0, 2, 0)).toBe(11); // 8 + 3 = 11
});

test('calcularFormacionAcademica - Caso con 4 maestrías (máximo 11 puntos)', () => {
    expect(calcularFormacionAcademica(0, 0, 4, 0)).toBe(11);
});

test('calcularFormacionAcademica - Caso con 1 doctorado', () => {
    expect(calcularFormacionAcademica(0, 0, 0, 1)).toBe(12);
});

test('calcularFormacionAcademica - Caso con 2 doctorados', () => {
    expect(calcularFormacionAcademica(0, 0, 0, 2)).toBe(12);
});

test('calcularFormacionAcademica - Caso con 4 doctorados (máximo 12 puntos)', () => {
    expect(calcularFormacionAcademica(0, 0, 0, 4)).toBe(12);
});

test('calcularFormacionAcademica - Caso combinado: 1 diplomado, 1 especialidad, 1 maestría', () => {
    expect(calcularFormacionAcademica(1, 1, 1, 0)).toBe(12); // Total máximo 12 puntos
});

test('calcularFormacionAcademica - Caso combinado: 1 diplomado, 2 especialidades, 2 maestrías, 1 doctorado', () => {
    expect(calcularFormacionAcademica(1, 2, 2, 1)).toBe(12); // Asegura el límite de 12
});

test('calcularFormacionAcademica - Caso combinado: 3 diplomados, 0 especialidades, 0 maestrías, 1 doctorado', () => {
    expect(calcularFormacionAcademica(3, 0, 0, 1)).toBe(12);
});

test('calcularFormacionAcademica - Caso combinado: 4 diplomados, 0 especialidades, 2 maestrías, 0 doctorados', () => {
    expect(calcularFormacionAcademica(4, 0, 2, 0)).toBe(12);
});

// Pruebas para calcularActualizacionAcademica
test('calcularActualizacionAcademica - Caso con 2 cursos', () => {
    expect(calcularActualizacionAcademica(2)).toBe(1);
});

test('calcularActualizacionAcademica - Caso con 0 cursos', () => {
    expect(calcularActualizacionAcademica(0)).toBe(0);
});

test('calcularActualizacionAcademica - Caso con 14 cursos (máximo 6 puntos)', () => {
    expect(calcularActualizacionAcademica(14)).toBe(6);
});

test('calcularActualizacionAcademica - Caso con 6 cursos (justo el límite para 3 puntos)', () => {
    expect(calcularActualizacionAcademica(6)).toBe(3); // 6 * 0.5 = 3
});

test('calcularActualizacionAcademica - Caso con 1 curso', () => {
    expect(calcularActualizacionAcademica(1)).toBe(0.5); // 1 * 0.5 = 0.5
});

// Pruebas para calcularExperienciaProfesional
test('calcularExperienciaProfesional - Caso con 4 años de antigüedad, 3 años como servidor público y 2 años como docente', () => {
    expect(calcularExperienciaProfesional(4, 3, 2)).toBe(9);
});

test('calcularExperienciaProfesional - Caso con 4 años de antigüedad, 4 años como servidor público y 2 años como docente', () => {
    expect(calcularExperienciaProfesional(4, 4, 2)).toBe(10);
});

test('calcularExperienciaProfesional - Caso con 5 años de antigüedad, 5 años como servidor público y 3 años como docente (máximo 10 puntos)', () => {
    expect(calcularExperienciaProfesional(5, 5, 3)).toBe(10);
});

test('calcularExperienciaProfesional - Caso con 0 años en todo', () => {
    expect(calcularExperienciaProfesional(0, 0, 0)).toBe(0);
});

test('calcularExperienciaProfesional - Caso con 2 años de antigüedad, 1 año como servidor público y 0 años como docente', () => {
    expect(calcularExperienciaProfesional(2, 1, 0)).toBe(3); // 2 + 1 + 0 = 3
});

// Pruebas para calcularProduccionIntelectual
test('calcularProduccionIntelectual - Caso con 1 artículo', () => {
    expect(calcularProduccionIntelectual(1)).toBe(1);
});

test('calcularProduccionIntelectual - Caso con 0 artículos', () => {
    expect(calcularProduccionIntelectual(0)).toBe(0);
});

test('calcularProduccionIntelectual - Caso con 4 artículos (máximo 2 puntos)', () => {
    expect(calcularProduccionIntelectual(4)).toBe(2);
});

test('calcularProduccionIntelectual - Caso con 2 artículos', () => {
    expect(calcularProduccionIntelectual(2)).toBe(2); // 2 * 1 = 2
});

test('calcularProduccionIntelectual - Caso con 3 artículos (máximo 2 puntos)', () => {
    expect(calcularProduccionIntelectual(3)).toBe(2); // Máximo 2 puntos
});

// Pruebas para calcularTotalPuntos
test('calcularTotalPuntos - Caso con 13, 6, 10, 2', () => {
    expect(calcularTotalPuntos(13, 6, 10, 2)).toBe(30);
});

test('calcularTotalPuntos - Caso con 12, 7, 10, 2', () => {
    expect(calcularTotalPuntos(12, 7, 10, 2)).toBe(30);
});

test('calcularTotalPuntos - Caso con 12, 6, 11, 2', () => {
    expect(calcularTotalPuntos(12, 6, 11, 2)).toBe(30);
});

test('calcularTotalPuntos - Caso con 12, 6, 10, 4', () => {
    expect(calcularTotalPuntos(12, 6, 10, 4)).toBe(30);
});

test('calcularTotalPuntos - Caso con 13, 7, 11, 4', () => {
    expect(calcularTotalPuntos(13, 7, 11, 4)).toBe(30);
});

test('calcularTotalPuntos - Caso con 10, 5, 10, 3', () => {
    expect(calcularTotalPuntos(10, 5, 10, 3)).toBe(28);
});

test('calcularTotalPuntos - Caso con 8, 6, 8, 4', () => {
    expect(calcularTotalPuntos(8, 6, 8, 4)).toBe(26);
});

test('calcularPuntosA - Caso con 1 doctorado', () => {
    expect(calcularPuntosA(3, 0, 0, 1)).toEqual([0, 0, 0, 12]);
});

test('calcularPuntosA - Caso con 4 diplomados y 2 maestrías', () => {
    expect(calcularPuntosA(4, 0, 2, 0)).toEqual([1, 0, 11, 0]); // Máximo 12 puntos con 11 en maestrías y 1 en diplomados
});

test('calcularPuntosA - Caso con 2 diplomados, 2 especialidades y 1 maestría', () => {
    expect(calcularPuntosA(2, 2, 1, 0)).toEqual([0, 4, 8, 0]); // 8 puntos en maestrías, 4 en especialidades
});

test('calcularPuntosA - Caso con 2 diplomados, 2 especialidades y 2 maestrías', () => {
    expect(calcularPuntosA(2, 2, 2, 0)).toEqual([0, 1, 11, 0]); // Máximo 12 puntos con 11 en maestrías y 1 en especialidades
});

test('calcularPuntosA - Caso con 3 diplomados y 3 maestrías', () => {
    expect(calcularPuntosA(3, 0, 3, 0)).toEqual([1, 0, 11, 0]); // Máximo 12 puntos con 11 en maestrías y 1 en diplomados
});

test('calcularPuntosA - Caso con 2 especialidades y 2 maestrías', () => {
    expect(calcularPuntosA(0, 2, 2, 0)).toEqual([0, 1, 11, 0]); // Máximo 12 puntos con 11 en maestrías y 1 en especialidades
});