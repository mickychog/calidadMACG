function areaCirculo(r) {
    if (r < 0) {
        return 'Radio no puede ser negativo';
    }
    return Math.PI * r * r;
}

module.exports = areaCirculo;

