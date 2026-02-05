// Create scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

// Update scroll progress
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjusted offset for better accuracy
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll and Parallax
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    }

    // Parallax
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 500;
    }
});

// Animate Skill Bars on Scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const progress = progressBar.getAttribute('data-progress');
            progressBar.style.width = progress + '%';
            skillObserver.unobserve(progressBar);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// Scroll Animation Function
const animateOnScroll = () => {
    const fadeUpElements = document.querySelectorAll('.skill-card, .project-card, .stat-item, .education-item, .contact-item, .about-text p, .section-description');
    const fadeLeftElements = document.querySelectorAll('.about-image, .contact-info');
    const fadeRightElements = document.querySelectorAll('.contact-form');
    const scaleElements = document.querySelectorAll('.section-title, .hero-title, .hero-subtitle, .hero-description');

    const fadeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                fadeUpObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeUpElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeUpObserver.observe(element);
    });

    const fadeLeftObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                fadeLeftObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeLeftElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeLeftObserver.observe(element);
    });

    const fadeRightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                fadeRightObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeRightElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeRightObserver.observe(element);
    });

    const scaleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                scaleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scaleElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.9)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scaleObserver.observe(element);
    });

    // Animate hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn, .resume-buttons .btn');
    const buttonObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
                buttonObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    heroButtons.forEach(button => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px) scale(0.9)';
        button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        buttonObserver.observe(button);
    });

    // Animate social links
    const socialLinks = document.querySelectorAll('.social-link');
    const socialObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotate(0deg)';
                }, index * 100);
                socialObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    socialLinks.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px) rotate(-10deg)';
        link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        socialObserver.observe(link);
    });
};

// Text reveal animation
const textReveal = () => {
    const texts = document.querySelectorAll('.hero-title, .hero-subtitle, .section-title');
    texts.forEach(text => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'textReveal 1s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(text);
    });
};

// Smooth reveal for sections
const sectionReveal = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
};


// Cursor Trail Effect
const initCursorTrail = () => {
    let cursorTrail = [];
    const maxTrailLength = 20;

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            if (cursorTrail.length > maxTrailLength) {
                cursorTrail.shift();
            }
            updateCursorTrail();
        }
    });

    function updateCursorTrail() {
        const existingTrails = document.querySelectorAll('.cursor-trail');
        existingTrails.forEach(trail => trail.remove());

        cursorTrail.forEach((point, index) => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = point.x + 'px';
            trail.style.top = point.y + 'px';
            trail.style.opacity = (index / cursorTrail.length) * 0.5;
            trail.style.transform = `scale(${index / cursorTrail.length})`;
            document.body.appendChild(trail);

            setTimeout(() => trail.remove(), 300);
        });
    }
};

// Button ripple effect
const initRippleEffect = () => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    textReveal();
    sectionReveal();
    initCursorTrail();
    initRippleEffect();
});
