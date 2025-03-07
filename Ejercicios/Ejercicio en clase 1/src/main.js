
function actualizarPuntajes() {
    // Obtener valores de los inputs
    const diplomados = parseInt(document.getElementById('diplomados').value) || 0;
    const especialidades = parseInt(document.getElementById('especialidades').value) || 0;
    const maestrias = parseInt(document.getElementById('maestrias').value) || 0;
    const doctorados = parseInt(document.getElementById('doctorados').value) || 0;
    const cursos = parseInt(document.getElementById('cursos').value) || 0;
    const antiguedad = parseInt(document.getElementById('antiguedad').value) || 0;
    const servidorPublico = parseInt(document.getElementById('servidorPublico').value) || 0;
    const docente = parseInt(document.getElementById('docente').value) || 0;
    const articulos = parseInt(document.getElementById('articulos').value) || 0;

    // Usar la función calcularPuntosA para obtener los puntajes de la sección A
    const [puntajeDiplomados, puntajeEspecialidades, puntajeMaestrias, puntajeDoctorados] = calcularPuntosA(diplomados, especialidades, maestrias, doctorados);

    // Calcular puntajes
    // const puntajeDiplomados = calcularFormacionAcademica(diplomados, 0, 0, 0);
    // const puntajeEspecialidades = calcularFormacionAcademica(0, especialidades, 0, 0);
    // const puntajeMaestrias = calcularFormacionAcademica(0, 0, maestrias, 0);
    // const puntajeDoctorados = calcularFormacionAcademica(0, 0, 0, doctorados);
    const puntajeCursos = calcularActualizacionAcademica(cursos);
    const puntajeAntiguedad = calcularExperienciaProfesional(antiguedad, 0, 0);
    const puntajeServidorPublico = calcularExperienciaProfesional(0, servidorPublico, 0);
    const puntajeDocente = calcularExperienciaProfesional(0, 0, docente);
    const puntajeArticulos = calcularProduccionIntelectual(articulos);

    // Actualizar los campos de puntaje en la tabla
    document.getElementById('puntaje-diplomados').textContent = puntajeDiplomados;
    document.getElementById('puntaje-especialidades').textContent = puntajeEspecialidades;
    document.getElementById('puntaje-maestrias').textContent = puntajeMaestrias;
    document.getElementById('puntaje-doctorados').textContent = puntajeDoctorados;
    document.getElementById('puntaje-cursos').textContent = puntajeCursos;
    document.getElementById('puntaje-antiguedad').textContent = puntajeAntiguedad;
    document.getElementById('puntaje-servidorPublico').textContent = puntajeServidorPublico;
    document.getElementById('puntaje-docente').textContent = puntajeDocente;
    document.getElementById('puntaje-articulos').textContent = puntajeArticulos;

    // Calcular subtotales
    const formacionAcademica = calcularFormacionAcademica(diplomados, especialidades, maestrias, doctorados);
    const actualizacionAcademica = calcularActualizacionAcademica(cursos);
    const experienciaProfesional = calcularExperienciaProfesional(antiguedad, servidorPublico, docente);
    const produccionIntelectual = calcularProduccionIntelectual(articulos);

    // Actualizar subtotales
    document.getElementById('subtotal-formacion-academica').value = formacionAcademica;
    document.getElementById('subtotal-actualizacion-academica').value = actualizacionAcademica;
    document.getElementById('subtotal-experiencia-profesional').value = experienciaProfesional;
    document.getElementById('subtotal-produccion-intelectual').value = produccionIntelectual;

    // Actualizar total
    const totalPuntos = calcularTotalPuntos(formacionAcademica, actualizacionAcademica, experienciaProfesional, produccionIntelectual);
    document.getElementById('total-puntos').value = totalPuntos;
}

document.getElementById('save-btn').addEventListener('click', function () {
    saveAsPDF();
});

document.getElementById('print-btn').addEventListener('click', function () {
    window.print();
});

document.getElementById('close-btn').addEventListener('click', function () {
    window.close();
});

// Agregar event listeners a cada input
const inputs = document.querySelectorAll('#calculation-form input[type="number"]');
inputs.forEach(input => {
    input.addEventListener('input', actualizarPuntajes);
});

function saveAsPDF() {
    const { jsPDF } = window.jspdf;
    const formElement = document.getElementById('calculation-form');
    const buttons = document.querySelector('.form-actions');

    buttons.style.display = 'none';

    html2canvas(formElement, {
        scale: 0.8, // Ajusta la escala para que el contenido quepa en una sola página
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgWidth = 210; // Ancho en mm para A4
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save("Formulario_Evaluacion.pdf");

        // Mostrar botones nuevamente
        buttons.style.display = 'flex';
    }).catch(err => {
        console.error('Error capturando la pantalla: ', err);
        buttons.style.display = 'flex';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('expanding-textarea');

    const adjustHeight = () => {
        textarea.style.height = 'auto'; // Resetea la altura
        textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta la altura
    };

    textarea.addEventListener('input', adjustHeight);

    // Inicializar altura
    adjustHeight();
});
