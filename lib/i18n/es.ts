/**
 * Diccionario ESPAÑOL — fuente de verdad de todo el contenido del sitio.
 * El diccionario inglés (en.ts) replica exactamente esta estructura.
 */

export const es = {
  meta: {
    homeTitle: "1989 Arquitectura | Arquitectura e inversión con valor — Costa Rica",
    homeDescription:
      "Firma especializada en el desarrollo estratégico de proyectos inmobiliarios en Costa Rica. Analizamos, planificamos, diseñamos y posicionamos proyectos para convertir propiedades en activos con valor a largo plazo.",
  },

  common: {
    skipToContent: "Saltar al contenido",
    claim: {
      part1: "Descubrimos el potencial.",
      part2: "Diseñamos la estrategia.",
      part3: "Creamos valor.",
    },
    scheduleMeeting: "Agendar una reunión estratégica",
    discover: "Descubrir",
  },

  nav: {
    home: "Inicio",
    newProject: "Proyecto Nuevo",
    builtProject: "Proyecto Construido",
    strategy: "Estrategia 19.89",
    disciplines: "Disciplinas",
    portfolio: "Portafolio",
    contact: "Contacto",
    cta: "Agendar reunión",
    logoAria: "19.89 Arquitectura — Inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuLabel: "Menú de navegación",
    mainNavLabel: "Principal",
    langSwitchLabel: "Idioma",
  },

  footer: {
    descriptor: "Estudio de Arquitectura — Costa Rica",
    services: "Servicios",
    studio: "Estudio",
    contact: "Contacto",
    tagline: "Arquitectura e inversión con valor",
    servicesLabel: "Servicios",
    studioLabel: "Estudio",
  },

  categories: {
    arquitectura: "Arquitectura",
    iluminacion: "Iluminación",
  },

  home: {
    heroEyebrow: "Estudio de arquitectura — Costa Rica",
    heroTitle: "Arquitectura e inversión con valor.",
    heroSubtitle:
      "Desarrollamos, transformamos y posicionamos proyectos inmobiliarios con estrategia, diseño y visión de largo plazo.",
    pathsEyebrow: "Dos caminos para crear valor",
    pathsTitle:
      "Cada proyecto está en un momento distinto. Por eso trabajamos en dos rutas claras.",
    path1Tag: "CAMINO 01",
    path1Title: "Proyecto Nuevo",
    path1Tagline: "La mejor inversión comienza con la propiedad correcta.",
    path1Description:
      "Para quienes quieren iniciar un proyecto inmobiliario con claridad desde las primeras decisiones: selección del activo, estrategia, diseño, desarrollo, identidad y posicionamiento.",
    path1Link: "Ver proceso",
    path2Tag: "CAMINO 02",
    path2Title: "Proyecto Construido",
    path2Tagline: "Medimos primero. Invertimos después.",
    path2Description:
      "Para quienes ya tienen una propiedad o proyecto en funcionamiento y quieren identificar oportunidades de mejora, priorizar inversiones y aumentar su valor.",
    path2Link: "Ver diagnóstico",
    strategyEyebrow: "Estrategia 19.89",
    strategyTitle: "Una metodología para tomar mejores decisiones.",
    strategyText:
      "La Estrategia 19.89 es una metodología desarrollada para acompañar proyectos residenciales, comerciales y hoteleros desde sus primeras etapas hasta su consolidación. Su objetivo es ayudar a propietarios e inversionistas a tomar mejores decisiones, establecer prioridades y desarrollar proyectos capaces de diferenciarse y generar valor a largo plazo.",
    strategyLink: "Conocer la metodología",
    processEyebrow: "Del análisis a la acción",
    processTitle: "Un proceso que ordena las decisiones antes de invertir.",
    disciplinesEyebrow: "Disciplinas",
    disciplinesTitle: "Disciplinas bajo una misma visión.",
    disciplinesNote:
      "No son servicios aislados: son herramientas que se integran dentro de la estrategia según las necesidades de cada proyecto.",
    disciplinesLink: "Ver todas las disciplinas",
    portfolioEyebrow: "Portafolio destacado",
    architectureLabel: "Arquitectura",
    lightingLabel: "Iluminación",
    seeFullPortfolio: "Ver portafolio completo",
  },

  processSteps: [
    { number: "01", title: "Comprendemos", description: "Escuchamos los objetivos y entendemos el punto de partida del proyecto." },
    { number: "02", title: "Diagnosticamos", description: "Evaluamos el estado actual: fortalezas, riesgos y oportunidades." },
    { number: "03", title: "Priorizamos", description: "Ordenamos las decisiones según su impacto en el valor." },
    { number: "04", title: "Diseñamos", description: "Traducimos la estrategia en espacios, experiencia e identidad." },
    { number: "05", title: "Desarrollamos", description: "Ejecutamos las intervenciones con criterio y supervisión." },
    { number: "06", title: "Posicionamos", description: "Comunicamos el proyecto para que el mercado lo conozca." },
    { number: "07", title: "Evolucionamos", description: "Acompañamos el crecimiento con visión de largo plazo." },
  ],

  homeDisciplines: [
    { name: "Asesoría de inversión", description: "Selección de activos y diagnóstico estratégico del punto de partida." },
    { name: "Análisis financiero estratégico", description: "Orienta la inversión hacia donde existe mayor potencial de valor." },
    { name: "Arquitectura", description: "Diseño, anteproyecto, remodelaciones y supervisión." },
    { name: "Diseño de iluminación", description: "Atmósferas, criterios lumínicos y selección de luminarias." },
    { name: "Diseño de interiores", description: "Narrativa espacial, materiales, acabados y curaduría." },
    { name: "Equipamiento y ambientación", description: "Curaduría de piezas, styling y ambientación." },
    { name: "Protección de identidad", description: "Protección de marca, identidad visual y posicionamiento." },
    { name: "Fotografía profesional", description: "Fotografía arquitectónica, hotelera y dirección visual." },
    { name: "Marketing digital", description: "Estrategia de comunicación, contenido y campañas." },
    { name: "Automatización y Movilidad", description: "Automatización, eficiencia y experiencia de uso." },
  ],

  stageLabels: {
    asesoria: "Etapa 1 · Asesoría de inversión",
    desarrollo: "Etapa 2 · Desarrollo del proyecto",
    identidad: "Etapa 3 · Identidad y posicionamiento",
    tecnologia: "Etapa 4 · Automatización y Movilidad",
  },

  // Disciplinas estratégicas. Selección de activos, Análisis financiero y
  // Arquitectura pertenecen únicamente al Proyecto Nuevo; el resto es
  // compartido por ambos caminos.
  pathTags: {
    both: "Proyecto Nuevo · Proyecto Construido",
    newOnly: "Solo Proyecto Nuevo",
  },
  disciplines: [
    { slug: "seleccion-de-activos", name: "Selección de activos", tagline: "La mejor inversión comienza eligiendo bien.", stage: "asesoria", href: "/proyecto-desde-cero#etapa-1", newOnly: true },
    { slug: "diagnostico-estrategico", name: "Diagnóstico estratégico", tagline: "Medimos primero. Invertimos después.", stage: "asesoria", href: "/proyecto-ya-construido", newOnly: false },
    { slug: "analisis-financiero", name: "Análisis financiero estratégico", tagline: "Invertir mejor comienza por comprender el potencial del proyecto.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: true },
    { slug: "arquitectura", name: "Arquitectura", tagline: "Diseño con fundamento estratégico, del anteproyecto a la obra.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: true },
    { slug: "diseno-de-iluminacion", name: "Diseño de iluminación", tagline: "Atmósferas que transforman la experiencia del espacio.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: false },
    { slug: "diseno-de-interiores", name: "Diseño de interiores", tagline: "Narrativa espacial, materiales y curaduría con intención.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: false },
    { slug: "equipamiento-y-ambientacion", name: "Equipamiento y ambientación", tagline: "Piezas y ambientación que completan la experiencia.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: false },
    { slug: "proteccion-de-identidad", name: "Protección de identidad", tagline: "Una marca protegida es un activo que crece.", stage: "identidad", href: "/proyecto-desde-cero#etapa-3", newOnly: false },
    { slug: "fotografia-profesional", name: "Fotografía profesional", tagline: "El proyecto merece verse como lo que es.", stage: "identidad", href: "/proyecto-desde-cero#etapa-3", newOnly: false },
    { slug: "marketing-digital", name: "Marketing digital", tagline: "Un gran proyecto necesita ser visible.", stage: "identidad", href: "/proyecto-desde-cero#etapa-3", newOnly: false },
    { slug: "automatizacion-y-movilidad", name: "Automatización y Movilidad", tagline: "Innovación que simplifica la operación y aporta valor.", stage: "tecnologia", href: "/proyecto-desde-cero#etapa-4", newOnly: false },
  ],

  fromZero: {
    metaTitle: "Proyecto Nuevo — La mejor inversión comienza con la propiedad correcta",
    metaDescription:
      "Un camino estratégico para iniciar proyectos inmobiliarios con claridad, criterio y visión de largo plazo: asesoría de inversión, desarrollo, identidad, automatización y movilidad.",
    heroEyebrow: "Proyecto Nuevo",
    heroTitle: "La mejor inversión comienza con la propiedad correcta.",
    heroSubtitle:
      "Un camino estratégico para iniciar proyectos inmobiliarios con claridad, criterio y visión de largo plazo.",
    introEyebrow: "El punto de partida",
    introText:
      "Las decisiones más importantes de un proyecto suelen tomarse antes del primer plano: elegir una propiedad, definir el concepto, ordenar la inversión y entender cómo el proyecto llegará al mercado. Sin una estrategia clara, pueden surgir inversiones de bajo impacto, oportunidades desaprovechadas y proyectos que no alcanzan su verdadero potencial.",
    stage1Eyebrow: "Etapa 1 · Asesoría de inversión",
    stage1Title: "Antes de diseñar, evaluamos el punto de partida.",
    stage1Text:
      "Esta etapa permite entender si el cliente ya cuenta con una propiedad o si necesita apoyo para seleccionar el activo correcto.",
    assetSelection: {
      option: "Opción A · Aún no existe una propiedad",
      title: "Selección de activos",
      description:
        "Evaluamos oportunidades alineadas con los objetivos, presupuesto y visión del proyecto para facilitar la toma de decisiones antes de invertir.",
      includesLabel: "Qué incluye",
      bullets: [
        "Comprender el perfil de inversión.",
        "Identificar oportunidades alineadas con el proyecto.",
        "Evaluar ubicación, contexto y potencial de desarrollo.",
        "Identificar riesgos, limitaciones y oportunidades.",
        "Presentar recomendaciones estratégicas.",
      ],
      deliverablesLabel: "Entregables",
      deliverables: [
        "Informe ejecutivo.",
        "Evaluación de oportunidades analizadas.",
        "Recomendaciones para la toma de decisiones.",
      ],
      feeLabel: "Honorarios",
      feeNote:
        "Se detallan en la propuesta según el alcance. En caso de continuar el desarrollo del proyecto con 19.89 Arquitectura, podrán reconocerse parcial o totalmente dentro del contrato integral, según condiciones acordadas.",
    },
    diagnosis: {
      option: "Opción B · Ya existe una propiedad",
      title: "Diagnóstico estratégico",
      description:
        "Cuando el cliente ya cuenta con una propiedad, pasamos al análisis estratégico del proyecto para identificar oportunidades, prioridades y ruta de desarrollo.",
      link: "Ver diagnóstico estratégico",
    },
    stage2Eyebrow: "Etapa 2 · Desarrollo del proyecto",
    stage2Title: "La estrategia se convierte en proyecto.",
    stage2Text:
      "Con una estrategia definida y una hoja de ruta clara, comienza la etapa de desarrollo. Cada disciplina se implementa según las necesidades del proyecto y las oportunidades identificadas durante el análisis.",
    developmentDisciplines: [
      "Análisis financiero estratégico",
      "Arquitectura",
      "Diseño de iluminación",
      "Diseño de interiores",
      "Equipamiento y ambientación",
    ],
    financial: {
      label: "Análisis financiero estratégico",
      title: "Invertir mejor comienza por comprender el potencial del proyecto.",
      description:
        "Permite orientar las inversiones, establecer prioridades y evaluar dónde existen mayores oportunidades para generar valor.",
      benefitsLabel: "Beneficios",
      benefits: [
        "Mayor claridad para invertir.",
        "Priorización de recursos.",
        "Mejor toma de decisiones.",
      ],
      note: "Análisis consultivo orientado a encontrar la rentabilidad del proyecto. Incluido dentro del servicio de anteproyecto.",
    },
    stage3Eyebrow: "Etapa 3 · Identidad y posicionamiento",
    stage3Title: "Un gran proyecto merece una identidad capaz de comunicar su valor.",
    stage3Text:
      "Una vez definida la estrategia y desarrolladas las intervenciones físicas, comienza una nueva etapa: construir la identidad, la narrativa y la presencia del proyecto. En la Estrategia 19.89, la protección de identidad, la fotografía y el marketing digital no se entienden como acciones independientes. Son herramientas que permiten comunicar, posicionar y fortalecer todo aquello que ya ha sido construido.",
    identityDisciplines: [
      "Protección de identidad",
      "Fotografía profesional",
      "Marketing digital",
    ],
    marketing: {
      label: "Marketing digital",
      intro:
        "Un gran proyecto necesita una estrategia capaz de hacerlo visible. No basta con crear un excelente espacio; el mercado necesita conocerlo.",
      scopeLabel: "Alcances",
      scope: [
        "Estrategia de comunicación digital.",
        "Planificación de contenido.",
        "Posicionamiento de marca.",
        "Gestión de redes sociales.",
        "Campañas de comunicación digital.",
        "Análisis y optimización estratégica.",
      ],
      packageLabel: "Paquete",
      includesLabel: "Incluye",
      pricingNote:
        "La inversión de cada paquete se detalla en la propuesta, según las necesidades y la etapa del proyecto.",
      travelNote:
        "Los traslados dentro de la GAM están incluidos. Para proyectos fuera de esta zona, los costos de desplazamiento se cotizarán por separado.",
    },
    packages: [
      {
        name: "Start",
        positioning: "Pensado para proyectos que inician su presencia digital.",
        includes: [
          "Reunión creativa inicial.",
          "Estrategia básica de contenido.",
          "1 sesión de fotografía profesional.",
          "2 reels editados.",
          "Banco de imágenes editadas.",
          "Contenido listo para publicar.",
        ],
        featured: false,
      },
      {
        name: "Growth",
        positioning: "Diseñado para proyectos que buscan consolidar su presencia.",
        includes: [
          "Estrategia básica de contenido.",
          "Dirección creativa.",
          "1 sesión de fotografía profesional.",
          "5 reels editados.",
          "Banco de fotografías profesionales.",
          "Guía de comunicación visual.",
          "Contenido listo para publicar.",
        ],
        featured: true,
      },
      {
        name: "Signature",
        positioning: "La solución integral de comunicación.",
        includes: [
          "Estrategia de marca.",
          "Dirección creativa integral.",
          "Producción audiovisual premium.",
          "Fotografía profesional.",
          "Video corporativo o promocional.",
          "Reels para campañas.",
          "Toma aérea con drone.",
          "Biblioteca completa de imágenes y videos para 1 a 3 meses.",
        ],
        featured: false,
      },
    ],
    stage4Eyebrow: "Etapa 4 · Automatización y Movilidad",
    stage4Title:
      "Innovación que mejora la experiencia, simplifica la operación y aporta valor al proyecto.",
    stage4Text:
      "Las mejores soluciones tecnológicas son aquellas que pasan desapercibidas. No buscan añadir complejidad, sino hacer que cada espacio funcione de forma más eficiente, cómoda e intuitiva para quienes lo utilizan.",
    stage4EvaluationLabel: "Qué evaluamos",
    stage4Evaluation: [
      "Automatización y control inteligente.",
      "Movilidad eléctrica.",
      "Tecnologías orientadas al confort y la eficiencia.",
      "Soluciones para optimizar la operación del proyecto.",
      "Oportunidades de innovación y diferenciación.",
    ],
    stage4BenefitsLabel: "Beneficios",
    stage4Benefits: [
      "Mayor comodidad para los usuarios.",
      "Operación más eficiente.",
      "Mejor experiencia de uso.",
      "Incremento del valor percibido.",
      "Proyectos preparados para las necesidades del futuro.",
    ],
    stage4Result:
      "La tecnología deja de ser un complemento para convertirse en una herramienta que simplifica el día a día, mejora la experiencia de las personas y fortalece el valor del proyecto a largo plazo.",
    closingEyebrow: "Del análisis a la acción",
    closingText:
      "Cada recomendación busca orientar los recursos hacia aquellas acciones con mayor potencial de impacto y generación de valor. La contratación puede realizarse de forma integral o por etapas, según las prioridades y objetivos definidos.",
    ctaTitle: "La mejor inversión comienza con la propiedad correcta.",
    ctaButton: "Quiero desarrollar un proyecto nuevo",
  },

  built: {
    metaTitle: "Proyecto Construido — Diagnóstico Estratégico del Proyecto",
    metaDescription:
      "Consultoría estratégica para comprender el estado actual de una propiedad, identificar oportunidades de mejora y orientar futuras decisiones de inversión.",
    heroEyebrow: "Proyecto Construido",
    heroTitle: "Medimos primero. Invertimos después.",
    heroSubtitle:
      "Una consultoría estratégica para comprender el estado actual de una propiedad, identificar oportunidades de mejora y orientar futuras decisiones de inversión.",
    introEyebrow: "Diagnóstico Estratégico del Proyecto",
    introText:
      "El Diagnóstico Estratégico del Proyecto está diseñado para comprender cómo funciona una propiedad existente, detectar oportunidades de mejora y establecer una estrategia clara para aumentar su experiencia, diferenciación y valor a largo plazo.",
    whyEyebrow: "¿Por qué comenzar con un diagnóstico?",
    whyTitle: "Las mejores decisiones se toman cuando existe claridad.",
    whyText:
      "Antes de invertir, remodelar o implementar nuevas disciplinas, es fundamental comprender cómo funciona el proyecto, cuáles son sus fortalezas y dónde se encuentran las mayores oportunidades de mejora.",
    goalsLabel: "Qué buscamos durante la consultoría",
    goals: [
      "Comprender el funcionamiento general del proyecto.",
      "Identificar fortalezas y oportunidades de mejora.",
      "Detectar aspectos que afectan la experiencia del usuario o huésped.",
      "Establecer prioridades de intervención.",
      "Orientar futuras inversiones mediante una estrategia clara.",
    ],
    indexEyebrow: "Índice de Valor 19.89",
    indexTitle: "Cinco dimensiones para entender dónde invertir primero.",
    indexText:
      "El resultado del diagnóstico permite entender dónde invertir primero y qué acciones pueden generar mayor impacto.",
    indexNote:
      "Ejemplo visual — la medición real se construye durante el diagnóstico de cada proyecto",
    roadmapEyebrow: "Proyecto Roadmap",
    roadmapTitle: "Prioridades claras, inversión ordenada.",
    roadmapText:
      "Después del diagnóstico, se define una hoja de ruta con prioridades claras. Esta hoja de ruta permite contratar las disciplinas de forma integral o por etapas según el nivel de urgencia, impacto y presupuesto.",
    roadmapStagesLabel: "Etapas posteriores recomendadas",
    roadmapStages: [
      { number: "01", title: "Desarrollo del proyecto", href: "/proyecto-desde-cero#etapa-2" },
      { number: "02", title: "Identidad y posicionamiento", href: "/proyecto-desde-cero#etapa-3" },
      { number: "03", title: "Automatización y Movilidad", href: "/proyecto-desde-cero#etapa-4" },
      { number: "04", title: "Del análisis a la acción", href: "/estrategia" },
    ],
    seeStage: "Ver etapa",
    closingText:
      "Cada recomendación busca orientar los recursos hacia aquellas acciones con mayor potencial de impacto y generación de valor. La contratación puede realizarse de forma integral o por etapas, según las prioridades y objetivos definidos.",
    closingLink: "Conocer la Estrategia 19.89",
    ctaTitlePart1: "Medimos primero.",
    ctaTitlePart2: "Invertimos después.",
    ctaButton: "Quiero diagnosticar mi proyecto",
  },

  valueDims: [
    { label: "Funcionalidad", demoFill: 72 },
    { label: "Experiencia", demoFill: 58 },
    { label: "Identidad", demoFill: 45 },
    { label: "Diferenciación", demoFill: 61 },
    { label: "Potencial comercial", demoFill: 80 },
  ],

  strategyPage: {
    metaTitle:
      "Estrategia 19.89 — Descubrimos el potencial. Diseñamos la estrategia. Creamos valor",
    metaDescription:
      "La Estrategia 19.89 es una metodología para acompañar proyectos residenciales, comerciales y hoteleros desde sus primeras etapas hasta su consolidación.",
    heroEyebrow: "Estrategia 19.89",
    heroText:
      "La Estrategia 19.89 es una metodología desarrollada para acompañar proyectos residenciales, comerciales y hoteleros desde sus primeras etapas hasta su consolidación.",
    principlesEyebrow: "La metodología",
    principlesTitle: "Seis principios ordenan cada decisión.",
    howEyebrow: "Cómo se aplica",
    howTitle: "La metodología se recorre por uno de dos caminos.",
    path1Label: "Camino 01",
    path1Title: "Proyecto Nuevo",
    path1Text:
      "Desde la selección del activo hasta el posicionamiento: claridad antes de cada decisión de inversión.",
    path1Link: "Ver proceso",
    path2Label: "Camino 02",
    path2Title: "Proyecto Construido",
    path2Text:
      "Diagnóstico Estratégico, Índice de Valor 19.89 y una hoja de ruta que ordena las prioridades de inversión.",
    path2Link: "Ver diagnóstico",
  },

  principles: [
    { number: "01", title: "Comprender antes de actuar", description: "Ningún proyecto se diseña sin entender primero su contexto, su mercado y sus objetivos." },
    { number: "02", title: "Priorizar antes de invertir", description: "Los recursos se orientan hacia las acciones con mayor potencial de impacto y generación de valor." },
    { number: "03", title: "Diseñar con propósito", description: "El diseño responde a la estrategia: cada decisión estética es también una decisión de inversión." },
    { number: "04", title: "Integrar disciplinas", description: "Arquitectura, finanzas, identidad y tecnología trabajan bajo una sola visión, no como servicios aislados." },
    { number: "05", title: "Comunicar correctamente", description: "Un proyecto vale más cuando su identidad y su narrativa comunican lo que ya ha sido construido." },
    { number: "06", title: "Pensar en el largo plazo", description: "Las decisiones de hoy se evalúan por el valor que sostienen mañana." },
  ],

  disciplinesPage: {
    metaTitle: "Disciplinas estratégicas — Herramientas que se integran a cada proyecto",
    metaDescription:
      "Selección de activos, diagnóstico, análisis financiero, arquitectura, iluminación, interiores, identidad, fotografía, marketing, automatización y movilidad: módulos de la Estrategia 19.89.",
    heroEyebrow: "Disciplinas",
    heroTitle: "Disciplinas estratégicas",
    heroSubtitle:
      "Herramientas especializadas que se integran según las necesidades de cada proyecto. Ninguna opera de forma aislada: todas responden a la Estrategia 19.89.",
    integrateLink: "Ver cómo se integra",
  },

  team: {
    metaTitle: "El equipo como ventaja",
    metaDescription:
      "La ventaja estratégica de 1989 Arquitectura está en integrar arquitectura, inversión, iluminación, interiores, identidad, comunicación y tecnología bajo una sola visión.",
    heroEyebrow: "Estudio",
    heroTitle: "El equipo como ventaja.",
    heroText:
      "La ventaja estratégica de 19.89 está en integrar arquitectura, inversión, iluminación, interiores, identidad, comunicación y tecnología bajo una sola visión. Cada disciplina aporta criterio para que las decisiones de diseño también respondan a decisiones de valor.",
    specialtiesEyebrow: "Especialidades",
  },

  contactPage: {
    metaTitle: "Contacto — Conversemos sobre tu proyecto",
    metaDescription:
      "Contanos en qué etapa está tu proyecto inmobiliario. Escribinos por WhatsApp, correo o Instagram — 1989 Arquitectura, Costa Rica.",
    heroEyebrow: "Contacto",
    heroTitle: "Conversemos sobre tu proyecto.",
    heroText:
      "Ya sea que estés iniciando una inversión o buscando elevar el valor de una propiedad existente, podemos ayudarte a definir el siguiente paso con claridad.",
    routeNew: "Quiero desarrollar un proyecto nuevo",
    routeBuilt: "Quiero diagnosticar una propiedad construida",
    directTitle: "Contacto directo",
    emailLabel: "Correo",
    instagramLabel: "Instagram",
    locationLabel: "Ubicación",
    location: "Costa Rica",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      stage: "¿En qué etapa está tu proyecto?",
      stagePlaceholder: "Seleccionar…",
      stageNew: "Quiero iniciar un proyecto nuevo",
      stageBuilt: "Ya tengo un proyecto construido",
      message: "Contanos sobre tu proyecto",
      submit: "Enviar mensaje",
      subject: "Nueva consulta — sitio 19.89 Arquitectura",
      sentTitle: "Mensaje enviado",
      sentText: "Mensaje enviado. Te contactamos pronto.",
    },
  },

  portfolio: {
    metaTitle: "Portafolio — Proyectos de arquitectura e iluminación",
    metaDescription:
      "Proyectos con estrategia detrás: arquitectura e iluminación en Costa Rica. Tree Lodge, Cafetal, Diciembre Seis, Kahwi, Amarea, Edica y Flex Center.",
    heroEyebrow: "Portafolio",
    heroTitle: "Proyectos con estrategia detrás.",
    filterAll: "Todos",
    filterArchitecture: "Arquitectura",
    filterLighting: "Iluminación",
    filterGroupLabel: "Filtrar proyectos",
    previous: "Anterior",
    next: "Siguiente",
    otherProjectsLabel: "Otros proyectos",
    projectAlt: (name: string) => `Proyecto ${name} — 19.89 Arquitectura`,
    galleryAlt: (name: string, i: number) =>
      `Proyecto ${name} — 19.89 Arquitectura (imagen ${i})`,
    metaProjectTitle: (name: string) => `${name} — Portafolio`,
    metaProjectDescription: (name: string, category: string) =>
      `${name}: proyecto de ${category.toLowerCase()} desarrollado por 1989 Arquitectura en Costa Rica.`,
  },

  projectExcerpts: {
    "tree-lodge":
      "Arquitectura en diálogo con el paisaje tropical: líneas limpias, materiales honestos y una distribución que prioriza la apertura y la calma.",
    cafetal:
      "Residencia de volúmenes puros y acentos oscuros, donde los patios y la vegetación ordenan la experiencia del habitar.",
    "diciembre-seis":
      "Conjunto residencial de líneas horizontales y cubiertas flotantes: claridad formal, privacidad y valor de largo plazo.",
    kahwi:
      "Hotel boutique entre árboles en Tamarindo: pabellones ligeros, materiales naturales y una atmósfera que convierte el paisaje en parte de la experiencia.",
    amarea:
      "Villas de espíritu tropical: volúmenes blancos, madera clara y una piscina que organiza el paisaje y la vida al exterior.",
    edica:
      "Diseño de iluminación exterior: criterios lumínicos que equilibran seguridad, confort visual y atmósfera en los recorridos.",
    "flex-center":
      "Criterios de iluminación para un conjunto comercial: eficiencia, jerarquía visual y una lectura clara de la arquitectura nocturna.",
  } as Record<string, string>,

  notFound: {
    eyebrow: "Error 404",
    title: "Esta página no existe.",
    text: "Pero tu proyecto sí. Volvé al inicio y descubrí cómo trabajamos.",
    button: "Volver al inicio",
  },
};

export type Dictionary = typeof es;
