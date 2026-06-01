// Base de datos simulada de docentes y aulas
const datosUniversidad = [
    {
        tipo: "docente",
        nombre: "IBAÑEZ  JACOME SIXTO SANTIAGO",
        materia: "Programación Web",
        aula: "Aula P1",
        edificio: "Edificio de Sistemas",
        horario: "Lunes y Miércoles - 08:00 a 10:00",
        correo: "sixto.ibañez.jacome@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "PRECIADO  RAMIREZ  JOFFRE DANNY",
        materia: "Base de Datos",
        aula: "Aula P2",
        edificio: "Edificio de sistemas",
        horario: "Martes y Jueves - 10:00 a 12:00",
        correo: "joffre.preciado.ramirez@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "RENTERIA VALENCIA NUVIA MARIBEL",
        materia: "Etica",
        aula: "Aula P3",
        edificio: "Edificio de sistemas",
        horario: "Viernes - 14:00 a 17:00",
        correo: "nuvia.renteria.valencia@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "QUÑONEZ  CABEZA BETTY MARIBEL",
        materia: "Administracion de centros de computo",
        aula: "Aula P4",
        edificio: "Edificio desistemas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "betty.quinonez.cabeza@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "ERAZO PORTILLA CARLA MARIUXI",
        materia: "Planificacion estrategica",
        aula: "Aula P5",
        edificio: "Edificio de sistemas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "carla.erazo.portilla@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "QUIÑONEZ QUINTERO JHONNY MAXIMILIANO",
        materia: "Base de datos I",
        aula: "Aula P6",
        edificio: "Edificio de sistemas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "jhonny.quinonez.quintero@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "CASTRO  RODRIGUEZ  ALEX SEGUNDO",
        materia: "Centros de cultura física",
        aula: "Aula P7",
        edificio: "Coliseo",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "alex.castro.rodriguez@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "MORA  OLIVERO ALDO PATRICIO",
        materia: "Gestionde software",
        aula: "Aula P8",
        edificio: "Eificio de sistemas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "aldo.mora.olivero@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "JACOME VELEZ TITO GIMMY",
        materia: "Matematicas I",
        aula: "Aula G1",
        edificio: "Edificio de empresas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "tito.jacome.velez@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "ALCIVAR  SORIA EVELYN EUGENIA",
        materia: "Contabilidad",
        aula: "Aula F1",
        edificio: "Edificio de contabilidad",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "evelyn.alcivar.soria@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "PRADO CHINGA ALBERTO EFRAIN",
        materia: "Matematicas II",
        aula: "Aula G2",
        edificio: "Edificio de empresas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "alberto.prado.chinga@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "SALGADO ORTIZ PATRICIA JANELLA",
        materia: "Proyecto empresarial",
        aula: "Aula P9",
        edificio: "Edificio de sistemas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "patricia.salgado.ortiz@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "MORAN VILLAMARIN EDWIN DANIEL",
        materia: "Integrales",
        aula: "Aula G3",
        edificio: "Edificio de empresas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "edwin.moran.villamarin@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "JARAMILLO RIVAS VIOLETA PETITA",
        materia: "Contabilidad II",
        aula: "Aula G4",
        edificio: "Edificio de contabilidad",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "violeta.jaramillo.rivas@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "PROAÑO GONZALEZ ESTHER ANGELICA",
        materia: "Contabilidad financiera",
        aula: "Aula G5",
        edificio: "Edificio de contabilidad",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "esther.proaño.gonzalez@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "LOPEZ PEREZ PATRICIO JAVIER",
        materia: "Contabilidad gubernamental",
        aula: "Aula G6",
        edificio: "Edificio de contabilidad",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "patricio.lopez.perez@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "GUAMAN CHAVEZ RAMIRO ENRIQUE",
        materia: "Fisica",
        aula: "Aula G7",
        edificio: "Edificio de contabilidad",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "ramiro.guaman.chavez@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "BARBOSA QUINTERO GLENDA MAGALI",
        materia: "Etica profesional",
        aula: "Aula P10",
        edificio: "Edificio de sistemas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "glenda.barbosa.quintero@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "BEDOYA FLORES MIRNA CAROLINA",
        materia: "Derivadas",
        aula: "Aula G8",
        edificio: "Edificio de contabilidad",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "mirna.bedoya.flores@utlvte.edu.ec"
    },
    {
        tipo: "docente",
        nombre: "CHOEZ CALDERON CINDY JOHANA",
        materia: "Inteligencia artificial",
        aula: "Aula P11",
        edificio: "Edificio de sistemas",
        horario: "Miércoles - 13:00 a 15:00",
        correo: "cyndi.choez.calderon@utlvte.edu.ec"
    },
    {
        tipo: "aula",
        nombre: "Laboratorio 1",
        bloque: "A",
        edificio: "Edificio de empresas",
        horario: "Disponible desde 15:00 hasta 18:00",
        responsable: "Departamento de empresas"
    },
    {
        tipo: "aula",
        nombre: "Laboratorio 2",
        bloque: "A",
        edificio: "Edificio de contabilidad",
        horario: "Disponible desde 08:00 hasta 10:00",
        responsable: "Departamento de contabilidad"
    },
    {
        tipo: "aula",
        nombre: "Aula B1",
        bloque: "B",
        edificio: "Edificio de contabilidad",
        horario: "Ocupado desde 08:00 hasta 10:00",
        responsable: "Departamento de contabilidad"
    },
    {
        tipo: "aula",
        nombre: "Aula 305",
        materia: "Base de Datos",
        aula: "Aula 305",
        edificio: "Bloque Académico A",
        horario: "Disponible desde 08:00 hasta 16:00",
        responsable: "Coordinación Académica"
    },
    {
        tipo: "aula",
        nombre: "Laboratorio 102",
        materia: "Redes de Computadoras",
        aula: "Laboratorio 102",
        edificio: "Edificio Tecnológico",
        horario: "Disponible desde 09:00 hasta 17:00",
        responsable: "Área de Redes"
    },
    {
        tipo: "aula",
        nombre: "Aula 110",
        materia: "Ética Profesional",
        aula: "Aula 110",
        edificio: "Bloque Académico B",
        horario: "Disponible desde 07:00 hasta 15:00",
        responsable: "Secretaría Académica"
    }
];

