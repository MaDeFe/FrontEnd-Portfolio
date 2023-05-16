export class Cv {
    constructor(
        public id: number,
        public categoria: string,
        public anio_inicio: number,
        public anio_final: number,
        public titulo: string,
        public subtitulo: string,
        public descripcion: string
    ) {}
}

export var cvs: Cv[] = [
    {
        id: 1,
        categoria: 'educacion',
        anio_inicio: 2022,
        anio_final: 2023,
        titulo: 'Full Stack Developer Jr',
        subtitulo: 'Yo Programo - Argentina programa 4.0',
        descripcion: '<p>El programa del Trayecto está diseñado para proporcionar a los estudiantes la comprensión de los lenguajes de programación y las herramientas necesarias para construir aplicaciones web completas, desde la interfaz de usuario hasta la base de datos.</p>'
    },
    {
        id: 2,
        categoria: 'educacion',
        anio_inicio: 2016,
        anio_final: 2017,
        titulo: 'Masajista Profesional',
        subtitulo: 'Centro Médico Escuela - CABA - Bs As',
        descripcion: '<p>Curso de 9 meses de duración, en el cual aprendí técnicas de manipulación de los músculos, para ayudar a mis pacientes a tener una mejor calidad de vida. Aunado con conocimientos de Digitopuntura, Reiki y otras técnicas enfocadas en el bienestar.</p>'
    },
    {
        id: 3,
        categoria: 'laboral',
        anio_inicio: 2021,
        anio_final: 2023,
        titulo: 'La Maruja',
        subtitulo: 'El Durazno (Cba) / CABA (Bs As) / Alta Gracia (Cba)',
        descripcion: `
                    <ul>
                        <li>Emprendimiento familiar de elaboración de budines artesanales.</li>
                        <li>Desarrollo del proyecto desde el inicio a la actualidad.</li>
                        <li>Preparación, venta minorista y mayorista, organización de delivery, tareas administrativas, supervisión de colaboradores.</li>
                    </ul>
                    `
    },
    {
        id: 4,
        categoria: 'laboral',
        anio_inicio: 2018,
        anio_final: 2020,
        titulo: 'Parador El Durazno',
        subtitulo: 'El Durazno, Calamuchita, Córdoba',
        descripcion: `
                <ul>
                    <li>He realizado numerosos roles en el espacio, como ser ayudante de cocina, camarera, cajera, encargada.</li>
                    <li>También llevé a cabo mejoras en lo relacionado con la administración, registro de movimientos, horarios de empleades.</li>
                    <li>Además algunas tareas de mantenimiento, mejoras, ampliación, parquización del espacio.</li>
                    <li>Llegué a tener a cargo 3 personas, ocupándome de la organización y capacitación.</li>
                </ul>
      `
    },
]