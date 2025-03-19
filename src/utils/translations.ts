
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
