
/**
 * Image utility functions for SEO optimization
 */

/**
 * Format alt text for SEO by ensuring it's descriptive and includes relevant keywords
 */
export const formatAltText = (alt: string, keywords: string[] = []): string => {
  // Make sure alt text ends with a period
  let formattedAlt = alt.trim();
  if (!formattedAlt.endsWith('.')) {
    formattedAlt += '.';
  }
  
  // Add keywords if they're not already in the alt text
  keywords.forEach(keyword => {
    if (!formattedAlt.toLowerCase().includes(keyword.toLowerCase())) {
      formattedAlt = `${keyword} - ${formattedAlt}`;
    }
  });
  
  return formattedAlt;
};

/**
 * Helper for creating optimized image properties
 */
export const optimizedImage = (
  src: string, 
  alt: string, 
  keywords: string[] = [], 
  className: string = '',
  loading: 'lazy' | 'eager' = 'lazy'
): {
  src: string;
  alt: string;
  className: string;
  loading: 'lazy' | 'eager';
} => {
  return {
    src,
    alt: formatAltText(alt, keywords),
    className,
    loading
  };
};
