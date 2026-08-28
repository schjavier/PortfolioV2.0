export const translationsDictionary = {
  es: {
    header: {
      downloadCv: 'Descargar CV',
      cvFile: '/JavierSchettini-Es.pdf'
    },
    tutorial:{
      button : `Saltar`
    },
    home: {
      welcomeMessage: '¡Bienvenido a mi portafolio! Clickea en las etiquetas de los commits para ir a la sección correspondiente.'
    },
    aboutMe: {
      title: '¡Hola! Gracias por visitar mi portafolio.',
      p1: 'Soy Javier Schettini, Desarrollador Full Stack con una fuerte inclinación hacia el Backend.',
      p2: 'Mi motor diario es la <strong>resolución de problemas complejos</strong> y el <strong>aprendizaje continuo</strong> de nuevas tecnologías. Mi curiosidad por la informática nació frente a la mítica 286 de mi padre y se consolidó creando mis primeras páginas web a finales de los \'90.',
      p3: 'Aunque mi camino profesional ha tenido diversas etapas, esa chispa tecnológica siempre fue mi brújula.',
      p4: 'Desde 2023, decidió volcar toda esa experiencia y madurez en mi verdadero propósito: desarrollar sistemas que resuelvan problemas reales.',
      p5: 'Me apasiona crear herramientas que reduzcan tiempos de ejecución, automaticen procesos repetitivos y den visibilidad estratégica a los negocios a través del código.',
      p6: 'Hoy, combino esa fascinación técnica que tengo desde niño con una formación constante en Java y Spring Boot, enfocado en <strong>entregar software robusto, mantenible y, sobre todo, útil.</strong>',
      backLink: '..:: VOLVER ::..'
    },
    experience: {
      title: 'Experiencia Profesional',
      freelance: {
        role: 'Desarrollador Full Stack Independiente (Freelance)',
        project: 'Sistema de Gestión Comercial "Brotes"',
        date: '2023 - Presente (En Producción)',
        description: 'Diseño, desarrollo e implementación a medida de un sistema de administración comercial para optimizar la gestión operativa de pedidos y la administración de clientes.',
        bullet1: '<span>Automatización:</span> Diseñé e implementé el flujo automatizado de remitos y comandas, logrando una reducción del 30% en el tiempo de procesamiento administrativo manual del negocio.',
        bullet2: '<span>Calidad y Estabilidad:</span> Desarrollé una suite de pruebas unitarias y de integración utilizando JUnit y Mockito, garantizando el correcto funcionamiento y estabilidad de los flujos críticos del sistema.',
        bullet3: '<span>Mantenimiento en Producción:</span> Administro activamente el ciclo de vida del sistema, implementando mejoras operativas continuas y optimización de bases de datos en MySQL.'
      },
      backend: {
        role: 'Desarrollador Backend (Java / Spring Boot)',
        project: 'Diseño de APIs y Microservicios',
        date: '2023 - Presente',
        description: 'Desarrollo de arquitecturas backend robustas, escalables y desacopladas para la gestión de datos y lógica de negocios.',
        bullet1: '<span>Microservicios y Automatización:</span> Diseñé e implementé el servicio independiente EmailSender utilizando Spring Boot y JavaMailSender para gestionar notificaciones y envíos automatizados de formularios web de forma segura.',
        bullet2: '<span>Diseño de APIs RESTful:</span> Implementación de APIs estructuradas en capas, priorizando el aislamiento de componentes y la gestión segura de variables de entorno.',
        bullet3: '<span>Gestión de Datos:</span> Modelado y normalización de bases de datos relacionales, optimizando consultas para agilizar los tiempos de respuesta de la aplicación.'
      },
      frontend: {
        role: 'Desarrollador Frontend & Sitios Web',
        project: 'Interfaces de Alto Rendimiento (Astro / Angular)',
        date: '2023 - Presente',
        description: 'Maquetación y desarrollo de sitios web veloces, optimizados y orientados a brindar la mejor experiencia de usuario.',
        bullet1: '<span>Rendimiento con Astro:</span> Creación de landing pages and sitios web altamente optimizados para SEO utilizando Astro, garantizando tiempos de carga mínimos y una excelente accesibilidad web.',
        bullet2: '<span>Interfaces Reactivas con Angular:</span> Desarrollo de componentes interactivos standalone empleando Angular, priorizando la reactividad fluida mediante Signals para el manejo eficiente de estados.'
      },
      backLink: '..:: VOLVER ::..'
    },
    education: {
      title: 'Formación Académica',
      bootcamps: {
        role: 'Bootcamps & Especializaciones',
        career: 'Oracle Next Education (ONE) - Frontend & Backend',
        institution: 'Oracle & Alura Latam',
        date: '2023 - 2024',
        description: 'Especialización intensiva enfocada en el desarrollo backend con Java y Spring Boot, y bases sólidas de frontend en desarrollo web (HTML, CSS, JS). Experiencia práctica aplicando metodologías ágiles y control de versiones con Git.'
      },
      tecnicatura: {
        role: 'Educación Universitaria',
        career: 'Tecnicatura Universitaria en Programación',
        institution: 'Universidad Tecnológica Nacional (UTN)',
        date: 'En curso',
        description: 'Formación académica estructurada en desarrollo de software. Adquisición de bases sólidas en algoritmos, estructuras de datos, programación orientada a objetos (POO), modelado de bases de datos SQL/NoSQL y metodologías de diseño de sistemas.'
      },
      notFound: 'Sección de formación no encontrada.',
      backLink: '..:: VOLVER ::..'
    },
    contact: {
      title: 'Contacto',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      sendButton: 'Enviar Mensaje',
      emailValidationError: 'Por favor, introduce un email válido.',
      backLink: '..:: VOLVER ::..'
    },
    projects: {
      title: 'Proyectos',
      notFound: 'todavia no hay nada',
      brotes: {
        title: 'Brotes',
        bullet1: '<span>Diseño de API RESTful escalable:</span> Implementación de arquitectura en capas (Controller-Service-Repository) utilizando Java 17 y Spring Boot.',
        bullet2: '<span>Garantía de Calidad (QA):</span> Desarrollo de una suite de pruebas unitarias e integración con JUnit y Mockito, asegurando la estabilidad de los flujos de pedidos y gestión de clientes.',
        bullet3: '<span>Optimización de Base de Datos:</span> Modelado y normalización de esquemas en MySQL, eliminando redundancias y mejorando la integridad referencial del sistema.',
        bullet4: '<span>Eficiencia Operativa:</span> Automatización del flujo de remitos, logrando una reducción del 30% en el tiempo de procesamiento manual.',
        backRepo: '-> Repo Backend <-',
        frontRepo: '-> Repo Frontend <-'
      },
      emailsender: {
        title: 'EmailSender (Microservicio de Notificaciones)',
        bullet1: '<span>Desarrollo de Microservicio Independiente:</span> Creación de un servicio desacoplado para el envío de correos mediante formularios web.',
        bullet2: '<span>Key Tech:</span> Spring Boot, JavaMailSender.',
        bullet3: '<span>Seguridad y Mantenibilidad:</span> Implementación de validaciones robustas y gestión de configuración mediante variables de entorno para entornos productivos.',
        repoLink: '-> Repositorio <-'
      }
    }
  },
  en: {
    header: {
      downloadCv: 'Download CV',
      cvFile: '/JavierSchettini-En.pdf'
    },
    tutorial:{
      button : `Skip`
    },
    home: {
      welcomeMessage: 'Welcome to my portfolio! Click on the commit tags to navigate to the corresponding section.'
    },
    aboutMe: {
      title: 'Hello! Thank you for visiting my portfolio.',
      p1: 'I am Javier Schettini, a Full Stack Developer with a strong focus on Backend.',
      p2: 'My daily driver is <strong>solving complex problems</strong> and <strong>continuously learning</strong> new technologies. My curiosity for computing started in front of my father\'s legendary 286 computer and was consolidated by creating my first web pages in the late 90s.',
      p3: 'Although my professional path has had different phases, that tech spark has always been my compass.',
      p4: 'Since 2023, I decided to channel all that experience and maturity into my true purpose: developing systems that solve real-world problems.',
      p5: 'I am passionate about creating tools that reduce execution times, automate repetitive processes, and provide strategic business visibility through code.',
      p6: 'Today, I combine that childhood tech fascination with constant training in Java and Spring Boot, focusing on <strong>delivering robust, maintainable, and above all, useful software.</strong>',
      backLink: '..:: BACK ::..'
    },
    experience: {
      title: 'Professional Experience',
      freelance: {
        role: 'Freelance Full Stack Developer',
        project: 'Commercial Management System "Brotes"',
        date: '2023 - Present (In Production)',
        description: 'Custom design, development, and implementation of a commercial administration system to optimize order processing and customer management operations.',
        bullet1: '<span>Automation:</span> Designed and implemented the automated flow for invoices and tickets, achieving a 30% reduction in manual administrative processing times.',
        bullet2: '<span>Quality and Stability:</span> Developed a comprehensive unit and integration testing suite using JUnit and Mockito, ensuring the stability and correct operation of critical system flows.',
        bullet3: '<span>Production Maintenance:</span> Actively manage the application lifecycle, deploying continuous operational improvements and MySQL database optimizations.'
      },
      backend: {
        role: 'Backend Developer (Java / Spring Boot)',
        project: 'API & Microservices Design',
        date: '2023 - Present',
        description: 'Development of robust, scalable, and decoupled backend architectures for data management and business logic.',
        bullet1: '<span>Microservices and Automation:</span> Designed and implemented the independent EmailSender service using Spring Boot and JavaMailSender to securely handle notifications and automated web form submissions.',
        bullet2: '<span>RESTful API Design:</span> Implemented layered APIs, prioritizing component isolation and secure environment variable management.',
        bullet3: '<span>Data Management:</span> Relational database modeling and normalization, optimizing queries to improve application response times.'
      },
      frontend: {
        role: 'Frontend & Web Developer',
        project: 'High Performance Interfaces (Astro / Angular)',
        date: '2023 - Present',
        description: 'Layout and development of fast, optimized websites oriented towards delivering the best user experience.',
        bullet1: '<span>Performance with Astro:</span> Built highly optimized landing pages and websites for SEO using Astro, ensuring minimal loading times and excellent web accessibility.',
        bullet2: '<span>Reactive Interfaces with Angular:</span> Developed standalone interactive components using Angular, prioritizing smooth reactivity through Signals for efficient state management.'
      },
      backLink: '..:: BACK ::..'
    },
    education: {
      title: 'Academic Background',
      bootcamps: {
        role: 'Bootcamps & Specializations',
        career: 'Oracle Next Education (ONE) - Frontend & Backend',
        institution: 'Oracle & Alura Latam',
        date: '2023 - 2024',
        description: 'Intensive specialization focused on backend development with Java and Spring Boot, and solid frontend web development fundamentals (HTML, CSS, JS). Practical experience applying agile methodologies and version control with Git.'
      },
      tecnicatura: {
        role: 'University Education',
        career: 'Associate Degree in Software Programming',
        institution: 'National Technological University (UTN)',
        date: 'In progress',
        description: 'Structured academic education in software development. Acquisition of solid foundations in algorithms, data structures, object-oriented programming (OOP), relational and non-relational database modeling, and system design methodologies.'
      },
      notFound: 'Education section not found.',
      backLink: '..:: BACK ::..'
    },
    contact: {
      title: 'Contact',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButton: 'Send Message',
      emailValidationError: 'Please enter a valid email address.',
      backLink: '..:: BACK ::..'
    },
    projects: {
      title: 'Projects',
      notFound: 'there is nothing here yet',
      brotes: {
        title: 'Brotes',
        bullet1: '<span>Scalable RESTful API Design:</span> Implementation of layered architecture (Controller-Service-Repository) using Java 17 and Spring Boot.',
        bullet2: '<span>Quality Assurance (QA):</span> Development of a unit and integration testing suite with JUnit and Mockito, ensuring stability in order and customer management flows.',
        bullet3: '<span>Database Optimization:</span> MySQL schema modeling and normalization, eliminating redundancies and improving system referential integrity.',
        bullet4: '<span>Operational Efficiency:</span> Automation of the delivery note flow, achieving a 30% reduction in manual processing time.',
        backRepo: '-> Backend Repo <-',
        frontRepo: '-> Frontend Repo <-'
      },
      emailsender: {
        title: 'EmailSender (Notification Microservice)',
        bullet1: '<span>Independent Microservice Development:</span> Creation of a decoupled service for sending emails via web forms.',
        bullet2: '<span>Key Tech:</span> Spring Boot, JavaMailSender.',
        bullet3: '<span>Security and Maintainability:</span> Implementation of robust validations and configuration management through environment variables for production environments.',
        repoLink: '-> Repository <-'
      }
    }
  }
};
