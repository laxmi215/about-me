// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create mobile menu if it doesn't exist
    if (hamburger && !document.querySelector('.mobile-nav-menu')) {
        const mobileMenu = navMenu.cloneNode(true);
        mobileMenu.classList.add('mobile-nav-menu');
        mobileMenu.classList.remove('nav-menu');
        hamburger.parentNode.appendChild(mobileMenu);
        
        // Hide desktop menu on mobile
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .nav-menu {
                    display: none !important;
                }
                .mobile-nav-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(102, 126, 234, 0.95);
                    backdrop-filter: blur(10px);
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }
                .mobile-nav-menu.active {
                    display: flex;
                }
                .mobile-nav-menu li {
                    margin: 0.5rem 0;
                }
                .mobile-nav-menu a {
                    display: block;
                    padding: 1rem;
                    text-align: center;
                    border-radius: 8px;
                    transition: background 0.3s ease;
                }
                .mobile-nav-menu a:hover,
                .mobile-nav-menu a.active {
                    background: rgba(255,255,255,0.2);
                }
                .hamburger.active span:nth-child(1) {
                    transform: rotate(-45deg) translate(-5px, 6px);
                }
                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }
                .hamburger.active span:nth-child(3) {
                    transform: rotate(45deg) translate(-5px, -6px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-nav-menu');
            hamburger.classList.toggle('active');
            if (mobileMenu) {
                mobileMenu.classList.toggle('active');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.querySelector('.mobile-nav-menu');
        if (hamburger && mobileMenu && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-nav-menu');
            if (hamburger && mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll effect to navigation
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                header.style.backdropFilter = 'none';
            }
        });
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.hobby-card, .goal-card, .gallery-item, .timeline-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hobby-card, .goal-card, .gallery-item, .timeline-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on page load
    setTimeout(animateOnScroll, 100);
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Add a loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class after a short delay
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500);
    
    // Add CSS for loading animation
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        .loading * {
            animation-play-state: paused !important;
        }
        
        .loading .hero-text {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .loading .hero-image {
            opacity: 0;
            transform: scale(0.8);
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Add image loading fallback with better styling
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            const placeholder = document.createElement('div');
            const imgClass = this.className;
            const altText = this.alt || 'Image';
            
            placeholder.className = imgClass;
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background: linear-gradient(135deg, #667eea 20%, #764ba2 80%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                font-family: 'Poppins', sans-serif;
                border-radius: 10px;
                text-align: center;
                font-size: 14px;
                font-weight: 500;
            `;
            
            // Add icon and text
            placeholder.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📷</div>
                <div>${altText}</div>
                <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.25rem;">Add your image here</div>
            `;
            
            // Replace the broken image with placeholder
            if (this.parentNode) {
                this.parentNode.replaceChild(placeholder, this);
            }
        });
        
        // Trigger error for missing images immediately
        if (!img.complete || img.naturalWidth === 0) {
            img.dispatchEvent(new Event('error'));
        }
    });
});

// Add interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.hobby-card, .goal-card, .favorite-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});

// Add typing effect to hero text (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on home page
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const originalText = heroTitle.textContent;
        // Uncomment the next line if you want the typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Add progress bar animation for skills (interests page)
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateProgress() {
        progressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < window.innerHeight - 100) {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            }
        });
    }
    
    window.addEventListener('scroll', animateProgress);
    setTimeout(animateProgress, 1000);
});

console.log('🎉 About Me website loaded successfully!');
console.log('📝 Remember to:');
console.log('   - Replace placeholder text with your information');
console.log('   - Add your own images to the images folder');
console.log('   - Update the Google Maps embed with your location');
console.log('   - Customize colors and content to match your style');