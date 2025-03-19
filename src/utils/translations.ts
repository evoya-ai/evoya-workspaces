import { Language } from '../contexts/LanguageContext';

// Translation dictionary type
type TranslationDictionary = {
  [key: string]: {
    de: string;
    en: string;
  };
};

// All translations for the application
export const translations: TranslationDictionary = {
  // Navigation
  nav_features: {
    de: 'Funktionen',
    en: 'Features',
  },
  nav_benefits: {
    de: 'Vorteile',
    en: 'Benefits',
  },
  nav_services: {
    de: 'Dienstleistungen',
    en: 'Services',
  },
  nav_comparison: {
    de: 'Vergleich',
    en: 'Comparison',
  },
  nav_pricing: {
    de: 'Preise',
    en: 'Pricing',
  },
  nav_contact: {
    de: 'Kontakt',
    en: 'Contact',
  },

  // Hero Section
  hero_badge: {
    de: 'Innovativ. Kollaborativ. Sicher.',
    en: 'Innovative. Collaborative. Secure.',
  },
  hero_title1: {
    de: 'Optimieren Sie',
    en: 'Optimize Your',
  },
  hero_title2: {
    de: 'Arbeitsabläufe',
    en: 'Workflows',
  },
  hero_title3: {
    de: 'mit KI-gestützten',
    en: 'with AI-powered',
  },
  hero_title4: {
    de: 'Workspaces',
    en: 'Workspaces',
  },
  hero_description: {
    de: 'Evoya AI Workspaces ermöglichen die direkte Zusammenarbeit mit KI – für effiziente Texterstellung, Dokumentenanalyse, Live-Recherchen und visuelle Darstellungen.',
    en: 'Evoya AI Workspaces enable direct collaboration with AI – for efficient text creation, document analysis, live research, and visual representations.',
  },
  hero_demo: {
    de: 'Demo vereinbaren',
    en: 'Schedule a Demo',
  },
  hero_start: {
    de: 'Kostenlos starten',
    en: 'Start for Free',
  },

  // Features Section
  features_badge: {
    de: 'Funktionen',
    en: 'Features',
  },
  features_title: {
    de: 'Moderne KI-Tools für Ihren',
    en: 'Modern AI Tools for Your',
  },
  features_title_colored: {
    de: 'Geschäftserfolg',
    en: 'Business Success',
  },
  features_description: {
    de: 'Unsere KI-Workspaces bieten eine umfassende Suite von Tools, die Ihre Arbeitsabläufe vereinfachen und Ihre Produktivität steigern.',
    en: 'Our AI Workspaces offer a comprehensive suite of tools that simplify your workflows and boost your productivity.',
  },
  
  // Feature Cards
  feature_text_generation: {
    de: 'Textgenerierung',
    en: 'Text Generation',
  },
  feature_text_generation_desc: {
    de: 'Erstellen, optimieren und übersetzen Sie Texte mit KI – von Geschäftsberichten bis hin zu kreativen Inhalten.',
    en: 'Create, optimize, and translate texts with AI – from business reports to creative content.',
  },
  feature_image_generation: {
    de: 'Bildgenerierung',
    en: 'Image Generation',
  },
  feature_image_generation_desc: {
    de: 'Erzeugen Sie hochwertige Bilder für Marketing, Präsentationen und Dokumente mit DALL·E und Flux.',
    en: 'Generate high-quality images for marketing, presentations, and documents with DALL·E and Flux.',
  },
  feature_image_recognition: {
    de: 'Bilderkennung & Analyse',
    en: 'Image Recognition & Analysis',
  },
  feature_image_recognition_desc: {
    de: 'Extrahieren und analysieren Sie Informationen aus Bildern – von OCR für Dokumente bis zur Erkennung von Objekten.',
    en: 'Extract and analyze information from images – from OCR for documents to object recognition.',
  },
  feature_document_analysis: {
    de: 'Dokumentenanalyse',
    en: 'Document Analysis',
  },
  feature_document_analysis_desc: {
    de: 'Durchsuchen und strukturieren Sie grosse Dokumentenmengen in Sekunden – inklusive Datenextraktion und Zusammenfassung.',
    en: 'Search and structure large document collections in seconds – including data extraction and summarization.',
  },
  feature_live_search: {
    de: 'Live-Informationsabruf',
    en: 'Live Information Retrieval',
  },
  feature_live_search_desc: {
    de: 'Recherchieren Sie in Echtzeit im Internet und erhalten Sie direkt aufbereitete, mit Quellenangaben versehene Ergebnisse.',
    en: 'Research in real-time on the internet and receive directly prepared results with source references.',
  },
  feature_diagrams: {
    de: 'Diagramme & Visuelle Darstellungen',
    en: 'Charts & Visual Representations',
  },
  feature_diagrams_desc: {
    de: 'Erstellen Sie interaktive Diagramme zur Visualisierung von Prozessen, Abläufen und Konzepten.',
    en: 'Create interactive diagrams to visualize processes, workflows, and concepts.',
  },

  // Services Section
  services_badge: {
    de: 'Dienstleistungen',
    en: 'Services',
  },
  services_title: {
    de: 'Massgeschneiderte Lösungen für',
    en: 'Customized Solutions for',
  },
  services_title_colored: {
    de: 'Ihre Anforderungen',
    en: 'Your Requirements',
  },
  services_description: {
    de: 'Wir bieten umfassende Dienstleistungen, um Ihr Unternehmen bei der Integration und Nutzung von KI-Technologien zu unterstützen.',
    en: 'We offer comprehensive services to support your company in the integration and use of AI technologies.',
  },
  
  // Training & Workshops
  training_title: {
    de: 'Trainings & Workshops',
    en: 'Training & Workshops',
  },
  training_description: {
    de: 'Professionelle Schulungen zur effektiven Nutzung von KI-Technologien im Geschäftsalltag. Unsere Experten vermitteln praxisnahes Wissen und Fähigkeiten.',
    en: 'Professional training for effective use of AI technologies in everyday business. Our experts provide practical knowledge and skills.',
  },
  training_basics: {
    de: 'Grundlagen-Workshops',
    en: 'Basic Workshops',
  },
  training_basics_desc: {
    de: 'Einführung in KI-Konzepte und praktische Anwendung in Ihrem Unternehmen.',
    en: 'Introduction to AI concepts and practical application in your company.',
  },
  training_specialized: {
    de: 'Spezialisierte Trainings',
    en: 'Specialized Training',
  },
  training_specialized_desc: {
    de: 'Vertiefte Schulungen zu spezifischen KI-Anwendungsbereichen wie Textgenerierung oder Bildanalyse.',
    en: 'In-depth training on specific AI application areas such as text generation or image analysis.',
  },
  training_ongoing: {
    de: 'Laufende Betreuung',
    en: 'Ongoing Support',
  },
  training_ongoing_desc: {
    de: 'Kontinuierliche Unterstützung und Updates zu neuen Funktionen und Best Practices.',
    en: 'Continuous support and updates on new features and best practices.',
  },
  
  // Custom AI Agents
  agents_title: {
    de: 'Individuelle KI-Agenten',
    en: 'Custom AI Agents',
  },
  agents_description: {
    de: 'Massgeschneiderte Lösungen zur Automatisierung von Routineaufgaben und zur Unterstützung spezifischer Geschäftsanforderungen.',
    en: 'Tailored solutions for automating routine tasks and supporting specific business requirements.',
  },
  agents_analysis: {
    de: 'Bedarfsanalyse',
    en: 'Needs Analysis',
  },
  agents_analysis_desc: {
    de: 'Gründliche Analyse Ihrer Geschäftsprozesse und Anforderungen.',
    en: 'Thorough analysis of your business processes and requirements.',
  },
  agents_development: {
    de: 'Massgeschneiderte Entwicklung',
    en: 'Custom Development',
  },
  agents_development_desc: {
    de: 'Entwicklung personalisierter KI-Agenten für Ihre spezifischen Geschäftsprozesse.',
    en: 'Development of personalized AI agents for your specific business processes.',
  },
  agents_integration: {
    de: 'Integration & Support',
    en: 'Integration & Support',
  },
  agents_integration_desc: {
    de: 'Nahtlose Integration in Ihre bestehende IT-Infrastruktur und kontinuierliche Betreuung.',
    en: 'Seamless integration into your existing IT infrastructure and continuous support.',
  },
  learn_more: {
    de: 'Mehr erfahren',
    en: 'Learn more',
  },
  
  // Pricing Section
  pricing_badge: {
    de: 'Preisgestaltung',
    en: 'Pricing',
  },
  pricing_title: {
    de: 'Transparente',
    en: 'Transparent',
  },
  pricing_title_colored: {
    de: 'Preise',
    en: 'Pricing',
  },
  pricing_title_end: {
    de: 'für Ihre KI-Workspaces',
    en: 'for Your AI Workspaces',
  },
  pricing_description: {
    de: 'Mit unserem flexiblen Preismodell zahlen Sie nur für das, was Sie wirklich benötigen.',
    en: 'With our flexible pricing model, you only pay for what you really need.',
  },
  pricing_unlimited: {
    de: 'Unlimited',
    en: 'Unlimited',
  },
  pricing_unlimited_desc: {
    de: 'Ihr Komplettpaket für professionelle KI-Workspaces mit allen Funktionen und umfangreichen Ressourcen.',
    en: 'Your complete package for professional AI workspaces with all features and extensive resources.',
  },
  pricing_per_month: {
    de: '/ Monat',
    en: '/ month',
  },
  pricing_credits: {
    de: '2\'500 Credits / Monat',
    en: '2,500 credits / month',
  },
  pricing_users: {
    de: 'Unlimitierte Benutzer (inkl. 2 Admins)',
    en: 'Unlimited users (incl. 2 admins)',
  },
  pricing_agents: {
    de: 'Unlimitierte Workspace-Agenten',
    en: 'Unlimited workspace agents',
  },
  pricing_models: {
    de: 'Alle Sprachmodelle',
    en: 'All language models',
  },
  pricing_datasources: {
    de: 'Datenquellen: 100 Rohtext, 100 URLs, 100 Dateien',
    en: 'Data sources: 100 raw text, 100 URLs, 100 files',
  },
  pricing_features: {
    de: 'Alle Funktionen',
    en: 'All features',
  },
  pricing_tools: {
    de: 'Alle Agenten-Tools',
    en: 'All agent tools',
  },
  pricing_data_update: {
    de: 'Automatische Datenaktualisierung',
    en: 'Automatic data updates',
  },
  pricing_mailboxes: {
    de: '2 Mailboxen',
    en: '2 mailboxes',
  },
  pricing_additional: {
    de: 'Zusätzliche Credits',
    en: 'Additional Credits',
  },
  pricing_additional_desc: {
    de: 'Benötigen Sie mehr? Erhalten Sie 1\'000 zusätzliche Credits für nur CHF 35 pro Monat.',
    en: 'Need more? Get 1,000 additional credits for only CHF 35 per month.',
  },
  pricing_start_free: {
    de: 'Jetzt kostenlos starten',
    en: 'Start free now',
  },
  pricing_no_card: {
    de: 'Keine Kreditkarte notwendig',
    en: 'No credit card required',
  },

  // Contact Section
  contact_badge: {
    de: 'Kontakt',
    en: 'Contact',
  },
  contact_title: {
    de: 'Starten Sie Ihren Weg zur',
    en: 'Start Your Journey to',
  },
  contact_title_colored: {
    de: 'KI-Innovation',
    en: 'AI Innovation',
  },
  contact_description: {
    de: 'Vereinbaren Sie eine kostenlose Demo oder ein Beratungsgespräch. Unser Team hilft Ihnen dabei, die ideale KI-Lösung für Ihr Unternehmen zu finden.',
    en: 'Schedule a free demo or consultation. Our team will help you find the ideal AI solution for your business.',
  },
  contact_email: {
    de: 'Email',
    en: 'Email',
  },
  contact_phone: {
    de: 'Telefon',
    en: 'Phone',
  },
  contact_schedule_demo: {
    de: 'Demo vereinbaren',
    en: 'Schedule a Demo',
  },
  contact_test_workspace: {
    de: 'Workspace testen',
    en: 'Test Workspace',
  },
  
  // Contact Form
  contact_us: {
    de: 'Kontaktieren Sie uns',
    en: 'Contact Us',
  },
  contact_first_name: {
    de: 'Vorname',
    en: 'First Name',
  },
  contact_last_name: {
    de: 'Nachname',
    en: 'Last Name',
  },
  contact_your_first_name: {
    de: 'Ihr Vorname',
    en: 'Your first name',
  },
  contact_your_last_name: {
    de: 'Ihr Nachname',
    en: 'Your last name',
  },
  contact_your_email: {
    de: 'Ihre E-Mail-Adresse',
    en: 'Your email address',
  },
  contact_company: {
    de: 'Unternehmen',
    en: 'Company',
  },
  contact_your_company: {
    de: 'Ihr Unternehmen',
    en: 'Your company',
  },
  contact_message: {
    de: 'Nachricht',
    en: 'Message',
  },
  contact_your_message: {
    de: 'Ihre Nachricht oder Anfrage',
    en: 'Your message or inquiry',
  },
  contact_send: {
    de: 'Nachricht senden',
    en: 'Send Message',
  },
  contact_sending: {
    de: 'Wird gesendet...',
    en: 'Sending...',
  },
  contact_success_title: {
    de: 'Nachricht gesendet!',
    en: 'Message Sent!',
  },
  contact_success_message: {
    de: 'Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.',
    en: 'Thank you for your message. We will get back to you as soon as possible.',
  },
  contact_new_form: {
    de: 'Neues Formular',
    en: 'New Form',
  },
  
  // Footer
  footer_slogan: {
    de: 'Empowering Businesses with Practical AI Solutions',
    en: 'Empowering Businesses with Practical AI Solutions',
  },
  footer_contact: {
    de: 'Kontakt',
    en: 'Contact',
  },
  footer_copyright: {
    de: '© 2025 Evoya AI GmbH. Alle Rechte vorbehalten.',
    en: '© 2025 Evoya AI GmbH. All rights reserved.',
  },
  footer_privacy: {
    de: 'Datenschutz',
    en: 'Privacy Policy',
  },
  footer_terms: {
    de: 'AGB',
    en: 'Terms',
  },
  footer_imprint: {
    de: 'Impressum',
    en: 'Imprint',
  },
  
  // Agent Framework
  agent_badge: {
    de: 'Agentic Framework',
    en: 'Agentic Framework',
  },
  agent_title: {
    de: 'KI-Agenten für intelligente',
    en: 'AI Agents for Intelligent',
  },
  agent_title_colored: {
    de: 'Prozessoptimierung',
    en: 'Process Optimization',
  },
  agent_description: {
    de: 'Evoya-Agenten basieren auf einem durchdachten Framework, das es ihnen ermöglicht, komplexe Aufgaben effizient zu lösen und nahtlos mit Menschen und anderen Systemen zu interagieren.',
    en: 'Evoya agents are based on a sophisticated framework that enables them to efficiently solve complex tasks and interact seamlessly with humans and other systems.',
  },
  agent_what_are: {
    de: 'Was sind KI-Agenten?',
    en: 'What are AI Agents?',
  },
  agent_what_are_desc: {
    de: 'KI-Agenten sind intelligente Softwareeinheiten, die eigenständig Aufgaben ausführen und komplexe Probleme lösen können.',
    en: 'AI agents are intelligent software units that can perform tasks independently and solve complex problems.',
  },
  agent_framework_title: {
    de: 'Das Agentic Framework',
    en: 'The Agentic Framework',
  },
  agent_framework_desc: {
    de: 'Unser Agentic Framework bildet die Grundlage aller Evoya-Agenten. Es kombiniert sechs Kernkomponenten, die zusammen einen leistungsfähigen KI-Agenten bilden, der komplexe Aufgaben intelligent bearbeiten kann.',
    en: 'Our Agentic Framework forms the foundation of all Evoya agents. It combines six core components that together form a powerful AI agent that can intelligently process complex tasks.',
  },
  agent_instructions: {
    de: 'Instruktionen & Persona',
    en: 'Instructions & Persona',
  },
  agent_instructions_desc: {
    de: 'Diese Komponenten bilden den "Charakter" des Agenten. Die Instruktionen definieren die Aufgabe und das Ziel, während die Persona bestimmt, wie der Agent kommuniziert und interagiert.',
    en: 'These components form the "character" of the agent. The instructions define the task and goal, while the persona determines how the agent communicates and interacts.',
  },
  agent_model: {
    de: 'Sprachmodell & Wissen',
    en: 'Language Model & Knowledge',
  },
  agent_model_desc: {
    de: 'Das Sprachmodell (LLM) ist das "Gehirn" des Agenten und nutzt spezialisiertes Wissen, um präzise und kontextbezogene Lösungen für komplexe Aufgaben zu generieren.',
    en: 'The language model (LLM) is the "brain" of the agent and uses specialized knowledge to generate precise and context-related solutions for complex tasks.',
  },
  agent_tools: {
    de: 'Tools & Interface',
    en: 'Tools & Interface',
  },
  agent_tools_desc: {
    de: 'Tools erweitern die Handlungsfähigkeit des Agenten, während das Interface die Kommunikation mit Menschen, anderen Systemen oder APIs ermöglicht und so die praktische Anwendung sicherstellt.',
    en: 'Tools expand the agent\'s ability to act, while the interface enables communication with humans, other systems, or APIs, ensuring practical application.',
  },
  agent_structure: {
    de: 'Aufbau des Agentic Frameworks',
    en: 'Structure of the Agentic Framework',
  },
  agent_usecases: {
    de: 'Einsatzmöglichkeiten des Frameworks',
    en: 'Use Cases for the Framework',
  },
  agent_usecases_desc: {
    de: 'Unser Agentic Framework kann je nach Anforderung unterschiedlich eingesetzt werden. Hier sind die zwei Hauptanwendungsfälle:',
    en: 'Our Agentic Framework can be used differently depending on requirements. Here are the two main use cases:',
  },
  agent_workspace: {
    de: 'Workspace-Agenten',
    en: 'Workspace Agents',
  },
  agent_workspace_desc: {
    de: 'Diese Agenten sind direkt einsatzbereit und für spezifische Aufgaben optimiert:',
    en: 'These agents are ready to use and optimized for specific tasks:',
  },
  agent_workspace_bullet1: {
    de: 'Sofort nutzbar ohne komplexe Konfiguration',
    en: 'Immediately usable without complex configuration',
  },
  agent_workspace_bullet2: {
    de: 'Ideal für Texterstellung, Übersetzungen oder Analysen',
    en: 'Ideal for text creation, translations, or analyses',
  },
  agent_workspace_bullet3: {
    de: 'Standardisierte Funktionen mit intuitiver Bedienung',
    en: 'Standardized functions with intuitive operation',
  },
  agent_workspace_bullet4: {
    de: 'Perfekt für tägliche Arbeitsabläufe und wiederkehrende Aufgaben',
    en: 'Perfect for daily workflows and recurring tasks',
  },
  agent_autonomous: {
    de: 'Autonome Agenten & Prozesse',
    en: 'Autonomous Agents & Processes',
  },
  agent_autonomous_desc: {
    de: 'Diese fortschrittlichen Lösungen automatisieren komplexe Workflows:',
    en: 'These advanced solutions automate complex workflows:',
  },
  agent_autonomous_bullet1: {
    de: 'Individuell anpassbar an spezifische Geschäftsprozesse',
    en: 'Individually adaptable to specific business processes',
  },
  agent_autonomous_bullet2: {
    de: 'Automatisieren mehrstufige Arbeitsabläufe end-to-end',
    en: 'Automate multi-stage workflows end-to-end',
  },
  agent_autonomous_bullet3: {
    de: 'Skalierbar je nach Anforderung und Komplexität',
    en: 'Scalable according to requirements and complexity',
  },
  agent_autonomous_bullet4: {
    de: 'Integrierbar in bestehende Systeme und Infrastrukturen',
    en: 'Integrable into existing systems and infrastructures',
  },
  
  // Language Selector
  language_switch: {
    de: 'EN',
    en: 'DE',
  },
  
  // DetailedFeatures Section
  detailed_features_badge: {
    de: 'Detaillierte Funktionen',
    en: 'Detailed Features',
  },
  detailed_features_title: {
    de: 'Entdecken Sie die umfassenden',
    en: 'Discover the comprehensive',
  },
  detailed_features_title_colored: {
    de: 'Möglichkeiten',
    en: 'capabilities',
  },
  detailed_features_title_colored_suffix: {
    de: 'der Evoya AI Workspaces',
    en: 'of Evoya AI Workspaces',
  },
  detailed_features_description: {
    de: 'Unsere intelligenten Werkzeuge unterstützen Sie bei der Effizienzsteigerung in allen Geschäftsbereichen. Erfahren Sie mehr über jede einzelne Funktion.',
    en: 'Our intelligent tools support you in increasing efficiency in all business areas. Learn more about each individual function.',
  },
  detailed_coming_soon: {
    de: 'Coming Soon',
    en: 'Coming Soon',
  },
  
  // Text Generation
  detailed_text_generation_title: {
    de: 'Textgenerierung',
    en: 'Text Generation',
  },
  detailed_text_generation_desc: {
    de: 'Nutzen Sie KI-Assistenz für alle textbasierten Anwendungsfälle - vom ersten Entwurf bis zur finalen Überarbeitung.',
    en: 'Use AI assistance for all text-based use cases - from the first draft to the final revision.',
  },
  detailed_text_generation_bullet1: {
    de: 'Erstellen vollständiger Texte wie Artikel, Berichte und Geschäftsbriefe auf Basis einfacher Vorgaben',
    en: 'Create complete texts such as articles, reports, and business letters based on simple specifications',
  },
  detailed_text_generation_bullet2: {
    de: 'Intelligente Korrektur und Optimierung bestehender Texte mit konkreten Verbesserungsvorschlägen',
    en: 'Intelligent correction and optimization of existing texts with concrete improvement suggestions',
  },
  detailed_text_generation_bullet3: {
    de: 'Unterstützung bei Brainstorming und Ideenfindung für Konzepte und kreative Inhalte',
    en: 'Support for brainstorming and idea generation for concepts and creative content',
  },
  detailed_text_generation_bullet4: {
    de: 'Mehrsprachige Übersetzung und kontextgerechte Anpassung von Texten für eine zielgruppengerechte Kommunikation',
    en: 'Multilingual translation and context-appropriate adaptation of texts for target group-specific communication',
  },
  detailed_text_generation_alt: {
    de: 'Person arbeitet an einem Text-Dokument',
    en: 'Person working on a text document',
  },
  
  // Image Generation
  detailed_image_generation_title: {
    de: 'Bildgenerierung',
    en: 'Image Generation',
  },
  detailed_image_generation_desc: {
    de: 'Erstellen Sie Bilder mit DALL·E und Flux für vielfältige geschäftliche und kreative Zwecke.',
    en: 'Create images with DALL·E and Flux for a variety of business and creative purposes.',
  },
  detailed_image_generation_bullet1: {
    de: 'Generierung von Bildern für Newsletter, Social Media und Marketingmaterialien',
    en: 'Generation of images for newsletters, social media, and marketing materials',
  },
  detailed_image_generation_bullet2: {
    de: 'Visuelle Unterstützung für Präsentationen, Berichte und Dokumentationen',
    en: 'Visual support for presentations, reports, and documentation',
  },
  detailed_image_generation_bullet3: {
    de: 'Erstellung von Illustrationen für interne Schulungsmaterialien und Anleitungen',
    en: 'Creation of illustrations for internal training materials and instructions',
  },
  detailed_image_generation_bullet4: {
    de: 'Flexible Anpassung von Bildformaten und Stilen für unterschiedliche Verwendungszwecke',
    en: 'Flexible adjustment of image formats and styles for different purposes',
  },
  detailed_image_generation_alt: {
    de: 'Generierte Bilder auf einem Display',
    en: 'Generated images on a display',
  },
  
  // Image Recognition
  detailed_image_recognition_title: {
    de: 'Bilderkennung und Analyse',
    en: 'Image Recognition and Analysis',
  },
  detailed_image_recognition_desc: {
    de: 'Automatisieren Sie die Erkennung und Interpretation von Bildern und visuellen Daten für verschiedenste Anwendungsbereiche.',
    en: 'Automate the recognition and interpretation of images and visual data for a wide range of applications.',
  },
  detailed_image_recognition_bullet1: {
    de: 'OCR-Technologie zur Extraktion von handgeschriebenem und gedrucktem Text aus Bildern',
    en: 'OCR technology for extracting handwritten and printed text from images',
  },
  detailed_image_recognition_bullet2: {
    de: 'Analyse und Erkennung von Inhalten auf Screenshots oder Fotos',
    en: 'Analysis and recognition of content on screenshots or photos',
  },
  detailed_image_recognition_bullet3: {
    de: 'Extraktion von relevanten Informationen aus Dokumentenscans oder Belegen',
    en: 'Extraction of relevant information from document scans or receipts',
  },
  detailed_image_recognition_bullet4: {
    de: 'Automatische Identifikation von Objekten oder Strukturen in Bildern',
    en: 'Automatic identification of objects or structures in images',
  },
  detailed_image_recognition_alt: {
    de: 'Bilderkennung durch künstliche Intelligenz',
    en: 'Image recognition through artificial intelligence',
  },
  
  // Document Analysis
  detailed_document_analysis_title: {
    de: 'Dokumentenanalyse',
    en: 'Document Analysis',
  },
  detailed_document_analysis_desc: {
    de: 'Extrahieren und strukturieren Sie relevante Informationen aus verschiedenen Geschäftsdokumenten.',
    en: 'Extract and structure relevant information from various business documents.',
  },
  detailed_document_analysis_bullet1: {
    de: 'Automatische Extraktion von Daten aus Rechnungen, Verträgen, Berichten und Anträgen',
    en: 'Automatic extraction of data from invoices, contracts, reports, and applications',
  },
  detailed_document_analysis_bullet2: {
    de: 'Strukturierung ungeordneter Textinhalte in durchsuchbare, analysierbare Formate',
    en: 'Structuring unorganized text content into searchable, analyzable formats',
  },
  detailed_document_analysis_bullet3: {
    de: 'Intelligente Erkennung von Schlüsselinformationen in komplexen Dokumenten',
    en: 'Intelligent recognition of key information in complex documents',
  },
  detailed_document_analysis_bullet4: {
    de: 'Schnelle Verarbeitung grosser Dokumentenmengen mit automatischer Extraktion und Zusammenfassung relevanter Inhalte',
    en: 'Fast processing of large document volumes with automatic extraction and summarization of relevant content',
  },
  detailed_document_analysis_alt: {
    de: 'Dokumentenanalyse auf einem Laptop',
    en: 'Document analysis on a laptop',
  },
  
  // Live Search
  detailed_live_search_title: {
    de: 'Live-Informationsabruf',
    en: 'Live Information Retrieval',
  },
  detailed_live_search_desc: {
    de: 'Greifen Sie in Echtzeit auf aktuelle Informationen aus dem Internet zu für fundierte Entscheidungen.',
    en: 'Access current information from the internet in real-time for informed decisions.',
  },
  detailed_live_search_bullet1: {
    de: 'KI-Agenten durchsuchen das Internet gezielt nach relevanten Informationen und liefern präzise Rechercheergebnisse',
    en: 'AI agents search the internet specifically for relevant information and deliver precise research results',
  },
  detailed_live_search_bullet2: {
    de: 'Automatische Zusammenfassung und strukturierte Aufbereitung der Rechercheergebnisse mit Quellenangaben',
    en: 'Automatic summarization and structured preparation of research results with source references',
  },
  detailed_live_search_bullet3: {
    de: 'Intelligente Filterung und Kuratierung von Informationen – deutlich über klassische Suchmaschinen hinaus',
    en: 'Intelligent filtering and curation of information – significantly beyond classic search engines',
  },
  detailed_live_search_bullet4: {
    de: 'Echtzeit-Faktenprüfung und Qualitätsanalyse der Quellen für zuverlässige Geschäftsentscheidungen',
    en: 'Real-time fact-checking and quality analysis of sources for reliable business decisions',
  },
  detailed_live_search_alt: {
    de: 'Echtzeitdaten auf einem Dashboard',
    en: 'Real-time data on a dashboard',
  },
  
  // Diagrams
  detailed_diagrams_title: {
    de: 'Diagramme & Visuelle Darstellungen',
    en: 'Charts & Visual Representations',
  },
  detailed_diagrams_desc: {
    de: 'Erstellen Sie automatisiert Diagramme zur Visualisierung von Geschäftsprozessen und Konzepten.',
    en: 'Create automated diagrams to visualize business processes and concepts.',
  },
  detailed_diagrams_bullet1: {
    de: 'Automatische Generierung von Ablaufdiagrammen, Entscheidungsbäumen sowie weiteren Diagrammtypen für verschiedene Anwendungsfälle',
    en: 'Automatic generation of flowcharts, decision trees, and other diagram types for various use cases',
  },
  detailed_diagrams_bullet2: {
    de: 'Intuitive Visualisierung komplexer Prozesse für besseres Verständnis und einfachere Kommunikation',
    en: 'Intuitive visualization of complex processes for better understanding and easier communication',
  },
  detailed_diagrams_bullet3: {
    de: 'Grafische Aufbereitung von Konzepten, Abläufen und Strukturen für unterschiedliche Zielgruppen',
    en: 'Graphical preparation of concepts, processes, and structures for different target groups',
  },
  detailed_diagrams_bullet4: {
    de: 'Datenvisualisierung in verschiedenen Diagrammtypen',
    en: 'Data visualization in various chart types',
  },
  detailed_diagrams_alt: {
    de: 'Visualisierung von Geschäftsprozessen',
    en: 'Visualization of business processes',
  },
  
  // Creator
  detailed_creator_title: {
    de: 'Creator',
    en: 'Creator',
  },
  detailed_creator_desc: {
    de: 'Bearbeiten Sie KI-generierte Inhalte direkt in einem interaktiven Dokumenteneditor – im Gegensatz zu einem herkömmlichen Chat.',
    en: 'Edit AI-generated content directly in an interactive document editor – unlike a conventional chat.',
  },
  detailed_creator_bullet1: {
    de: 'Vollwertiger Dokumenteneditor statt sequentieller Chat-Ansicht, der komplette Texte als bearbeitbares Dokument darstellt',
    en: 'Full-featured document editor instead of sequential chat view, displaying complete texts as an editable document',
  },
  detailed_creator_bullet2: {
    de: 'Selektive Bearbeitung: Markieren und editieren Sie gezielt einzelne Passagen oder ganze Abschnitte mit Vorher/Nachher-Ansicht',
    en: 'Selective editing: Mark and edit specific passages or entire sections with before/after view',
  },
  detailed_creator_bullet3: {
    de: 'Formatierungskontrolle mit Überschriften, Absätzen und Textauszeichnungen direkt im Editor',
    en: 'Formatting control with headings, paragraphs, and text formatting directly in the editor',
  },
  detailed_creator_bullet4: {
    de: 'Interaktive Zusammenarbeit mit der KI innerhalb des Dokuments – nicht nur sequentielle Antworten wie in einem Chat',
    en: 'Interactive collaboration with AI within the document – not just sequential responses as in a chat',
  },
  detailed_creator_alt: {
    de: 'Kreative Bearbeitung von Inhalten',
    en: 'Creative content editing',
  },
  
  // Voice
  detailed_voice_title: {
    de: 'Voice',
    en: 'Voice',
  },
  detailed_voice_desc: {
    de: 'Kommunizieren Sie per Sprache mit dem KI-Agenten und transkribieren Sie gesprochene Inhalte für barrierefreie und schnelle Interaktion.',
    en: 'Communicate by voice with the AI agent and transcribe spoken content for accessible and fast interaction.',
  },
  detailed_voice_bullet1: {
    de: 'Direkte Sprach-Interaktion mit dem KI-Agenten ohne Tippen – ideal für unterwegs oder bei eingeschränkter Mobilität',
    en: 'Direct voice interaction with the AI agent without typing – ideal when on the go or with limited mobility',
  },
  detailed_voice_bullet2: {
    de: 'Präzise Echtzeit-Transkription von Meetings und Gesprächen mit automatischer Protokollerstellung',
    en: 'Precise real-time transcription of meetings and conversations with automatic protocol creation',
  },
  detailed_voice_bullet3: {
    de: 'Mehrsprachige Unterstützung für internationale Teams und Kommunikation in verschiedenen Sprachen',
    en: 'Multilingual support for international teams and communication in different languages',
  },
  detailed_voice_bullet4: {
    de: 'Barrierefreie Nutzung für Menschen mit Sehbehinderungen oder eingeschränkter Tastaturnutzung',
    en: 'Accessible use for people with visual impairments or limited keyboard use',
  },
  detailed_voice_alt: {
    de: 'Spracherkennung und Transkription',
    en: 'Voice recognition and transcription',
  },
  
  // Semantic Knowledge Base
  detailed_semantic_badge: {
    de: 'Intelligente Informationsverarbeitung',
    en: 'Intelligent Information Processing',
  },
  detailed_semantic_title: {
    de: 'Semantische Wissensbasis',
    en: 'Semantic Knowledge Base',
  },
  detailed_semantic_description: {
    de: 'Semantische Verarbeitung verschiedener Dokumentformate und Webinhalte für präzise, kontextbasierte Informationsextraktion und -verknüpfung.',
    en: 'Semantic processing of various document formats and web content for precise, context-based information extraction and linking.',
  },
  detailed_semantic_center: {
    de: 'Semantische Analyse',
    en: 'Semantic Analysis',
  },
  detailed_semantic_documents: {
    de: 'Dokumente',
    en: 'Documents',
  },
  detailed_semantic_web: {
    de: 'Webinhalte',
    en: 'Web Content',
  },
  detailed_semantic_search: {
    de: 'Präzise Suche',
    en: 'Precise Search',
  },
  detailed_semantic_api: {
    de: 'API',
    en: 'API',
  },
  detailed_semantic_efficiency: {
    de: 'Steigern Sie die Effizienz Ihrer Teams um bis zu 30% durch präzise Informationsextraktion.',
    en: 'Increase your teams\' efficiency by up to 30% through precise information extraction.',
  },
  detailed_semantic_processing_title: {
    de: 'Intelligente Verarbeitung von Unternehmenswissen',
    en: 'Intelligent Processing of Company Knowledge',
  },
  detailed_semantic_processing_desc: {
    de: 'Unsere semantische Wissensbasis transformiert unstrukturierte Daten in vernetzte, contextreiche Informationen - die Grundlage für präzise KI-Anwendungen und datengesteuerte Entscheidungen in Ihrem Unternehmen.',
    en: 'Our semantic knowledge base transforms unstructured data into networked, context-rich information - the foundation for precise AI applications and data-driven decisions in your company.',
  },
  detailed_semantic_multiformat_title: {
    de: 'Multiformat-Verarbeitung',
    en: 'Multi-format Processing',
  },
  detailed_semantic_multiformat_desc: {
    de: 'Automatische Extraktion von Wissen aus PDFs, Word-Dokumenten, Präsentationen, APIs und Webseiten in eine einheitliche Wissensbasis.',
    en: 'Automatic extraction of knowledge from PDFs, Word documents, presentations, APIs, and websites into a unified knowledge base.',
  },
  detailed_semantic_context_title: {
    de: 'Kontextbasierte Verknüpfung',
    en: 'Context-based Linking',
  },
  detailed_semantic_context_desc: {
    de: 'Automatische Erkennung von Beziehungen zwischen Konzepten, Personen und Ereignissen für ein tiefgreifendes Verständnis Ihrer Geschäftsdaten.',
    en: 'Automatic recognition of relationships between concepts, people, and events for a profound understanding of your business data.',
  },
  detailed_semantic_precision_title: {
    de: 'Präzise Informationsgewinnung',
    en: 'Precise Information Extraction',
  },
  detailed_semantic_precision_desc: {
    de: 'Natürlichsprachliche Abfragen liefern kontextrelevante Antworten statt einfacher Keyword-Suchen, basierend auf dem tatsächlichen Bedeutungsgehalt.',
    en: 'Natural language queries provide context-relevant answers instead of simple keyword searches, based on the actual semantic content.',
  },
  
  // Privacy Shield
  detailed_privacy_badge: {
    de: 'Datenschutz',
    en: 'Data Protection',
  },
  detailed_privacy_storage_title: {
    de: 'Datenspeicherung',
    en: 'Data Storage',
  },
  detailed_privacy_storage_desc: {
    de: 'Die Daten werden in sicheren Rechenzentren in der Schweiz gespeichert.',
    en: 'The data is stored in secure data centers in Switzerland.',
  },
  detailed_privacy_gdpr_title: {
    de: 'DSGVO-Konformität',
    en: 'GDPR Compliance',
  },
  detailed_privacy_gdpr_desc: {
    de: 'Vollständige Einhaltung der Europäischen Datenschutz-Grundverordnung und der Schweizer Datenschutzgesetze.',
    en: 'Full compliance with the European General Data Protection Regulation and Swiss data protection laws.',
  },
  detailed_privacy_encryption_title: {
    de: 'Verschlüsselung',
    en: 'Encryption',
  },
  detailed_privacy_encryption_desc: {
    de: 'Modernste End-to-End-Verschlüsselung für alle Daten während der Übertragung. Sichere Speicherung nach Industriestandards.',
    en: 'State-of-the-art end-to-end encryption for all data during transmission. Secure storage according to industry standards.',
  },
  detailed_shield_title: {
    de: 'Privacy Shield',
    en: 'Privacy Shield',
  },
  detailed_shield_description: {
    de: 'Das Evoya Privacy Shield schützt Ihre sensiblen Daten durch einen mehrstufigen Anonymisierungsprozess, der ausschließlich in sicheren Schweizer Rechenzentren stattfindet.',
    en: 'The Evoya Privacy Shield protects your sensitive data through a multi-stage anonymization process that takes place exclusively in secure Swiss data centers.',
  },
  detailed_shield_how: {
    de: 'So funktioniert es',
    en: 'How it works',
  },
  detailed_shield_step1_badge: {
    de: 'SCHRITT 1',
    en: 'STEP 1',
  },
  detailed_shield_step1_title: {
    de: 'Vertrauliche Daten werden anonymisiert (Schweiz)',
    en: 'Confidential data is anonymized (Switzerland)',
  },
  detailed_shield_step1_name: {
    de: 'Max Mustermann',
    en: 'John Doe',
  },
  detailed_shield_step1_placeholder: {
    de: '[Name 1]',
    en: '[Name 1]',
  },
  detailed_shield_step2_badge: {
    de: 'SCHRITT 2',
    en: 'STEP 2',
  },
  detailed_shield_step2_title: {
    de: 'Sprachmodell generiert Antwort mit anonymisierten Daten',
    en: 'Language model generates response with anonymized data',
  },
  detailed_shield_step2_desc: {
    de: 'Verarbeitung anonymisierter Daten durch externe KI',
    en: 'Processing of anonymized data by external AI',
  },
  detailed_shield_step3_badge: {
    de: 'SCHRITT 3',
    en: 'STEP 3',
  },
  detailed_shield_step3_title: {
    de: 'Anonymisierte Daten werden deanonymisiert (Schweiz)',
    en: 'Anonymized data is deanonymized (Switzerland)',
  },
  detailed_shield_step3_name: {
    de: 'Max Mustermann',
    en: 'John Doe',
  },
  detailed_shield_step3_placeholder: {
    de: '[Name 1]',
    en: '[Name 1]',
  },
  detailed_shield_data_title: {
    de: 'Ihre Daten in sicheren Händen',
    en: 'Your data in safe hands',
  },
  detailed_shield_data_desc: {
    de: 'Das Evoya Privacy Shield stellt sicher, dass sensitive Informationen niemals ungeschützt an externe Systeme übermittelt werden. Stattdessen werden sie vor der Verarbeitung durch Sprachmodelle anonymisiert und erst nach der Verarbeitung wieder deanonymisiert. Dieser gesamte Prozess findet ausschließlich in der Schweiz statt.',
    en: 'The Evoya Privacy Shield ensures that sensitive information is never transmitted unprotected to external systems. Instead, it is anonymized before processing by language models and only deanonymized after processing. This entire process takes place exclusively in Switzerland.',
  },
  detailed_shield_highlight: {
    de: 'Datenschutz auf höchstem Niveau, ohne Kompromisse bei der Leistungsfähigkeit',
    en: 'Data protection at the highest level, without compromising performance',
  },
  
  // Language Models Section
  models_badge: {
    de: 'KI-Sprachmodelle',
    en: 'AI Language Models',
  },
  models_title: {
    de: 'Zugriff auf',
    en: 'Access to',
  },
  models_title_colored: {
    de: 'führende KI-Modelle',
    en: 'leading AI models',
  },
  models_title_suffix: {
    de: 'für jeden Anwendungsfall',
    en: 'for every use case',
  },
  models_description: {
    de: 'Unsere Plattform bietet Zugriff auf über 20 führende Modelle für Sprache und Bilder – ohne zusätzliche Abos oder hohe Kosten. Als Schweizer Unternehmen stellen wir auch KI-Modelle bereit, die in der Schweiz gehostet werden.',
    en: 'Our platform provides access to over 20 leading models for language and images – without additional subscriptions or high costs. As a Swiss company, we also provide AI models that are hosted in Switzerland.',
  },
  models_swiss_hosted: {
    de: 'Swiss Hosted',
    en: 'Swiss Hosted',
  },
  models_openai_desc: {
    de: 'Anbieter leistungsstarker KI-Sprachmodelle mit breitem Anwendungsspektrum',
    en: 'Provider of powerful AI language models with a wide range of applications',
  },
  models_anthropic_desc: {
    de: 'Fokus auf sichere, zuverlässige und kontrollierbare KI-Systeme',
    en: 'Focus on safe, reliable, and controllable AI systems',
  },
  models_mistral_desc: {
    de: 'Europäischer Anbieter effizienter KI-Modelle mit ausgezeichnetem Preis-Leistungs-Verhältnis',
    en: 'European provider of efficient AI models with excellent price-performance ratio',
  },
  models_meta_desc: {
    de: 'Open-Source-Modelle mit umfangreichen Anpassungsmöglichkeiten',
    en: 'Open source models with extensive customization options',
  },
  models_deepseek_desc: {
    de: 'Spezialisiert auf fortschrittliche Forschung und technologische Innovation',
    en: 'Specialized in advanced research and technological innovation',
  },
  models_google_desc: {
    de: 'Führende KI-Technologien mit tiefer Integration in Web- und Cloud-Dienste',
    en: 'Leading AI technologies with deep integration into web and cloud services',
  },
  models_nvidia_desc: {
    de: 'Hardware-optimierte KI-Lösungen mit Fokus auf Leistung und Skalierbarkeit',
    en: 'Hardware-optimized AI solutions with a focus on performance and scalability',
  },
  models_microsoft_desc: {
    de: 'Enterprise-orientierte KI-Dienste mit nahtloser Integration in Geschäftsanwendungen',
    en: 'Enterprise-oriented AI services with seamless integration into business applications',
  },
  models_swiss_llama_title: {
    de: 'Swiss Llama 3.3',
    en: 'Swiss Llama 3.3',
  },
  models_swiss_llama_desc: {
    de: 'Unser Schweizer Premium-Modell bietet höchste Qualität bei vollständiger Datensouveränität. Swiss Llama 3.3 wird ausschliesslich in der Schweiz gehostet.',
    en: 'Our Swiss premium model offers the highest quality with complete data sovereignty. Swiss Llama 3.3 is hosted exclusively in Switzerland.',
  },
  models_swiss_hosting: {
    de: 'Schweizer Hosting',
    en: 'Swiss Hosting',
  },
  models_gdpr_compliant: {
    de: 'DSGVO-konform',
    en: 'GDPR compliant',
  },
  models_onpremise_title: {
    de: 'On-Premise Lösungen',
    en: 'On-Premise Solutions',
  },
  models_onpremise_desc: {
    de: 'Maximale Kontrolle über Ihre KI-Infrastruktur: Wir bieten massgeschneiderte On-Premise-Lösungen, bei denen die KI-Modelle direkt auf Ihren Servern laufen. So bleiben Ihre Daten immer in Ihrer Infrastruktur und Sie profitieren von höchster Sicherheit und Datenschutz.',
    en: 'Maximum control over your AI infrastructure: We offer customized on-premise solutions where the AI models run directly on your servers. This way, your data always stays in your infrastructure and you benefit from maximum security and data protection.',
  },
  models_onpremise_control_title: {
    de: 'Volle Kontrolle',
    en: 'Full Control',
  },
  models_onpremise_control_desc: {
    de: 'Modelle laufen in Ihrer eigenen Infrastruktur und unter Ihrer Kontrolle.',
    en: 'Models run in your own infrastructure and under your control.',
  },
  models_onpremise_custom_title: {
    de: 'Massgeschneidert',
    en: 'Customized',
  },
  models_onpremise_custom_desc: {
    de: 'Anpassbar an Ihre spezifischen Anforderungen und Sicherheitsrichtlinien.',
    en: 'Adaptable to your specific requirements and security policies.',
  },
  models_onpremise_data_title: {
    de: 'Keine Datenexporte',
    en: 'No Data Exports',
  },
  models_onpremise_data_desc: {
    de: 'Sensible Daten verlassen niemals Ihr Unternehmensnetzwerk.',
    en: 'Sensitive data never leaves your corporate network.',
  },
  models_contact_cta: {
    de: 'Beratung anfragen',
    en: 'Request Consultation',
  },
  
  // Benefits Section
  benefits_badge: {
    de: 'Vorteile',
    en: 'Benefits',
  },
  benefits_title: {
    de: 'Warum Unternehmen auf',
    en: 'Why Companies Choose',
  },
  benefits_title_colored: {
    de: 'Evoya AI',
    en: 'Evoya AI',
  },
  benefits_description: {
    de: 'Unsere KI-Workspaces bieten entscheidende Vorteile für KMUs, die Innovation und Sicherheit gleichermassen schätzen.',
    en: 'Our AI Workspaces offer critical advantages for SMEs that equally value innovation and security.',
  },
  
  // Benefits Cards
  benefits_security_title: {
    de: 'Datenschutz & Sicherheit',
    en: 'Data Protection & Security',
  },
  benefits_security_desc: {
    de: 'Alle Daten werden in der Schweiz mit höchsten Sicherheitsstandards gespeichert und verarbeitet, wodurch die Vertraulichkeit Ihrer Unternehmensdaten garantiert wird.',
    en: 'All data is stored and processed in Switzerland with the highest security standards, guaranteeing the confidentiality of your company data.',
  },
  benefits_swiss_hosting: {
    de: 'Schweizer Hosting',
    en: 'Swiss Hosting',
  },
  benefits_encryption: {
    de: 'Ende-zu-Ende-Verschlüsselung',
    en: 'End-to-End Encryption',
  },
  benefits_gdpr: {
    de: 'DSGVO-konform',
    en: 'GDPR Compliant',
  },
  
  benefits_pricing_title: {
    de: 'Flexibles Preismodell',
    en: 'Flexible Pricing Model',
  },
  benefits_pricing_desc: {
    de: 'Keine festen Lizenzgebühren pro Benutzer, sondern ein nutzungsbasiertes Modell, das sich den Bedürfnissen Ihres Unternehmens anpasst und wächst.',
    en: 'No fixed license fees per user, but a usage-based model that adapts and grows with the needs of your company.',
  },
  benefits_usage_based: {
    de: 'Nutzungsbasierte Abrechnung',
    en: 'Usage-based Billing',
  },
  benefits_no_commitment: {
    de: 'Keine Mindestlaufzeit',
    en: 'No Minimum Contract Period',
  },
  benefits_scalable: {
    de: 'Skalierbare Ressourcen',
    en: 'Scalable Resources',
  },
  
  benefits_models_title: {
    de: 'Führende KI-Modelle',
    en: 'Leading AI Models',
  },
  benefits_models_desc: {
    de: 'Zugriff auf über 20 führende Sprach- und Bildmodelle, darunter auch lokal gehostete Optionen wie SwissLama 3.3 für optimale Performance.',
    en: 'Access to over 20 leading language and image models, including locally hosted options like SwissLama 3.3 for optimal performance.',
  },
  benefits_models_count: {
    de: 'Über 20 KI-Modelle',
    en: 'Over 20 AI Models',
  },
  benefits_local_hosting: {
    de: 'Lokal gehostete Optionen',
    en: 'Locally Hosted Options',
  },
  benefits_regular_updates: {
    de: 'Regelmässige Updates',
    en: 'Regular Updates',
  },
  
  benefits_partner_title: {
    de: 'Lokaler Partner mit Schweizer Expertise',
    en: 'Local Partner with Swiss Expertise',
  },
  benefits_partner_desc: {
    de: 'Als Schweizer Unternehmen kennen wir die lokalen Marktanforderungen und regulatorischen Besonderheiten. Wir verstehen die spezifischen Bedürfnisse von Schweizer KMUs und bieten massgeschneiderte KI-Lösungen, die regionalen Gegebenheiten optimal Rechnung tragen.',
    en: 'As a Swiss company, we understand the local market requirements and regulatory specifics. We understand the specific needs of Swiss SMEs and offer customized AI solutions that optimally account for regional conditions.',
  },
  benefits_market_knowledge: {
    de: 'Umfassende Marktkenntnis',
    en: 'Comprehensive Market Knowledge',
  },
  benefits_ai_expertise: {
    de: 'KI-Expertise und fundiertes Branchenwissen',
    en: 'AI Expertise and In-depth Industry Knowledge',
  },
  benefits_local_requirements: {
    de: 'Verständnis lokaler Anforderungen',
    en: 'Understanding of Local Requirements',
  },
  benefits_personal_support: {
    de: 'Persönliche Betreuung',
    en: 'Personal Support',
  },
  
  // Comparison Section Additional Translations
  comparison_title: {
    de: 'Evoya AI im Vergleich zu anderen',
    en: 'Evoya AI compared to other',
  },
  comparison_title_colored: {
    de: 'KI-Lösungen',
    en: 'AI solutions',
  },
  comparison_description: {
    de: 'Entdecken Sie, wie sich unsere KI-Workspaces von anderen Lösungen auf dem Markt unterscheiden.',
    en: 'Discover how our AI Workspaces differ from other solutions on the market.',
  },
  comparison_features: {
    de: 'Funktionen',
    en: 'Features',
  },
  
  // Comparison table features
  comparison_flexible_pricing: {
    de: 'Flexibles Preismodell',
    en: 'Flexible Pricing Model',
  },
  comparison_ai_models: {
    de: 'Über 20 KI-Modelle',
    en: 'Over 20 AI Models',
  },
  comparison_local_hosting: {
    de: 'Lokale Modell-Hosting-Option',
    en: 'Local Model Hosting Option',
  },
  comparison_usage_billing: {
    de: 'Nutzungsbasierte Abrechnung',
    en: 'Usage-based Billing',
  },
  comparison_custom_solutions: {
    de: 'Massgeschneiderte KI-Lösungen',
    en: 'Customized AI Solutions',
  },
  comparison_personal_support: {
    de: 'Persönliche Betreuung',
    en: 'Personal Support',
  },
  comparison_document_editing: {
    de: 'Dynamische Dokumentbearbeitung im Chat',
    en: 'Dynamic Document Editing in Chat',
  },
  comparison_privacy_shield: {
    de: 'Privacy Shield',
    en: 'Privacy Shield',
  },
  comparison_swiss_storage: {
    de: 'Datenspeicherung in der Schweiz',
    en: 'Data Storage in Switzerland',
  },
  comparison_swiss_models: {
    de: 'Schweizer Sprachmodelle',
    en: 'Swiss Language Models',
  },
  
  // Tooltip explanations
  tooltip_privacy_shield_evoya: {
    de: 'Evoya AI bietet ein einzigartiges Datenschutzschild zur Anonymisierung sensibler Daten.',
    en: 'Evoya AI offers a unique data protection shield for anonymizing sensitive data.',
  },
  tooltip_privacy_shield_other: {
    de: 'Diese Funktion ist nicht verfügbar.',
    en: 'This feature is not available.',
  },
  tooltip_swiss_storage_evoya: {
    de: 'Daten können in sicheren Rechenzentren in der Schweiz gespeichert werden.',
    en: 'Data can be stored in secure data centers in Switzerland.',
  },
  tooltip_swiss_storage_other: {
    de: 'Keine spezifische Option für die Schweiz.',
    en: 'No specific option for Switzerland.',
  },
  tooltip_swiss_models_evoya: {
    de: 'Unterstützt auch Schweizer Sprachmodelle.',
    en: 'Also supports Swiss language models.',
  },
  tooltip_swiss_models_other: {
    de: 'Keine spezifische Unterstützung für Schweizer Modelle.',
    en: 'No specific support for Swiss models.',
  },
};

// The translate function to be used in components
export const translate = (key: string, language: Language): string => {
  if (translations[key] && translations[key][language]) {
    return translations[key][language];
  }
  
  // Fallback to key if translation not found
  console.warn(`Translation missing for key: ${key} in language: ${language}`);
  return key;
};
