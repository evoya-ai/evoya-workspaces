
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SchemaOrgProps {
  type: 'Organization' | 'WebSite' | 'Product' | 'Service';
}

/**
 * Component that renders JSON-LD structured data for better SEO
 */
const SchemaOrg: React.FC<SchemaOrgProps> = ({ type }) => {
  const { language } = useLanguage();
  
  // Use the same image URL with cache busting parameter across all schemas
  const imageUrl = 'https://workspace.evoya.ai/lovable-uploads/0bef5f0c-1f4c-47ab-bf07-c72f63ec0581.png?v=20240101';
  
  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Evoya AI',
    url: 'https://evoya.ai',
    logo: imageUrl,
    image: imageUrl,
    sameAs: [
      'https://twitter.com/evoyaai',
      'https://linkedin.com/company/evoya-ai'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41 44 520 16 48',
      email: 'hello@evoya.ai',
      contactType: 'customer service'
    }
  };
  
  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Evoya AI',
    url: 'https://evoya.ai',
    inLanguage: language === 'de' ? 'de-DE' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://evoya.ai/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    image: imageUrl
  };
  
  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Evoya AI Platform',
    description: language === 'de' 
      ? 'Enterprise Language Models und Agent-Lösungen für Unternehmen' 
      : 'Enterprise Language Models and Agent Solutions for businesses',
    provider: {
      '@type': 'Organization',
      name: 'Evoya AI',
      image: imageUrl
    },
    serviceType: 'Artificial Intelligence Services',
    image: imageUrl
  };
  
  // Select the appropriate schema based on the type prop
  let schema;
  switch (type) {
    case 'Organization':
      schema = organizationSchema;
      break;
    case 'WebSite':
      schema = websiteSchema;
      break;
    case 'Service':
      schema = serviceSchema;
      break;
    default:
      schema = websiteSchema;
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaOrg;
