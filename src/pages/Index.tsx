
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DetailedFeatures from '../components/DetailedFeatures';
import LanguageModels from '../components/LanguageModels';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Comparison from '../components/Comparison';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import BlurBackground from '../components/BlurBackground';
import LLMAgentStructure from '../components/LLMAgentStructure';

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
    <div className="relative min-h-screen overflow-hidden">
      <BlurBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <DetailedFeatures />
        <LanguageModels />
        <LLMAgentStructure />
        <Benefits />
        <Services />
        <Comparison />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
