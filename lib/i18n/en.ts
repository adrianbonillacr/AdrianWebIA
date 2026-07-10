import type { Dictionary } from "./es";

/**
 * ENGLISH dictionary — mirrors the structure of es.ts exactly.
 */

export const en: Dictionary = {
  meta: {
    homeTitle: "1989 Arquitectura | Architecture and investment with value — Costa Rica",
    homeDescription:
      "A firm specialized in the strategic development of real estate projects in Costa Rica. We analyze, plan, design and position projects to turn properties into assets with long-term value.",
  },

  common: {
    skipToContent: "Skip to content",
    claim: {
      part1: "We uncover the potential.",
      part2: "We design the strategy.",
      part3: "We create value.",
    },
    scheduleMeeting: "Schedule a strategy meeting",
    discover: "Discover",
  },

  nav: {
    home: "Home",
    newProject: "New Project",
    builtProject: "Built Project",
    strategy: "19.89 Strategy",
    disciplines: "Disciplines",
    portfolio: "Portfolio",
    contact: "Contact",
    cta: "Book a meeting",
    logoAria: "19.89 Arquitectura — Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Navigation menu",
    mainNavLabel: "Main",
    langSwitchLabel: "Language",
  },

  footer: {
    descriptor: "Architecture Studio — Costa Rica",
    services: "Services",
    studio: "Studio",
    contact: "Contact",
    tagline: "Architecture and investment with value",
    servicesLabel: "Services",
    studioLabel: "Studio",
  },

  categories: {
    arquitectura: "Architecture",
    iluminacion: "Lighting",
  },

  home: {
    heroEyebrow: "Architecture studio — Costa Rica",
    heroTitle: "Architecture and investment with value.",
    heroSubtitle:
      "We develop, transform and position real estate projects with strategy, design and a long-term vision.",
    pathsEyebrow: "Two paths to create value",
    pathsTitle:
      "Every project is at a different moment. That is why we work along two clear paths.",
    path1Tag: "PATH 01",
    path1Title: "New Project",
    path1Tagline: "The best investment starts with the right property.",
    path1Description:
      "For those who want to start a real estate project with clarity from the very first decisions: asset selection, strategy, design, development, identity and positioning.",
    path1Link: "See the process",
    path2Tag: "PATH 02",
    path2Title: "Built Project",
    path2Tagline: "We measure first. We invest after.",
    path2Description:
      "For those who already own a property or an operating project and want to identify improvement opportunities, prioritize investments and increase its value.",
    path2Link: "See the diagnosis",
    strategyEyebrow: "19.89 Strategy",
    strategyTitle: "A methodology for making better decisions.",
    strategyText:
      "The 19.89 Strategy is a methodology developed to accompany residential, commercial and hospitality projects from their earliest stages through consolidation. Its goal is to help owners and investors make better decisions, set priorities and develop projects capable of standing out and generating long-term value.",
    strategyLink: "Learn about the methodology",
    processEyebrow: "From analysis to action",
    processTitle: "A process that orders decisions before investing.",
    disciplinesEyebrow: "Disciplines",
    disciplinesTitle: "Disciplines under a single vision.",
    disciplinesNote:
      "They are not isolated services: they are tools that integrate into the strategy according to the needs of each project.",
    disciplinesLink: "See all disciplines",
    portfolioEyebrow: "Featured portfolio",
    architectureLabel: "Architecture",
    lightingLabel: "Lighting",
    seeFullPortfolio: "See full portfolio",
  },

  processSteps: [
    { number: "01", title: "We understand", description: "We listen to the goals and understand the project's starting point." },
    { number: "02", title: "We diagnose", description: "We assess the current state: strengths, risks and opportunities." },
    { number: "03", title: "We prioritize", description: "We order decisions according to their impact on value." },
    { number: "04", title: "We design", description: "We translate strategy into spaces, experience and identity." },
    { number: "05", title: "We develop", description: "We execute the interventions with criteria and supervision." },
    { number: "06", title: "We position", description: "We communicate the project so the market gets to know it." },
    { number: "07", title: "We evolve", description: "We accompany growth with a long-term vision." },
  ],

  homeDisciplines: [
    { name: "Investment advisory", description: "Asset selection and strategic diagnosis of the starting point." },
    { name: "Strategic financial analysis", description: "Directs investment toward the greatest potential for value." },
    { name: "Architecture", description: "Design, schematic design, remodeling and supervision." },
    { name: "Lighting design", description: "Atmospheres, lighting criteria and fixture selection." },
    { name: "Interior design", description: "Spatial narrative, materials, finishes and curation." },
    { name: "Furnishing & styling", description: "Curated pieces, styling and ambiance." },
    { name: "Brand protection", description: "Trademark protection, visual identity and positioning." },
    { name: "Professional photography", description: "Architectural and hospitality photography, visual direction." },
    { name: "Digital marketing", description: "Communication strategy, content and campaigns." },
    { name: "Automation & Mobility", description: "Automation, efficiency and user experience." },
  ],

  stageLabels: {
    asesoria: "Stage 1 · Investment advisory",
    desarrollo: "Stage 2 · Project development",
    identidad: "Stage 3 · Identity and positioning",
    tecnologia: "Stage 4 · Automation & Mobility",
  },

  pathTags: {
    both: "New Project · Built Project",
    newOnly: "New Project only",
  },
  disciplines: [
    { slug: "seleccion-de-activos", name: "Asset selection", tagline: "The best investment starts with choosing well.", stage: "asesoria", href: "/proyecto-desde-cero#etapa-1", newOnly: true },
    { slug: "diagnostico-estrategico", name: "Strategic diagnosis", tagline: "We measure first. We invest after.", stage: "asesoria", href: "/proyecto-ya-construido", newOnly: false },
    { slug: "analisis-financiero", name: "Strategic financial analysis", tagline: "Investing better starts with understanding the project's potential.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: true },
    { slug: "arquitectura", name: "Architecture", tagline: "Design with strategic grounding, from schematic design to the built work.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: true },
    { slug: "diseno-de-iluminacion", name: "Lighting design", tagline: "Atmospheres that transform the experience of space.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: false },
    { slug: "diseno-de-interiores", name: "Interior design", tagline: "Spatial narrative, materials and curation with intent.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: false },
    { slug: "equipamiento-y-ambientacion", name: "Furnishing & styling", tagline: "Pieces and ambiance that complete the experience.", stage: "desarrollo", href: "/proyecto-desde-cero#etapa-2", newOnly: false },
    { slug: "proteccion-de-identidad", name: "Brand protection", tagline: "A protected brand is an asset that grows.", stage: "identidad", href: "/proyecto-desde-cero#etapa-3", newOnly: false },
    { slug: "fotografia-profesional", name: "Professional photography", tagline: "The project deserves to look like what it is.", stage: "identidad", href: "/proyecto-desde-cero#etapa-3", newOnly: false },
    { slug: "marketing-digital", name: "Digital marketing", tagline: "A great project needs to be visible.", stage: "identidad", href: "/proyecto-desde-cero#etapa-3", newOnly: false },
    { slug: "automatizacion-y-movilidad", name: "Automation & Mobility", tagline: "Innovation that simplifies operations and adds value.", stage: "tecnologia", href: "/proyecto-desde-cero#etapa-4", newOnly: false },
  ],

  fromZero: {
    metaTitle: "New Project — The best investment starts with the right property",
    metaDescription:
      "A strategic path to start real estate projects with clarity, criteria and a long-term vision: investment advisory, development, identity, automation and mobility.",
    heroEyebrow: "New Project",
    heroTitle: "The best investment starts with the right property.",
    heroSubtitle:
      "A strategic path to start real estate projects with clarity, criteria and a long-term vision.",
    introEyebrow: "The starting point",
    introText:
      "The most important decisions of a project are usually made before the first drawing: choosing a property, defining the concept, ordering the investment and understanding how the project will reach the market. Without a clear strategy, low-impact investments, missed opportunities and projects that never reach their true potential can arise.",
    stage1Eyebrow: "Stage 1 · Investment advisory",
    stage1Title: "Before designing, we evaluate the starting point.",
    stage1Text:
      "This stage helps understand whether the client already owns a property or needs support selecting the right asset.",
    assetSelection: {
      option: "Option A · There is no property yet",
      title: "Asset selection",
      description:
        "We evaluate opportunities aligned with the project's goals, budget and vision to support decision-making before investing.",
      includesLabel: "What it includes",
      bullets: [
        "Understanding the investment profile.",
        "Identifying opportunities aligned with the project.",
        "Evaluating location, context and development potential.",
        "Identifying risks, limitations and opportunities.",
        "Presenting strategic recommendations.",
      ],
      deliverablesLabel: "Deliverables",
      deliverables: [
        "Executive report.",
        "Evaluation of the opportunities analyzed.",
        "Recommendations for decision-making.",
      ],
      feeLabel: "Fees",
      feeNote:
        "Detailed in the proposal according to scope. If the project's development continues with 19.89 Arquitectura, they may be credited partially or in full within the comprehensive contract, under agreed conditions.",
    },
    diagnosis: {
      option: "Option B · A property already exists",
      title: "Strategic diagnosis",
      description:
        "When the client already owns a property, we move to the strategic analysis of the project to identify opportunities, priorities and a development route.",
      link: "See the strategic diagnosis",
    },
    stage2Eyebrow: "Stage 2 · Project development",
    stage2Title: "The strategy becomes a project.",
    stage2Text:
      "With a defined strategy and a clear roadmap, the development stage begins. Each discipline is implemented according to the project's needs and the opportunities identified during the analysis.",
    developmentDisciplines: [
      "Strategic financial analysis",
      "Architecture",
      "Lighting design",
      "Interior design",
      "Furnishing & styling",
    ],
    financial: {
      label: "Strategic financial analysis",
      title: "Investing better starts with understanding the project's potential.",
      description:
        "It directs investments, sets priorities and evaluates where the greatest opportunities to generate value exist.",
      benefitsLabel: "Benefits",
      benefits: [
        "Greater clarity to invest.",
        "Prioritization of resources.",
        "Better decision-making.",
      ],
      note: "Consultative analysis focused on finding the project's profitability. Included within the schematic design service.",
    },
    stage3Eyebrow: "Stage 3 · Identity and positioning",
    stage3Title: "A great project deserves an identity capable of communicating its value.",
    stage3Text:
      "Once the strategy is defined and the physical interventions are developed, a new stage begins: building the project's identity, narrative and presence. In the 19.89 Strategy, brand protection, photography and digital marketing are not understood as independent actions. They are tools that communicate, position and strengthen everything that has already been built.",
    identityDisciplines: [
      "Brand protection",
      "Professional photography",
      "Digital marketing",
    ],
    marketing: {
      label: "Digital marketing",
      intro:
        "A great project needs a strategy capable of making it visible. Creating an excellent space is not enough; the market needs to know it.",
      scopeLabel: "Scope",
      scope: [
        "Digital communication strategy.",
        "Content planning.",
        "Brand positioning.",
        "Social media management.",
        "Digital communication campaigns.",
        "Analysis and strategic optimization.",
      ],
      packageLabel: "Package",
      includesLabel: "Includes",
      pricingNote:
        "The investment for each package is detailed in the proposal, according to the project's needs and stage.",
      travelNote:
        "Travel within the Greater Metropolitan Area (GAM) is included. For projects outside this area, travel costs are quoted separately.",
    },
    packages: [
      {
        name: "Start",
        positioning: "Designed for projects starting their digital presence.",
        includes: [
          "Initial creative meeting.",
          "Basic content strategy.",
          "1 professional photography session.",
          "2 edited reels.",
          "Bank of edited images.",
          "Content ready to publish.",
        ],
        featured: false,
      },
      {
        name: "Growth",
        positioning: "Designed for projects seeking to consolidate their presence.",
        includes: [
          "Basic content strategy.",
          "Creative direction.",
          "1 professional photography session.",
          "5 edited reels.",
          "Bank of professional photographs.",
          "Visual communication guide.",
          "Content ready to publish.",
        ],
        featured: true,
      },
      {
        name: "Signature",
        positioning: "The comprehensive communication solution.",
        includes: [
          "Brand strategy.",
          "Comprehensive creative direction.",
          "Premium audiovisual production.",
          "Professional photography.",
          "Corporate or promotional video.",
          "Reels for campaigns.",
          "Aerial drone footage.",
          "Complete library of images and videos for 1 to 3 months.",
        ],
        featured: false,
      },
    ],
    stage4Eyebrow: "Stage 4 · Automation & Mobility",
    stage4Title:
      "Innovation that improves the experience, simplifies operations and adds value to the project.",
    stage4Text:
      "The best technological solutions are the ones that go unnoticed. They do not seek to add complexity, but to make each space work more efficiently, comfortably and intuitively for the people who use it.",
    stage4EvaluationLabel: "What we evaluate",
    stage4Evaluation: [
      "Automation and smart control.",
      "Electric mobility.",
      "Technologies focused on comfort and efficiency.",
      "Solutions to optimize the project's operation.",
      "Opportunities for innovation and differentiation.",
    ],
    stage4BenefitsLabel: "Benefits",
    stage4Benefits: [
      "Greater comfort for users.",
      "More efficient operation.",
      "Better user experience.",
      "Increased perceived value.",
      "Projects prepared for the needs of the future.",
    ],
    stage4Result:
      "Technology stops being an accessory and becomes a tool that simplifies daily life, improves people's experience and strengthens the project's long-term value.",
    closingEyebrow: "From analysis to action",
    closingText:
      "Each recommendation seeks to direct resources toward the actions with the greatest potential for impact and value creation. Engagement can be comprehensive or by stages, according to the priorities and goals defined.",
    ctaTitle: "The best investment starts with the right property.",
    ctaButton: "I want to develop a new project",
  },

  built: {
    metaTitle: "Built Project — Strategic Project Diagnosis",
    metaDescription:
      "A strategic consultancy to understand the current state of a property, identify improvement opportunities and guide future investment decisions.",
    heroEyebrow: "Built Project",
    heroTitle: "We measure first. We invest after.",
    heroSubtitle:
      "A strategic consultancy to understand the current state of a property, identify improvement opportunities and guide future investment decisions.",
    introEyebrow: "Strategic Project Diagnosis",
    introText:
      "The Strategic Project Diagnosis is designed to understand how an existing property works, detect improvement opportunities and establish a clear strategy to increase its experience, differentiation and long-term value.",
    whyEyebrow: "Why start with a diagnosis?",
    whyTitle: "The best decisions are made when there is clarity.",
    whyText:
      "Before investing, remodeling or implementing new disciplines, it is essential to understand how the project works, what its strengths are and where the greatest improvement opportunities lie.",
    goalsLabel: "What we look for during the consultancy",
    goals: [
      "Understanding the overall operation of the project.",
      "Identifying strengths and improvement opportunities.",
      "Detecting aspects that affect the user or guest experience.",
      "Establishing intervention priorities.",
      "Guiding future investments through a clear strategy.",
    ],
    indexEyebrow: "19.89 Value Index",
    indexTitle: "Five dimensions to understand where to invest first.",
    indexText:
      "The result of the diagnosis shows where to invest first and which actions can generate the greatest impact.",
    indexNote:
      "Visual example — the real measurement is built during each project's diagnosis",
    roadmapEyebrow: "Project Roadmap",
    roadmapTitle: "Clear priorities, ordered investment.",
    roadmapText:
      "After the diagnosis, a roadmap with clear priorities is defined. This roadmap allows the disciplines to be engaged comprehensively or by stages according to urgency, impact and budget.",
    roadmapStagesLabel: "Recommended next stages",
    roadmapStages: [
      { number: "01", title: "Project development", href: "/proyecto-desde-cero#etapa-2" },
      { number: "02", title: "Identity and positioning", href: "/proyecto-desde-cero#etapa-3" },
      { number: "03", title: "Automation & Mobility", href: "/proyecto-desde-cero#etapa-4" },
      { number: "04", title: "From analysis to action", href: "/estrategia" },
    ],
    seeStage: "See stage",
    closingText:
      "Each recommendation seeks to direct resources toward the actions with the greatest potential for impact and value creation. Engagement can be comprehensive or by stages, according to the priorities and goals defined.",
    closingLink: "Learn about the 19.89 Strategy",
    ctaTitlePart1: "We measure first.",
    ctaTitlePart2: "We invest after.",
    ctaButton: "I want to diagnose my project",
  },

  valueDims: [
    { label: "Functionality", demoFill: 72 },
    { label: "Experience", demoFill: 58 },
    { label: "Identity", demoFill: 45 },
    { label: "Differentiation", demoFill: 61 },
    { label: "Commercial potential", demoFill: 80 },
  ],

  strategyPage: {
    metaTitle:
      "19.89 Strategy — We uncover the potential. We design the strategy. We create value",
    metaDescription:
      "The 19.89 Strategy is a methodology to accompany residential, commercial and hospitality projects from their earliest stages through consolidation.",
    heroEyebrow: "19.89 Strategy",
    heroText:
      "The 19.89 Strategy is a methodology developed to accompany residential, commercial and hospitality projects from their earliest stages through consolidation.",
    principlesEyebrow: "The methodology",
    principlesTitle: "Six principles order every decision.",
    howEyebrow: "How it is applied",
    howTitle: "The methodology unfolds along one of two paths.",
    path1Label: "Path 01",
    path1Title: "New Project",
    path1Text:
      "From asset selection to positioning: clarity before every investment decision.",
    path1Link: "See the process",
    path2Label: "Path 02",
    path2Title: "Built Project",
    path2Text:
      "Strategic Diagnosis, 19.89 Value Index and a roadmap that orders investment priorities.",
    path2Link: "See the diagnosis",
  },

  principles: [
    { number: "01", title: "Understand before acting", description: "No project is designed without first understanding its context, its market and its goals." },
    { number: "02", title: "Prioritize before investing", description: "Resources are directed toward the actions with the greatest potential for impact and value creation." },
    { number: "03", title: "Design with purpose", description: "Design responds to strategy: every aesthetic decision is also an investment decision." },
    { number: "04", title: "Integrate disciplines", description: "Architecture, finance, identity and technology work under a single vision, not as isolated services." },
    { number: "05", title: "Communicate correctly", description: "A project is worth more when its identity and narrative communicate what has already been built." },
    { number: "06", title: "Think long term", description: "Today's decisions are measured by the value they sustain tomorrow." },
  ],

  disciplinesPage: {
    metaTitle: "Strategic disciplines — Tools that integrate into every project",
    metaDescription:
      "Asset selection, diagnosis, financial analysis, architecture, lighting, interiors, identity, photography, marketing, automation and mobility: modules of the 19.89 Strategy.",
    heroEyebrow: "Disciplines",
    heroTitle: "Strategic disciplines",
    heroSubtitle:
      "Specialized tools that integrate according to the needs of each project. None operates in isolation: they all respond to the 19.89 Strategy.",
    integrateLink: "See how it integrates",
  },

  team: {
    metaTitle: "The team as an advantage",
    metaDescription:
      "The strategic advantage of 1989 Arquitectura lies in integrating architecture, investment, lighting, interiors, identity, communication and technology under a single vision.",
    heroEyebrow: "Studio",
    heroTitle: "The team as an advantage.",
    heroText:
      "The strategic advantage of 19.89 lies in integrating architecture, investment, lighting, interiors, identity, communication and technology under a single vision. Each discipline contributes criteria so that design decisions also respond to value decisions.",
    specialtiesEyebrow: "Specialties",
  },

  contactPage: {
    metaTitle: "Contact — Let's talk about your project",
    metaDescription:
      "Tell us what stage your real estate project is at. Reach us by WhatsApp, email or Instagram — 1989 Arquitectura, Costa Rica.",
    heroEyebrow: "Contact",
    heroTitle: "Let's talk about your project.",
    heroText:
      "Whether you are starting an investment or looking to raise the value of an existing property, we can help you define the next step with clarity.",
    routeNew: "I want to develop a new project",
    routeBuilt: "I want to diagnose a built property",
    directTitle: "Direct contact",
    emailLabel: "Email",
    instagramLabel: "Instagram",
    locationLabel: "Location",
    location: "Costa Rica",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      stage: "What stage is your project at?",
      stagePlaceholder: "Select…",
      stageNew: "I want to start a new project",
      stageBuilt: "I already have a built project",
      message: "Tell us about your project",
      submit: "Send message",
      subject: "New inquiry — 19.89 Arquitectura website",
      sentTitle: "Message sent",
      sentText: "Message sent. We will contact you soon.",
    },
  },

  portfolio: {
    metaTitle: "Portfolio — Architecture and lighting projects",
    metaDescription:
      "Projects with strategy behind them: architecture and lighting in Costa Rica. Tree Lodge, Cafetal, Diciembre Seis, Kahwi, Amarea, Edica and Flex Center.",
    heroEyebrow: "Portfolio",
    heroTitle: "Projects with strategy behind them.",
    filterAll: "All",
    filterArchitecture: "Architecture",
    filterLighting: "Lighting",
    filterGroupLabel: "Filter projects",
    previous: "Previous",
    next: "Next",
    otherProjectsLabel: "Other projects",
    projectAlt: (name: string) => `${name} project — 19.89 Arquitectura`,
    galleryAlt: (name: string, i: number) =>
      `${name} project — 19.89 Arquitectura (image ${i})`,
    metaProjectTitle: (name: string) => `${name} — Portfolio`,
    metaProjectDescription: (name: string, category: string) =>
      `${name}: a ${category.toLowerCase()} project developed by 1989 Arquitectura in Costa Rica.`,
  },

  projectExcerpts: {
    "tree-lodge":
      "Architecture in dialogue with the tropical landscape: clean lines, honest materials and a layout that prioritizes openness and calm.",
    cafetal:
      "A residence of pure volumes and dark accents, where courtyards and vegetation order the experience of living.",
    "diciembre-seis":
      "A residential ensemble of horizontal lines and floating roofs: formal clarity, privacy and long-term value.",
    kahwi:
      "A boutique hotel among the trees in Tamarindo: light pavilions, natural materials and an atmosphere that makes the landscape part of the experience.",
    amarea:
      "Villas with a tropical spirit: white volumes, light wood and a pool that organizes the landscape and outdoor life.",
    edica:
      "Exterior lighting design: lighting criteria that balance safety, visual comfort and atmosphere along the paths.",
    "flex-center":
      "Lighting criteria for a commercial complex: efficiency, visual hierarchy and a clear reading of the nighttime architecture.",
  } as Record<string, string>,

  notFound: {
    eyebrow: "Error 404",
    title: "This page does not exist.",
    text: "But your project does. Go back home and discover how we work.",
    button: "Back to home",
  },
};
