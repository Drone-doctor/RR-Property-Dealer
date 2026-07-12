document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle hamburger animation style if desired
        });

        // Close menu when links are clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Spy for Nav Active Links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Catalog Filter Logic
    const propertyFilters = document.getElementById('propertyFilters');
    const actionFilters = document.getElementById('actionFilters');
    const propertyCards = document.querySelectorAll('.property-card');

    let activeType = 'all';
    let activeAction = 'all';

    function filterProperties() {
        propertyCards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            const cardAction = card.getAttribute('data-action');

            const matchesType = (activeType === 'all' || cardType === activeType);
            const matchesAction = (activeAction === 'all' || cardAction === activeAction);

            if (matchesType && matchesAction) {
                card.style.display = 'block';
                // Trigger animation
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transition = 'opacity 0.4s ease';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Click handler for property type filters (PG, 1 BHK, 2 BHK)
    if (propertyFilters) {
        propertyFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                propertyFilters.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                activeType = e.target.getAttribute('data-filter');
                filterProperties();
            });
        });
    }

    // Click handler for transaction/action filters (Rent, Sale/Purchase)
    if (actionFilters) {
        actionFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                actionFilters.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                activeAction = e.target.getAttribute('data-action');
                filterProperties();
            });
        });
    }

    // Quick Search Form Logic in Hero
    const quickSearchBtn = document.getElementById('quickSearchBtn');
    const searchType = document.getElementById('searchType');
    const searchAction = document.getElementById('searchAction');

    if (quickSearchBtn && searchType && searchAction) {
        quickSearchBtn.addEventListener('click', () => {
            const typeVal = searchType.value;
            const actionVal = searchAction.value;

            // Synchronize active filters
            if (propertyFilters) {
                propertyFilters.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-filter') === typeVal) {
                        btn.classList.add('active');
                    }
                });
            }
            activeType = typeVal;

            if (actionFilters) {
                actionFilters.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-action') === actionVal) {
                        btn.classList.add('active');
                    }
                });
            }
            activeAction = actionVal;

            // Filter properties and scroll
            filterProperties();
            document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contact Form AJAX Submission (Works locally with file:// paths)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            fetch("https://formsubmit.co/ajax/guptashivambdn@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Thank you! Your message has been sent successfully. Please check guptashivambdn@gmail.com for the activation email if this is your first submission.');
                contactForm.reset();
            })
            .catch(error => {
                console.warn('Network request blocked or failed. Falling back to mailto link for local file browsing.', error);
                
                // Construct pre-filled email body
                const subject = `Property Inquiry from ${formData.name}`;
                const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
                
                const mailtoUrl = `mailto:guptashivambdn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Open user's email client
                window.location.href = mailtoUrl;
                
                alert('Since you are browsing the site as a local file, we have opened your email client to send the message. Please click send in your mail app!');
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});
