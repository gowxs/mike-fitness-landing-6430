document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for fixed header
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // -20 for a little extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (document.body.classList.contains('nav-open')) {
                    document.body.classList.remove('nav-open');
                    // Reset nav height to 0 for transition if needed, though display: none handles it
                    document.querySelector('nav').style.height = '0';
                }
            }
        });
    });

    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navElement = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        // Animate height of the nav element
        if (document.body.classList.contains('nav-open')) {
            navElement.style.height = navElement.scrollHeight + 'px';
        } else {
            navElement.style.height = '0';
        }
    });

    // Close mobile nav on resize if it's open (desktop has different nav structure)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && document.body.classList.contains('nav-open')) {
            document.body.classList.remove('nav-open');
            navElement.style.height = '0';
        }
    });

    // Basic form submission (prevents default for demo, would send to backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! Mike will get back to you shortly.');
            this.reset(); // Clear the form
        });
    }
});
