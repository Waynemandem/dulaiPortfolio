/* ============================================================================
   PORTFOLIO TEMPLATE - MAIN JAVASCRIPT
   
   IMPROVEMENTS FROM ORIGINAL:
   ✓ Theme toggle with localStorage persistence
   ✓ Mobile hamburger menu with smooth transitions
   ✓ Scroll-based element reveal animations
   ✓ Form validation and submission handling
   ✓ Intersection Observer for performance
   ✓ Smooth scroll behavior
   ✓ Accessibility: ARIA labels, keyboard support
   ✓ No heavy dependencies - vanilla JavaScript only
   ✓ Well-commented code for easy customization
   
   SECTIONS:
   1. Theme Toggle - Dark/Light mode persistence
   2. Mobile Menu - Responsive hamburger navigation
   3. Scroll Animations - Reveal elements on scroll
   4. Form Handling - Validation and submission
   5. Utilities - Helper functions
   ============================================================================ */

/* ============================================================================
   1. THEME TOGGLE - Dark/Light Mode with localStorage
   ============================================================================ */

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.html = document.documentElement;
        this.STORAGE_KEY = 'theme-preference';
        
        // Initialize theme on page load
        this.initialize();
        
        // Listen for theme toggle clicks
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggle());
            this.themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggle();
                }
            });
        }
    }
    
    /**
     * Initialize theme from localStorage or system preference
     */
    initialize() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Use saved preference, or system preference, or default to dark
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        this.setTheme(theme);
    }
    
    /**
     * Set theme and update UI
     */
    setTheme(theme) {
        const isLight = theme === 'light';
        
        // Update data attribute on html element
        this.html.setAttribute('data-theme', theme);
        
        // Update button state
        if (this.themeToggle) {
            this.themeToggle.classList.toggle('active', isLight);
            this.themeToggle.setAttribute('aria-pressed', isLight);
        }
        
        // Persist preference
        localStorage.setItem(this.STORAGE_KEY, theme);
    }
    
    /**
     * Toggle between dark and light theme
     */
    toggle() {
        const currentTheme = this.html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

/* ============================================================================
   2. MOBILE MENU - Hamburger Navigation with Smooth Transitions
   ============================================================================ */

class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburgerBtn');
        this.navLinks = document.getElementById('navLinks');
        
        if (!this.hamburger || !this.navLinks) return;
        
        // Toggle menu on hamburger click
        this.hamburger.addEventListener('click', () => this.toggle());
        
        // Close menu when a link is clicked
        this.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        
        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }
    
    /**
     * Toggle menu open/closed state
     */
    toggle() {
        const isActive = this.navLinks.classList.contains('active');
        if (isActive) {
            this.close();
        } else {
            this.open();
        }
    }
    
    /**
     * Open mobile menu
     */
    open() {
        this.navLinks.classList.add('active');
        this.hamburger.classList.add('active');
        this.hamburger.setAttribute('aria-expanded', 'true');
    }
    
    /**
     * Close mobile menu
     */
    close() {
        this.navLinks.classList.remove('active');
        this.hamburger.classList.remove('active');
        this.hamburger.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});

/* ============================================================================
   3. SCROLL-BASED ANIMATIONS - Reveal elements as they enter viewport
   ============================================================================ */

class ScrollAnimations {
    constructor() {
        // Use Intersection Observer for performance
        // Only triggers animations when elements are visible
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Element is visible, trigger animation
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'none';
                        
                        // Stop observing once animated
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            {
                // Start animation when element is 10% visible
                threshold: 0.1,
                // Start animation slightly before element enters viewport
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        // Observe all elements with animation classes
        this.observeElements();
    }
    
    /**
     * Set up intersection observer for animated elements
     */
    observeElements() {
        // Find all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-in, .fade-in-up, .slide-in-left, .slide-in-right'
        );
        
        // Set initial state for animation
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            if (el.classList.contains('fade-in-up')) {
                el.style.transform = 'translateY(30px)';
            } else if (el.classList.contains('slide-in-left')) {
                el.style.transform = 'translateX(-40px)';
            } else if (el.classList.contains('slide-in-right')) {
                el.style.transform = 'translateX(40px)';
            }
            
            // Start observing for animation trigger
            this.observer.observe(el);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
});

