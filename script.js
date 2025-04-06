document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }
    
    // Initialize
    if (testimonials.length > 0) {
        showTestimonial(currentTestimonial);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Mobile menu toggle (if needed)
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const header = document.querySelector('header .container');
    
    if (window.innerWidth <= 768) {
        header.insertBefore(menuToggle, nav);
        nav.style.display = 'none';
        
        menuToggle.addEventListener('click', function() {
            if (nav.style.display === 'none') {
                nav.style.display = 'block';
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                nav.style.display = 'none';
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.menu-toggle')) {
                header.insertBefore(menuToggle, nav);
            }
            nav.style.display = 'none';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            if (document.querySelector('.menu-toggle')) {
                document.querySelector('.menu-toggle').remove();
            }
            nav.style.display = 'flex';
        }
    });
});