const calcularFormacionAcademica = (diplomados, especialidades, maestrias, doctorados) => {
    let puntaje = 0;
    if (diplomados > 0) {
        puntaje += 2;
    }
    if (diplomados > 1) {
        const diplomadosAdicionales = diplomados - 1;
        if (diplomadosAdicionales <= 2) {
            puntaje += diplomadosAdicionales;
        } else {
            puntaje += 2;
        }
    }
    if (especialidades > 0) {
        puntaje += 4;
    }
    if (especialidades > 1) {
        const especialidadesAdicionales = especialidades - 1;
        if (especialidadesAdicionales <= 2) {
            puntaje += 2;
        } else {
            puntaje += 2;
        }
    }
    if (maestrias > 0) {
        puntaje += 8;
    }
    if (maestrias > 1) {
        const maestriasAdicionales = maestrias - 1;
        if (maestriasAdicionales <= 2) {
            puntaje += 3;
        } else {
            puntaje += 3;
        }
    }
    if (doctorados > 0) {
        puntaje = 12;
    }

    // Limitar el puntaje máximo total a 12
    if (puntaje > 12) {
        return 12;
    } else {
        return puntaje;
    }
};

const calcularActualizacionAcademica = (cursos) => {
    let valorLimitado = cursos;
    if (valorLimitado > 12) {
        valorLimitado = 12;
    }
    return valorLimitado * 0.5;
};

const calcularExperienciaProfesional = (antiguedad, servidorPublico, docente) => {
    let puntaje = 0;

    if (antiguedad > 4) {
        puntaje += 4;
    } else {
        puntaje += antiguedad;
    }
    if (servidorPublico > 4) {
        puntaje += 4;
    } else {
        puntaje += servidorPublico;
    }
    if (docente > 0) {
        puntaje += 2;
    }

    return puntaje;
};
const calcularProduccionIntelectual = (articulos) => {
    let puntaje = 0;

    if (articulos > 2) {
        puntaje = 2;
    } else {
        puntaje = articulos;
    }

    return puntaje * 1;
};

function calcularTotalPuntos(formacionAcademica, actualizacionAcademica, experienciaProfesional, produccionIntelectual) {
    const totalPuntos = formacionAcademica + actualizacionAcademica + experienciaProfesional + produccionIntelectual;

    if (totalPuntos > 30) {
        return 30;
    } else {
        return totalPuntos;
    }
}
const calcularPuntosA = (diplomados, especialidades, maestrias, doctorados) => {
    let puntos = [0, 0, 0, 0]; // [diplomados, especialidades, maestrias, doctorados]
    let totalPuntos = 0;

    if (doctorados > 0) {
        puntos[3] = Math.min(12, 12);
        totalPuntos += puntos[3];
    }

    if (totalPuntos < 12 && maestrias > 0) {
        puntos[2] = Math.min(8 + Math.min(3 * (maestrias - 1), 3), 12 - totalPuntos);
        totalPuntos += puntos[2];
    }

    if (totalPuntos < 12 && especialidades > 0) {
        puntos[1] = Math.min(4 + Math.min(2 * (especialidades - 1), 2), 12 - totalPuntos);
        totalPuntos += puntos[1];
    }

    if (totalPuntos < 12 && diplomados > 0) {
        puntos[0] = Math.min(2 + Math.min(diplomados - 1, 2), 12 - totalPuntos);
        totalPuntos += puntos[0];
    }

    return puntos;
};



module.exports = {
    calcularFormacionAcademica,
    calcularActualizacionAcademica,
    calcularExperienciaProfesional,
    calcularProduccionIntelectual,
    calcularTotalPuntos,
    calcularPuntosA
};