/* ============================================================================
   4. FORM HANDLING - Validation, submission, and feedback
   ============================================================================ */

class FormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.messageDiv = document.getElementById('formMessage');
        
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    /**
     * Handle form submission with validation
     */
    async handleSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!this.validate()) {
            this.showMessage('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        try {
            // Collect form data
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData);
            
            // Send form data to server
            // CUSTOMIZE: Replace with your actual endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (response.ok) {
                this.showMessage('Message sent successfully! We\'ll be in touch soon.', 'success');
                this.form.reset();
            } else {
                this.showMessage('Something went wrong. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            // Show fallback message if fetch fails
            this.showMessage('Error sending message. Please try again later.', 'error');
        }
    }
    
    /**
     * Validate form inputs
     */
    validate() {
        const name = this.form.querySelector('#name');
        const email = this.form.querySelector('#email');
        const message = this.form.querySelector('#message');
        
        // Check required fields
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            return false;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            return false;
        }
        
        return true;
    }
    
    /**
     * Display form message (success or error)
     */
    showMessage(text, type) {
        if (!this.messageDiv) return;
        
        this.messageDiv.textContent = text;
        this.messageDiv.className = `form-message show ${type}`;
        
        // Auto-hide message after 5 seconds
        setTimeout(() => {
            this.messageDiv.classList.remove('show');
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FormHandler();
});

/* ============================================================================
   5. UTILITY FUNCTIONS - Helpers for common tasks
   ============================================================================ */

/**
 * Smooth scroll to element
 */
function smoothScrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Debounce function for performance-critical operations
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    );
}

/**
 * Add animation class to element
 */
function addAnimation(element, animationClass) {
    element.classList.add(animationClass);
    
    // Remove class after animation completes
    const duration = getComputedStyle(element).animationDuration;
    const ms = parseFloat(duration) * 1000;
    
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, ms);
}

/* ============================================================================
   6. PAGE INITIALIZATION - Run after DOM is ready
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // All modules are initialized above
    console.log('Portfolio template initialized successfully');
    
    // Optional: Add any custom initialization here
    initializePageElements();
});

/**
 * Initialize page elements and interactions
 * CUSTOMIZE: Add your custom initialization code here
 */
function initializePageElements() {
    // Example: Add event listeners to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add hover effects or analytics tracking
        });
    });
    
    // Example: Track section visibility for analytics
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Section is visible - track view, log analytics, etc.
                console.log('Viewed section:', entry.target.id);
            }
        });
    });
    
    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });
}

/* ============================================================================
   PERFORMANCE NOTES & CUSTOMIZATION GUIDE
   
   1. THEME SYSTEM:
      - Dark theme is default (data-theme="dark")
      - Light theme uses data-theme="light"
      - Customize colors in styles.css :root selector
   
   2. ANIMATIONS:
      - All animations use CSS for better performance
      - Intersection Observer triggers only when visible
      - Stagger animations via --delay CSS variable
   
   3. FORM SUBMISSION:
      - Replace '/api/contact' with your actual endpoint
      - Implement server-side validation
      - Add CAPTCHA for spam prevention
   
   4. ACCESSIBILITY:
      - All interactive elements have ARIA labels
      - Keyboard navigation fully supported
      - Color contrast meets WCAG AA standards
   
   5. RESPONSIVE DESIGN:
      - Mobile-first approach
      - Breakpoints at 768px and 480px
      - Adjust via media queries in styles.css
   
   6. OPTIMIZATION:
      - Images use loading="lazy" attribute
      - No external JavaScript libraries required
      - CSS animations are GPU-accelerated
   
   ============================================================================ */