// Captura de elementos del HTML
const inputBusqueda = document.getElementById("inputBusqueda");
const btnBuscar = document.getElementById("btnBuscar");
const resultados = document.getElementById("resultados");
const botonesFiltro = document.querySelectorAll(".filter-btn");
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

let filtroActual = "todos";

// Mostrar todos los resultados al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarResultados(datosUniversidad);
});

// Función para mostrar resultados en pantalla
function mostrarResultados(lista) {
    resultados.innerHTML = "";

    if (lista.length === 0) {
        resultados.innerHTML = `
            <div class="result-card">
                <h3>No se encontraron resultados</h3>
                <p>Intenta buscar con otro nombre, materia, aula o edificio.</p>
            </div>
        `;
        return;
    }

    lista.forEach(item => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("result-card");

        if (item.tipo === "docente") {
            tarjeta.innerHTML = `
                <span class="badge">Docente</span>
                <h3>${item.nombre}</h3>
                <p><strong>Materia:</strong> ${item.materia}</p>
                <p><strong>Aula:</strong> ${item.aula}</p>
                <p><strong>Edificio:</strong> ${item.edificio}</p>
                <p><strong>Horario:</strong> ${item.horario}</p>
                <p><strong>Correo:</strong> ${item.correo}</p>
            `;
        } else {
            tarjeta.innerHTML = `
                <span class="badge">Aula</span>
                <h3>${item.nombre}</h3>
                <p><strong>Materia relacionada:</strong> ${item.materia}</p>
                <p><strong>Ubicación:</strong> ${item.edificio}</p>
                <p><strong>Horario:</strong> ${item.horario}</p>
                <p><strong>Responsable:</strong> ${item.responsable}</p>
            `;
        }

        resultados.appendChild(tarjeta);
    });
}

// Función de búsqueda
function buscarInformacion() {
    const texto = inputBusqueda.value.toLowerCase().trim();

    let resultadosFiltrados = datosUniversidad.filter(item => {
        const coincideTexto =
            item.nombre.toLowerCase().includes(texto) ||
            item.materia.toLowerCase().includes(texto) ||
            item.aula.toLowerCase().includes(texto) ||
            item.edificio.toLowerCase().includes(texto) ||
            item.horario.toLowerCase().includes(texto);

        const coincideFiltro =
            filtroActual === "todos" || item.tipo === filtroActual;

        return coincideTexto && coincideFiltro;
    });

    mostrarResultados(resultadosFiltrados);
}

// Evento del botón buscar
btnBuscar.addEventListener("click", buscarInformacion);

// Buscar al presionar Enter
inputBusqueda.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        buscarInformacion();
    }
});

// Filtros de docentes y aulas
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach(btn => btn.classList.remove("active"));
        boton.classList.add("active");

        filtroActual = boton.getAttribute("data-filter");
        buscarInformacion();
    });
});

// Menú responsive para celular
btnMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Cerrar menú al seleccionar una opción en celular
const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});