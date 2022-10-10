export default {
  global: {
    componenteFormativo: 'Inspección de tarjetas electrónicas',
    descripcionCurso:
      'En este componente formativo se tratan conceptos relacionados con el ensamble de tarjetas electrónicas, las normas técnicas que aplican y los procedimientos para el ensamble, buscando proteger la vida y conservar el medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normatividad técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Alcance y aplicabilidad en montaje de tarjetas de circuito impreso',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Procedimientos y criterios de inspección de calidad en ensamble electrónico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Requisitos de aceptabilidad de ensambles eléctricos y electrónicos soldados',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Seguridad física y elementos de protección personal',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Recomendaciones de trabajo con computadores',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Riesgos en ensamble electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Concepto y afectaciones de descargas electroestáticas y sobrecargas eléctricas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Formas de uso y mantenimiento de accesorios ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Características e impacto de la compatibilidad electromagnética',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normativa técnica',
      referencia: 'IPC (2021). IPC <em>International</em>, Inc. Normas IPC.',
      tipo: 'Página <em>web</em>',
      link: 'https://www.ipc.org/',
    },
    {
      tema: 'Seguridad y Salud en el trabajo',
      referencia:
        'Resolución 5018 de 2019. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el trabajo en los Procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Mayo 15, 2021.',
      tipo: 'Texto',
      link: 'https://safetya.co/normatividad/resolucion-5018-de-2019/',
    },
    {
      tema: 'Seguridad y Salud en el trabajo',
      referencia:
        'Ley 1552 de 2012. [Ministerio del Trabajo]. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012.',
      tipo: 'Texto',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1562_2012.html#:~:text=Tiene%20por%20objeto%20mejorar%20las,trabajadores%20en%20todas%20las%20ocupaciones.',
    },
    {
      tema: 'Seguridad y Salud en el trabajo',
      referencia:
        'Resolución 0312 de febrero de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13, 2019.',
      tipo: 'Texto',
      descarga: '/downloads/Res-0312-2019.pdf',
    },
    {
      tema: 'Seguridad y Salud en el trabajo',
      referencia:
        'Mateus Palomino, L. (2016). Aplicación del Sistema de Gestión de la Seguridad y Salud en el trabajo. SENA.',
      tipo: 'Presentación',
      link:
        'https://www.slideshare.net/diegotorres/aplicacin-del-sgsst-aplicacin-del-sistema-de-gestin-de-la-seguridad-y-salud-en-el-trabajo',
    },
  ],
  glosario: [
    {
      termino: 'Amortiguador',
      significado:
        'Dispositivo que sirve para compensar y disminuir el efecto de choques, sacudidas o movimientos bruscos en aparatos mecánicos. (Real Academia Española, 2020)',
    },
    {
      termino: 'Apantallamiento',
      significado:
        'Lámina, barrera u obstáculo que cubre o protege de un agente indeseado.',
    },
    {
      termino: 'Baquelita',
      significado:
        'Resina sintética que tiene mucho uso en la industria, especialmente en la preparación de barnices y lacas y en la fabricación de productos moldeados. (Real Academia Española, 2020)',
    },
    {
      termino: 'Banda A.M.',
      significado:
        'Rango de frecuencias que corresponde a la banda comercial de amplitud modulada, comprende las frecuencias de 535 kHz a 1705 kHz.',
    },
    {
      termino: 'Conductor eléctrico',
      significado:
        'Elemento que permite la circulación de la corriente eléctrica.',
    },
    {
      termino: 'Electromagnetismo',
      significado:
        'Interacción de los campos eléctricos y magnéticos. (Real Academia Española, 2020)',
    },
    {
      termino: 'Electrostática',
      significado:
        'Rama de la física que estudia los sistemas de cuerpos electrizados en equilibrio. (Real Academia Española, 2020)',
    },
    {
      termino: 'HDD',
      significado:
        'Sigla para <em>Hard Disk Drive</em>, (Disco Duro), dispositivo electrónico utilizado para almacenar información en formato binario aprovechando el fenómeno electromagnético.',
    },
    {
      termino: 'Infrarrojo',
      significado:
        'Dicho de la radiación del espectro electromagnético: De mayor longitud de onda que el rojo y de alto poder calorífico. (Real Academia Española, 2020)',
    },
    {
      termino: 'Radiactividad',
      significado:
        'Propiedad de ciertos cuerpos cuyos átomos, al desintegrarse espontáneamente, emiten radiaciones. (Real Academia Española, 2020)',
    },
    {
      termino: 'Rayos X',
      significado:
        'Radiación electromagnética ionizante, invisible para el ojo humano, capaz de atravesar cuerpos. Por ser de una longitud de onda muy corta es capaz de chocar con las células del cuerpo humano y dañarlas.',
    },
    {
      termino: 'Reflectante',
      significado:
        'Dispositivo dotado de muchas facetas que devuelve la luz en múltiples direcciones. (Real Academia Española, 2020)',
    },
    {
      termino: 'Ultravioleta',
      significado:
        'Dicho de una radiación: Que se encuentra entre el extremo violeta del espectro visible y los rayos X, y provoca reacciones químicas de gran repercusión biológica. (Real Academia Española, 2020)',
    },
  ],
  referencias: [
    {
      referencia:
        'Biegelmeier, G. (1986). Efectos de la corriente eléctrica en humanos y ganado. VDE-Verlag. Jorge Valencia Cuesta & Cia. SAS. (s.f.). Bolsas antiestáticas.',
      link: 'https://www.controlestatica.com/bolsas-antiestaticas.',
    },
    {
      referencia:
        'Ministerio del trabajo. (s.f.). Sistema de Gestión de Seguridad y Salud en el Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo',
    },
    {
      referencia:
        'Pallás, R. (2007). Instrumentos electrónicos básicos. Alfaomega.',
    },
    {
      referencia:
        'Real Academia de la Lengua Española. (2020). Diccionario de la lengua española.',
      link: 'https://dle.rae.es/electrost%C3%A1tico',
    },
    {
      referencia:
        'Resolución 0312 de febrero de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13, 2019.',
    },
    {
      referencia:
        'Resolución 5018 de 2019. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el trabajo en los Procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Mayo 15, 2021.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gewin Alfonso Fernández Cáceres',
        cargo: 'Instructor',
        centro: 'Centro Nacional Colombo Alemán - Regional Atlántico',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo <em>front-end</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Botello',
        cargo: 'Validación maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejia Lopez',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
