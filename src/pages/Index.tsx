
import React, { useEffect, Suspense, lazy } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlurBackground from '../components/BlurBackground';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';

// Lazy load components for better performance
const Features = lazy(() => import('../components/Features'));
const DetailedFeatures = lazy(() => import('../components/DetailedFeatures'));
const LanguageModels = lazy(() => import('../components/LanguageModels'));
const Benefits = lazy(() => import('../components/Benefits'));
const Services = lazy(() => import('../components/Services'));
const Comparison = lazy(() => import('../components/Comparison'));
const Pricing = lazy(() => import('../components/Pricing'));
const CallToAction = lazy(() => import('../components/CallToAction'));
const Footer = lazy(() => import('../components/Footer'));
const LLMAgentStructure = lazy(() => import('../components/LLMAgentStructure'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-evoya-blue"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-hidden">
        <BlurBackground />
        <Header />
        
        {/* SEO-friendly breadcrumb for navigation */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <main>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <Features />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <DetailedFeatures />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <LanguageModels />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <LLMAgentStructure />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Benefits />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Comparison />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Pricing />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <CallToAction />
          </Suspense>
        </main>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  );
};

export default Index;
