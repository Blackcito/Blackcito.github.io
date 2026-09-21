/* ============================================================
   Internacionalización (ES / EN)
   ============================================================ */
(function() {
    const translations = {
        es: {
            cvHref: 'assets/documentos/JoseAlderete_esp.pdf',

            'nav.about': 'Sobre mí',
            'nav.experience': 'Experiencia',
            'nav.projects': 'Proyectos',
            'nav.skills': 'Habilidades',
            'nav.thesis': 'Tesis',
            'nav.education': 'Formación',
            'nav.contact': 'Contacto',
            'nav.lang': 'Cambiar idioma',
            'nav.menu': 'Menú',

            'hero.badge': 'Disponibilidad inmediata',
            'hero.subtitle': 'Ingeniero Civil en Informática · Mención TI',
            'hero.desc': 'Perfil híbrido en tres pilares: Ciencia de Datos e IA, Ingeniería de Datos e Infraestructura / DevOps. Construyo soluciones de extremo a extremo: del dato a la infraestructura cloud-native.',
            'hero.btnProjects': 'Ver proyectos ↓',
            'hero.btnCV': 'Descargar CV',
            'hero.btnContact': 'Contactar',

            'about.kicker': '01 · Sobre mí',
            'about.h2': 'Perfil profesional',
            'about.summaryTitle': 'Resumen',
            'about.summaryText': 'Ingeniero Civil en Informática (Mención TI) con un perfil híbrido en tres pilares: <b>Ciencia de Datos e IA</b> (modelado neuro-difuso, simulación, R), <b>Ingeniería de Datos</b> (pipelines de streaming, ETL, MariaDB/Redis) e <b>Infraestructura / DevOps</b> (Kubernetes HA, Terraform, Ansible). Diseño soluciones de extremo a extremo, desde la modelización de algoritmos hasta el despliegue de alta disponibilidad como código. Motivado por desafíos técnicos complejos y tecnologías emergentes.',
            'about.factsTitle': 'Datos rápidos',
            'about.fact1': '<b>Disponibilidad</b> — Inmediata.',
            'about.fact2': '<b>Idiomas</b> — Español (nativo) · Inglés (C2 Proficient).',
            'about.fact3': '<b>Enfoque</b> — IA explicable, datos en tiempo real e infraestructura como código.',
            'about.fact4': '<b>Formación</b> — Titulado, trabajo de título centrado en IA (ANFIS).',

            'exp.kicker': '02 · Experiencia',
            'exp.h2': 'Experiencia laboral',
            'exp.role1': 'Practicante en Análisis de Datos',
            'exp.role2': 'Analista de Datos (Práctica Inicial)',
            'exp.r1': 'Desarrollo de un sistema de procesamiento en tiempo real para integrar datos de múltiples fuentes (controladores de equipo, scanners y transportadores).',
            'exp.r2': 'Pipeline ETL con correlación temporal de eventos y cálculo de métricas operacionales (tiempos de ciclo, eficiencia y esperas).',
            'exp.r3': 'Diseño de módulos de analítica para estadísticas diarias, por operador, producto y proceso detallado.',
            'exp.r4': 'Administración de MariaDB y optimización de consultas con CTEs y operaciones batch.',
            'exp.r5': 'Gestión de estado con recuperación automática ante fallos (idempotencia).',
            'exp.r6': 'Visualización de KPIs mediante Grafana y scripts de consultas SQL.',
            'exp.u1': 'Limpieza, procesamiento y modelamiento de datos.',
            'exp.u2': 'Manejo de bases de datos y visualización en Tableau.',

            'projects.kicker': '03 · Proyectos',
            'projects.h2': 'Trabajo destacado',
            'proj.catSim': 'Simulación',
            'proj.catOpt': 'Optimización',
            'proj.viewRepo': 'Ver repositorio →',
            'proj.anfis.title': 'ANFIS — Detección de Tumores Cerebrales',
            'proj.anfis.period': '2023 — 2025 · Trabajo de Título',
            'proj.anfis.desc': 'Clasificación binaria explicable de imágenes MRI mediante un sistema neuro-difuso ANFIS-Sugeno de 6 capas implementado desde cero y entrenado con PSO + mínimos cuadrados (LSE). Incluye preprocesamiento de imágenes, extracción de textura GLCM, capa de explicabilidad (XAI) y GUI de escritorio.',
            'proj.ind.title': 'Industrial Process Analytics System',
            'proj.ind.period': '2024 — 2025',
            'proj.ind.desc': 'Pipeline de procesamiento continuo dirigido por eventos (Redis pub/sub) para monitoreo de manufactura en tiempo real. Correlaciona PLC, escáneres y cinta transportadora para calcular ciclos, eficiencia y esperas, con estado persistente, idempotencia y analítica SQL avanzada.',
            'proj.kub.title': 'Kuber_HA — Clúster Kubernetes HA',
            'proj.kub.period': '2024',
            'proj.kub.desc': 'Aprovisionamiento automatizado (IaC) de un clúster Kubernetes de alta disponibilidad: 3 control-planes, balanceo activo/pasivo con HAProxy + Keepalived (VRRP), almacenamiento distribuido Longhorn y orquestación por roles Ansible. Todo el ciclo de vida como código repetible.',
            'proj.inc.title': 'Simulación de Incendio Forestal con Agentes',
            'proj.inc.period': '2024',
            'proj.inc.desc': 'Modelo multi-agente (ABM) en R sobre una grilla 50×50 que simula la propagación estocástica de incendios influenciada por el clima, con guardabosques (clases S4) que detectan, limpian y apagan focos bajo un presupuesto energético. Reproducible y visualizado con ggplot2.',
            'proj.inc.tagStoch': 'Estocástico',
            'proj.gen.title': 'Algoritmo Genético de Optimización',
            'proj.gen.desc': 'Simulación de un algoritmo genético en Python: una población evoluciona sobre una grilla con genes que codifican direcciones de movimiento y agresividad, aplicando selección, cruce y mutación. Visualiza la evolución de la aptitud a lo largo de las generaciones.',
            'proj.gen.tagGA': 'Algoritmos Genéticos',

            'skills.kicker': '04 · Habilidades',
            'skills.h2': 'Stack tecnológico',
            'skills.lang': 'Lenguajes',
            'skills.ml': 'Machine Learning & IA',
            'skills.img': 'Procesamiento de Imágenes',
            'skills.data': 'Análisis de Datos & Simulación',
            'skills.db': 'Bases de Datos',
            'skills.viz': 'Visualización',
            'skills.devops': 'DevOps & Infraestructura',
            'skills.sw': 'Desarrollo de Software',
            'skills.fuzzy': 'Lógica difusa',
            'skills.ga': 'Algoritmos genéticos',
            'skills.seg': 'Segmentación adaptativa',
            'skills.bilateral': 'Filtro bilateral',
            'skills.morph': 'Morfología',
            'skills.modular': 'Arquitectura modular',
            'skills.patterns': 'Patrones de diseño',

            'thesis.kicker': '05 · Tesis / Publicaciones',
            'thesis.h2': 'Memoria de Título',
            'thesis.cat': 'Investigación Académica',
            'thesis.title': 'Sistema ANFIS para Detección Automática de Tumores Cerebrales en Imágenes de Resonancia Magnética',
            'thesis.desc': 'Memoria de título en la que se desarrolla un sistema de clasificación binaria para la detección automática de tumores cerebrales en imágenes de resonancia magnética (MRI). El trabajo implementa un Sistema de Inferencia Neuro-Difuso Adaptativo (ANFIS) de arquitectura Sugeno de seis capas, entrenado de forma híbrida con Optimización por Enjambre de Partículas (PSO) para los parámetros no lineales y mínimos cuadrados (LSE) para los consecuentes. Incluye preprocesamiento de imágenes, extracción de textura GLCM, una capa de explicabilidad (XAI) que interpreta las reglas difusas más relevantes y una interfaz gráfica de usuario, priorizando la interpretabilidad clínica del diagnóstico.',
            'thesis.btn': 'Leer / Descargar Tesis Completa',

            'edu.kicker': '06 · Formación',
            'edu.h2': 'Estudios y Certificaciones',
            'edu.title': 'Ingeniería Civil en Informática',
            'edu.place': 'Universidad Católica de Temuco · Mención Tecnologías de la Información',
            'edu.date': 'Mar 2020 — May 2025 · Titulado',
            'cert.verify': 'Verificar ↗',
            'cert.ef.title': 'English Certificate',
            'cert.ef.desc': 'C2 Proficient · Puntuación 76/100',
            'cert.py1.title': 'Python Intermedio / Avanzado',
            'cert.py1.desc': 'Capacitación en programación Python',
            'cert.py2.title': 'Python Básico: Proceso de Datos',
            'cert.py2.desc': 'Capacitación en procesamiento de datos con Python',
            'cert.pbi1.title': 'Power BI Básico',
            'cert.pbi1.desc': 'Capacitación en visualización de datos',
            'cert.pbi2.title': 'Power BI Intermedio',
            'cert.pbi2.desc': 'Capacitación en análisis y visualización de datos',
            'cert.pbi3.title': 'Power BI Avanzado',
            'cert.pbi3.desc': 'Capacitación en análisis de datos · En curso',
            'cert.sap.title': 'SAP ERP',
            'cert.sap.desc': 'Capacitación en sistemas ERP · En curso',

            'contact.kicker': '07 · Contacto',
            'contact.h2': 'Hablemos',
            'contact.phone': 'Teléfono',

            'footer.text': 'José Miguel Alderete López · Construido con <span class="heart">♥</span> en GitHub Pages',

            'alt.anfis.gui': 'Interfaz gráfica de la aplicación ANFIS',
            'alt.anfis.eval': 'Evaluación y métricas del modelo ANFIS',
            'alt.kub': 'Diagrama de arquitectura HA del clúster Kubernetes',
            'alt.inc.a': 'Simulación de la grilla de agentes del incendio forestal',
            'alt.inc.b': 'Evolución de las celdas a lo largo de la simulación',
            'alt.inc.c': 'Estado del bosque en el paso 100 de la simulación',

            'gh.anfis': 'ANFIS en GitHub',
            'gh.ind': 'Industrial Analytics en GitHub',
            'gh.kub': 'Kuber_HA en GitHub',
            'gh.inc': 'Simulación de incendio en GitHub',
            'gh.gen': 'Algoritmo genético en GitHub',

            'lb.dialog': 'Visor de imágenes',
            'lb.close': 'Cerrar',
            'lb.prev': 'Anterior',
            'lb.next': 'Siguiente'
        },

        en: {
            cvHref: 'assets/documentos/JoseAlderete_eng.pdf',

            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.skills': 'Skills',
            'nav.thesis': 'Thesis',
            'nav.education': 'Education',
            'nav.contact': 'Contact',
            'nav.lang': 'Change language',
            'nav.menu': 'Menu',

            'hero.badge': 'Available immediately',
            'hero.subtitle': 'Software Engineer · IT Mention',
            'hero.desc': 'Hybrid profile across three pillars: Data Science & AI, Data Engineering and Infrastructure / DevOps. I build end-to-end solutions — from data to cloud-native infrastructure.',
            'hero.btnProjects': 'View projects ↓',
            'hero.btnCV': 'Download CV',
            'hero.btnContact': 'Contact',

            'about.kicker': '01 · About',
            'about.h2': 'Professional profile',
            'about.summaryTitle': 'Summary',
            'about.summaryText': 'Software Engineer (IT Mention) with a hybrid profile across three pillars: <b>Data Science & AI</b> (neuro-fuzzy modeling, simulation, R), <b>Data Engineering</b> (streaming pipelines, ETL, MariaDB/Redis) and <b>Infrastructure / DevOps</b> (Kubernetes HA, Terraform, Ansible). I design end-to-end solutions, from algorithm modeling to high-availability deployment as code. Driven by complex technical challenges and emerging technologies.',
            'about.factsTitle': 'Quick facts',
            'about.fact1': '<b>Availability</b> — Immediate.',
            'about.fact2': '<b>Languages</b> — Spanish (native) · English (C2 Proficient).',
            'about.fact3': '<b>Focus</b> — Explainable AI, real-time data and infrastructure as code.',
            'about.fact4': '<b>Education</b> — Graduate, thesis focused on AI (ANFIS).',

            'exp.kicker': '02 · Experience',
            'exp.h2': 'Work experience',
            'exp.role1': 'Data Analysis Intern',
            'exp.role2': 'Data Analyst (Initial Internship)',
            'exp.r1': 'Developed a real-time processing system to integrate data from multiple sources (equipment controllers, scanners and conveyors).',
            'exp.r2': 'ETL pipeline with time-based event correlation and calculation of operational metrics (cycle times, efficiency and wait times).',
            'exp.r3': 'Designed analytics modules for daily, operator, product and detailed process statistics.',
            'exp.r4': 'MariaDB administration and query optimization using CTEs and batch operations.',
            'exp.r5': 'State management with automatic failure recovery (idempotency).',
            'exp.r6': 'KPI visualization with Grafana and SQL query scripts.',
            'exp.u1': 'Data cleaning, processing and modeling.',
            'exp.u2': 'Database management and visualization with Tableau.',

            'projects.kicker': '03 · Projects',
            'projects.h2': 'Featured work',
            'proj.catSim': 'Simulation',
            'proj.catOpt': 'Optimization',
            'proj.viewRepo': 'View repository →',
            'proj.anfis.title': 'ANFIS — Brain Tumor Detection',
            'proj.anfis.period': '2023 — 2025 · Thesis Project',
            'proj.anfis.desc': 'Explainable binary classification of MRI images using a 6-layer ANFIS-Sugeno neuro-fuzzy system built from scratch and trained with PSO + least squares (LSE). Includes image preprocessing, GLCM texture extraction, an explainability layer (XAI) and a desktop GUI.',
            'proj.ind.title': 'Industrial Process Analytics System',
            'proj.ind.period': '2024 — 2025',
            'proj.ind.desc': 'Event-driven continuous processing pipeline (Redis pub/sub) for real-time manufacturing monitoring. Correlates PLCs, scanners and conveyor timestamps to compute cycle times, efficiency and wait times, with persistent state, idempotency and advanced SQL analytics.',
            'proj.kub.title': 'Kuber_HA — HA Kubernetes Cluster',
            'proj.kub.period': '2024',
            'proj.kub.desc': 'Automated provisioning (IaC) of a high-availability Kubernetes cluster: 3 control-planes, active/passive load balancing with HAProxy + Keepalived (VRRP), distributed Longhorn storage and Ansible role-based orchestration. Full lifecycle as repeatable code.',
            'proj.inc.title': 'Agent-Based Forest Fire Simulation',
            'proj.inc.period': '2024',
            'proj.inc.desc': 'Multi-agent model (ABM) in R on a 50×50 grid simulating the stochastic spread of forest fires influenced by weather, with rangers (S4 classes) that detect, clear and extinguish fire spots under an energy budget. Reproducible and visualized with ggplot2.',
            'proj.inc.tagStoch': 'Stochastic',
            'proj.gen.title': 'Genetic Optimization Algorithm',
            'proj.gen.desc': 'Genetic algorithm simulation in Python: a population evolves on a grid with genes encoding movement directions and aggressiveness, applying selection, crossover and mutation. Visualizes fitness evolution across generations.',
            'proj.gen.tagGA': 'Genetic Algorithms',

            'skills.kicker': '04 · Skills',
            'skills.h2': 'Tech stack',
            'skills.lang': 'Languages',
            'skills.ml': 'Machine Learning & AI',
            'skills.img': 'Image Processing',
            'skills.data': 'Data Analysis & Simulation',
            'skills.db': 'Databases',
            'skills.viz': 'Visualization',
            'skills.devops': 'DevOps & Infrastructure',
            'skills.sw': 'Software Development',
            'skills.fuzzy': 'Fuzzy logic',
            'skills.ga': 'Genetic algorithms',
            'skills.seg': 'Adaptive segmentation',
            'skills.bilateral': 'Bilateral filter',
            'skills.morph': 'Morphology',
            'skills.modular': 'Modular architecture',
            'skills.patterns': 'Design patterns',

            'thesis.kicker': '05 · Thesis / Publications',
            'thesis.h2': 'Thesis',
            'thesis.cat': 'Academic Research',
            'thesis.title': 'ANFIS System for Automatic Detection of Brain Tumors in Magnetic Resonance Imaging',
            'thesis.desc': 'Undergraduate thesis developing a binary classification system for the automatic detection of brain tumors in magnetic resonance imaging (MRI). The work implements a six-layer Adaptive Neuro-Fuzzy Inference System (ANFIS) with Sugeno architecture, trained in a hybrid manner using Particle Swarm Optimization (PSO) for non-linear parameters and least squares (LSE) for the consequents. It includes image preprocessing, GLCM texture extraction, an explainability layer (XAI) that interprets the most relevant fuzzy rules, and a graphical user interface, prioritizing clinical interpretability of the diagnosis.',
            'thesis.btn': 'Read / Download Full Thesis',

            'edu.kicker': '06 · Education',
            'edu.h2': 'Education & Certifications',
            'edu.title': 'Computer Science Engineering',
            'edu.place': 'Universidad Católica de Temuco · Information Technology Mention',
            'edu.date': 'Mar 2020 — May 2025 · Graduated',
            'cert.verify': 'Verify ↗',
            'cert.ef.title': 'English Certificate',
            'cert.ef.desc': 'C2 Proficient · Score 76/100',
            'cert.py1.title': 'Python Intermediate / Advanced',
            'cert.py1.desc': 'Python programming training',
            'cert.py2.title': 'Python Basic: Data Processing',
            'cert.py2.desc': 'Python data processing training',
            'cert.pbi1.title': 'Power BI Basic',
            'cert.pbi1.desc': 'Data visualization training',
            'cert.pbi2.title': 'Power BI Intermediate',
            'cert.pbi2.desc': 'Data analysis and visualization training',
            'cert.pbi3.title': 'Power BI Advanced',
            'cert.pbi3.desc': 'Data analysis training · In progress',
            'cert.sap.title': 'SAP ERP',
            'cert.sap.desc': 'ERP systems training · In progress',

            'contact.kicker': '07 · Contact',
            'contact.h2': "Let's talk",
            'contact.phone': 'Phone',

            'footer.text': 'José Miguel Alderete López · Built with <span class="heart">♥</span> on GitHub Pages',

            'alt.anfis.gui': 'ANFIS application GUI',
            'alt.anfis.eval': 'ANFIS model evaluation and metrics',
            'alt.kub': 'HA architecture diagram of the Kubernetes cluster',
            'alt.inc.a': 'Forest fire agent grid simulation',
            'alt.inc.b': 'Cell evolution throughout the simulation',
            'alt.inc.c': 'Forest state at step 100 of the simulation',

            'gh.anfis': 'ANFIS on GitHub',
            'gh.ind': 'Industrial Analytics on GitHub',
            'gh.kub': 'Kuber_HA on GitHub',
            'gh.inc': 'Fire simulation on GitHub',
            'gh.gen': 'Genetic algorithm on GitHub',

            'lb.dialog': 'Image viewer',
            'lb.close': 'Close',
            'lb.prev': 'Previous',
            'lb.next': 'Next'
        }
    };

    const DEFAULT_LANG = 'es';
    const STORAGE_KEY = 'lang';

    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved && translations[saved] ? saved : DEFAULT_LANG;
    }

    function apply(lang) {
        const dict = translations[lang] || translations[DEFAULT_LANG];
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            const key = el.getAttribute('data-i18n-alt');
            if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
        });

        const cvBtn = document.getElementById('cvBtn');
        if (cvBtn && dict.cvHref) cvBtn.setAttribute('href', dict.cvHref);

        const toggle = document.getElementById('langToggle');
        if (toggle) toggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    function toggle() {
        const next = getLang() === 'es' ? 'en' : 'es';
        localStorage.setItem(STORAGE_KEY, next);
        apply(next);
    }

    apply(getLang());
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggle);
})();
