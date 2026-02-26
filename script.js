// ==========================================
// FusionHack - Interactive JavaScript
// ==========================================

// ==========================================
// Smooth Scrolling Navigation
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.getElementById('hamburger').classList.remove('active');
            }
        }
    });
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    }
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add shadow when scrolled
    if (currentScrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
});

// // ==========================================
// // Countdown Timer
// // ==========================================
// function updateCountdown() {
//     // Set target date to February 21, 2026 00:00:00
//     const targetDate = new Date('2026-02-21T00:00:00').getTime();
//     const now = new Date().getTime();
//     const difference = targetDate - now;
    
//     // Calculate time units
//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
//     // Update DOM elements
//     const daysElement = document.getElementById('days');
//     const hoursElement = document.getElementById('hours');
//     const minutesElement = document.getElementById('minutes');
//     const secondsElement = document.getElementById('seconds');
    
//     if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
//     if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
//     if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
//     if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');
    
//     // If countdown is finished
//     if (difference < 0) {
//         if (daysElement) daysElement.textContent = '00';
//         if (hoursElement) hoursElement.textContent = '00';
//         if (minutesElement) minutesElement.textContent = '00';
//         if (secondsElement) secondsElement.textContent = '00';
//     }
// }

// // Update countdown immediately and then every second
// updateCountdown();
// setInterval(updateCountdown, 1000);



// ==========================================
// Countdown Timer
// ==========================================


const targetDate = new Date('2026-03-05T23:59:59').getTime(); // radded egistration deadline

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (difference <= 0) {
        if (daysElement) daysElement.textContent = '00';
        if (hoursElement) hoursElement.textContent = '00';
        if (minutesElement) minutesElement.textContent = '00';
        if (secondsElement) secondsElement.textContent = '00';

        const countdownContainer = document.getElementById('countdown');
        if (countdownContainer) {
            countdownContainer.innerHTML = `
                <div style="text-align:center;">
                    <h3 style="color:#8B5CF6;">🚀 Registration Closed</h3>
                </div>
            `;
        }

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================
// Scroll Animations (Intersection Observer)
// ==========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.about-card, .problem-main, .timeline-card, .prize-card, .register-form-container'
    );
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-slide');
        observer.observe(element);
    });
});

// ==========================================
// Active Navigation Link Highlight
// ==========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// Parallax Effect for Hero Background
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg && scrolled < window.innerHeight) {
        const parallaxSpeed = 0.5;
        heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ==========================================
// Prize Card Hover 3D Effect
// ==========================================
const prizeCards = document.querySelectorAll('.prize-card');

prizeCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ==========================================
// Smooth Reveal for Stats
// ==========================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-value');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        const isNumber = !isNaN(parseFloat(target.replace(/[^\d]/g, '')));
        
        if (isNumber) {
            const finalValue = parseInt(target.replace(/[^\d]/g, ''));
            const prefix = target.match(/[^\d]+/)?.[0] || '';
            let current = 0;
            const increment = finalValue / 50;
            const duration = 1000;
            const stepTime = duration / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    stat.textContent = prefix + finalValue.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = prefix + Math.floor(current).toLocaleString();
                }
            }, stepTime);
        }
    });
}

// Trigger stats animation when hero section is in view
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ==========================================
// Dynamic Year Update for Footer
// ==========================================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText && currentYear > 2026) {
    footerText.textContent = footerText.textContent.replace('2026', currentYear);
}

// ==========================================
// Prevent Default Form Submission (Since using Google Forms)
// ==========================================
// No form in HTML, but keeping this for reference
// If you add any forms later, this prevents accidental submissions

// ==========================================
// Performance Optimization: Debounce Scroll Events
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavigation, 100);
window.removeEventListener('scroll', highlightNavigation);
window.addEventListener('scroll', debouncedHighlight);

// ==========================================
// Console Message for Developers
// ==========================================
console.log('%cFusionHack 2026', 'color: #8B5CF6; font-size: 24px; font-weight: bold;');
console.log('%cInterested in the code? Check out our GitHub!', 'color: #06B6D4; font-size: 14px;');
console.log('%cOrganized by IEEE Students Branch, GEC Bharuch', 'color: #94A3B8; font-size: 12px;');

// ==========================================
// Add Loading State Management
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
