// Intersection Observer para animaciones on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('nav-active');
            
            // Cambiar icono del botón
            const icon = mobileMenuBtn.querySelector('i');
            if (nav.classList.contains('nav-active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('nav-active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Configuración del observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Crear el observer
    const observer = new IntersectionObserver(function(entries) {
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
});

// Funcionalidad FAQ (mantener la existente)
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentNode;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const toggle = question.querySelector('.faq-toggle');
            
            // Cerrar otros FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentNode;
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherToggle = otherQuestion.querySelector('.faq-toggle');
                    
                    otherItem.classList.remove('active');
                    otherAnswer.style.maxHeight = null;
                    otherToggle.textContent = '+';
                }
            });
            
            // Toggle del FAQ actual
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                toggle.textContent = '-';
            } else {
                faqAnswer.style.maxHeight = null;
                toggle.textContent = '+';
            }
        });
    });
});
