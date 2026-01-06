// Intersection Observer para animaciones on scroll
// Ejecutar cuando el DOM esté listo (compatible con defer)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

function initAnimations() {
    // Configuración del observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Crear el observer
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // Si tiene elementos hijos para animar con stagger
                const staggerElements = entry.target.querySelectorAll('.animate-cards');
                staggerElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate');
                    }, index * 150);
                });
            }
        });
    }, observerOptions);

    // Elementos a observar
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Animar cards de servicios con delay
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('animate-cards');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Animar cards de features
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('animate-cards');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Animar items del portafolio
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.classList.add('animate-cards');
        item.style.transitionDelay = `${index * 0.15}s`;
    });

    // Animar cards de precios
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.classList.add('animate-cards');
        card.style.transitionDelay = `${index * 0.2}s`;
    });

    // Animar testimonios
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.classList.add('animate-cards');
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Animar FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.classList.add('animate-cards');
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Observar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('animate-on-scroll');
    });
}
