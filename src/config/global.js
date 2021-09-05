export default {
  global: {
    componenteFormativo: 'Control de calidad en procesos de confección',
    descripcionCurso:
      'Satisfacer las necesidades del cliente es un requerimiento esencial para la construcción o elaboración de cualquier producto, durante el estudio de este tema el aprendiz reconocerá elementos que son importantes para controlar la calidad de confección de prendas de vestir, además de adquirir conocimientos técnicos sobre la elaboración e interpretación de fichas técnicas, insumo primordial para el desarrollo de muestras físicas y unificación de criterios de procesos de producción. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Qué es calidad?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Control de calidad en confección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La ficha técnica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Especificaciones de calidad para elaboración de prendas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Características según línea de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Normas de calidad para materiales e insumos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Documentos de control de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Ficha técnica',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Tabla militar',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Formatos de reporte',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Arias de Valencia, A. (1978). Qué es control de calidad . Servicio Nacional de Aprendizaje (SENA).   ',
      link: 'https://hdl.handle.net/11404/5988',
    },
    {
      referencia: 'Crosby P. (1994). La Calidad es libre. Mc Graw Hill. ',
    },
    {
      referencia:
        'Deming, W. (1989). Calidad, Productividad y Competitividad. Díaz de Santos. ',
    },
    {
      referencia:
        'Ishikawa K. (1994). Introducción al Control de Calidad. Díaz de Santos.  ',
    },
    {
      referencia:
        'Juran, J. y Gryna, F. (1993). Manual de Control de Calidad. Mc Graw Hill. ',
    },
    {
      referencia:
        'Mejía M., M. (1991). Control de calidad total: una manera diferente de orientar la dirección de la empresa . Servicio Nacional de Aprendizaje (SENA).  ',
      link: 'https://hdl.handle.net/11404/3483',
    },
    {
      referencia: 'Pércovich, M. (2009). Estrategia Kaizen. El Cid Editor.  ',
      link:
        'https://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=3181913',
    },
    {
      referencia:
        'Pércovich, M. (2009).  KESS Kaizen + EVA + Seis Sigma. El Cid Editor.  ',
      link:
        'https://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=3179902',
    },
    {
      referencia:
        'Pérez, E. (1990). Control de calidad: generalidades. Servicio Nacional de Aprendizaje (SENA).  ',
      link: 'https://hdl.handle.net/11404/4824',
    },
    {
      referencia:
        'SENA. (1973). Programa de control de calidad. Unidad 1.7. Normalización. SENA. ',
      link: 'https://hdl.handle.net/11404/6667',
    },
    {
      referencia:
        'SENA. (1973). Programa de control de calidad. Unidad 1.9. Aspecto económico de la calidad. SENA. ',
      link: 'https://hdl.handle.net/11404/6669',
    },
    {
      referencia: 'SENA. (1990). Control de calidad en hilos y telas. SENA. ',
      link: 'https://hdl.handle.net/11404/4252',
    },
    {
      referencia:
        'Lean solutions. (2020).  ¿Qué es Six Sigma?. Lean solutions.  ',
      link: 'http://leansolutions.co/conceptos-lean/que-es-six-sigma/',
    },
    {
      referencia:
        'Socconini, L. y Carlo Reato. (2019). Lean Six sigma: sistema de gestión para liderar empresas. Marge Books.  ',
      link:
        'https://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=5885236',
    },
  ],
  glosario: [
    {
      termino: 'Alargamiento',
      significado:
        'Sinónimo del concepto de amplitud, hace referencia al ensanchamiento, la distensión o el alargamiento de algo.',
    },
    {
      termino: 'Cambio dimensional',
      significado:
        'Término genérico para los cambios a lo largo y ancho de una muestra o espécimen. Muestra de tela sometida a condiciones específicas, el cambio usualmente se expresa en porcentaje de la dimensión inicial. ',
    },
    {
      termino: 'Camisa formal',
      significado: 'Camisa diseñada específicamente para usar con corbata.',
    },
    {
      termino: 'Camisa informal',
      significado:
        'Camisa diseñada para uso diferente a las camisas formales y de trabajo.',
    },
    {
      termino: 'Defecto',
      significado:
        'Es una no conformidad en las características requeridas por el cliente o una norma y que causa incumplimiento de un requisito y por tanto genera insatisfacción en el cliente.',
    },
    {
      termino: 'Encogimiento',
      significado:
        'Cambio dimensional resultante de la disminución a lo largo y ancho de un espécimen.',
    },
    {
      termino: 'Insumos',
      significado:
        'Conjunto de materiales utilizados para la confección de prendas.',
    },
    {
      termino: 'ISO',
      significado:
        'Organización Internacional de Estandarización, ubicada en Ginebra, Suiza. Promueve y desarrolla normas para estandarizar productos y servicios. ',
    },
    {
      termino: 'Moldería',
      significado:
        'Conjunto de piezas especificadas por talla que conforman un producto o diseño.',
    },
    {
      termino: 'Muestra',
      significado:
        'Número representativo de prendas del lote de producción, por medio de ella se determina el cumplimiento de los requisitos de calidad de todo el lote de producción.',
    },
    {
      termino: 'Muestra física',
      significado:
        'Prenda que cumple con los requisitos de calidad, es utilizada como guía para la confección o para las actividades de ventas.',
    },
    {
      termino: 'Patrón',
      significado:
        'Formato, plantilla o guía que se usa para cortar distintas piezas que forman una prenda. El patrón reúne estilo y detalle de la prenda y se obtiene de otro de cartón o papel grueso con las referencias de las medidas corporales.',
    },
    {
      termino: 'Patronaje',
      significado:
        'Construcción de un plano o conjunto de planos (piezas) que conforman una prenda que servirá de plantilla para realizar el corte de un diseño establecido; su producto es el patrón guía o base.',
    },
    {
      termino: 'Prenda',
      significado: 'Cada una de las piezas que componen un atuendo de vestir.',
    },
    {
      termino: 'Punto de control crítico',
      significado:
        'Operaciones, fases o procesos que requieren de riguroso control debido a que representan alto riesgo de generar defectos y por tanto incumplir con los requisitos. ',
    },
    {
      termino: 'Requisitos',
      significado:
        'Explícitos (declarados por el cliente), implícitos (necesarios para que cumplan función), legales o reglamentarios (de acuerdo con cumplir leyes), de empresa (según las políticas de la empresa) que se deben cumplir y adaptar en los procesos realizados.',
    },
    {
      termino: 'Tejer',
      significado:
        'Entrelazar hilos o fibras, mecánicamente o a mano, para formar un tejido o hacer un objeto determinado.',
    },
    {
      termino: 'Variables de calidad',
      significado:
        'Cuantificación de las cualidades del producto, por ejemplo: carta de colores de la prenda.',
    },
  ],
  complementario: [
    {
      texto:
        'Carro, R. y González, D. (2012). Muestreo de aceptación. Facultad de Ciencias Económicas y Sociales. Universidad Nacional de Mar de Plata.',
      tipo: 'PDF',
      descarga: '/downloads/13_muestreo_aceptacion.pdf',
    },
    {
      texto:
        'Duque de Serna, F. (1990). Procedimientos para el control de calidad de la confección. Servicio Nacional de Aprendizaje (SENA).',
      tipo: 'PDF',
      descarga: '/downloads/3969_procedimiento_para_el_control_de_calidad.pdf',
    },
    {
      texto:
        'ICONTEC. (2012) GTC 230.  Guía para las buenas prácticas en la confección de prendas de vestir.',
      tipo: 'Norma',
      link:
        'Https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-es&q=fe3878a589e70a025e75351f73493f66&req= ',
    },
    {
      texto:
        'Gutiérrez, E. (2002). Calidad: instrumento capaz de garantizar el éxito en la gestión a largo plazo evolución del significado de calidad. Informador técnico 64. SENA.',
      tipo: 'PDF/Publicación',
      descarga: '/downloads/945-Texto del artículo-2940-1-10-20170908.pdf',
    },
    {
      texto:
        'Jaramillo, J. (1990). Control de calidad en confección. Servicio Nacional de Aprendizaje SENA.',
      tipo: 'PDF/Cartilla',
      descarga: '/downloads/3818_control_de_calidad_en_la_confeccion.pdf',
    },
    {
      texto: 'SENA. (1973). Técnicas de supervisión/Control de calidad. SENA.',
      tipo: 'PDF',
      descarga: '/downloads/tecnicas_de_supervision_control_de_calidad_1_9.pdf',
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
        nombre: 'Flor Angela Montoya Rendón',
        cargo: 'Instructora',
        centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'María Luisa Yepes Sierra',
        cargo: 'Instructora',
        centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Marisol Osorio Beltrán',
        cargo: 'Líder Sennova',
        centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Jhon Fernando Jaramillo Taborda',
        cargo: 'Investigador - Grupo de investigación INAMOD',
        centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisión pedagógica y metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
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
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
