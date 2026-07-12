document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

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

    // Quick Search Form Logic
    const quickSearchBtn = document.getElementById('quickSearchBtn');
    const searchType = document.getElementById('searchType');
    const searchAction = document.getElementById('searchAction');

    if (quickSearchBtn && searchType && searchAction) {
        quickSearchBtn.addEventListener('click', () => {
            const typeVal = searchType.value;
            const actionVal = searchAction.value;

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

            filterProperties();
            document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contact Form AJAX Submission
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

            fetch("https://formsubmit.co/ajax/uddeshyag12@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Thank you! Your message has been sent successfully. Please check uddeshyag12@gmail.com for the activation email if this is your first submission.');
                contactForm.reset();
            })
            .catch(error => {
                console.warn('Network request failed. Falling back to mailto link.', error);
                const subject = `Property Inquiry from ${formData.name}`;
                const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
                const mailtoUrl = `mailto:uddeshyag12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoUrl;
                alert('Opened your email client to send the message. Please click send in your mail app!');
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }

    // Visit Counter logic (Global API with local fallback)
    const visitCounterEl = document.getElementById('visitCount');
    if (visitCounterEl) {
        fetch("https://api.counterapi.dev/v1/rrpropertydealer/visits/up")
            .then(response => response.json())
            .then(data => {
                if (data && typeof data.count === 'number') {
                    visitCounterEl.textContent = 1000 + data.count;
                }
            })
            .catch(error => {
                console.warn('Failed to fetch global counter. Falling back to local storage.', error);
                let count = localStorage.getItem('visitCount');
                if (!count) {
                    count = 1000;
                } else {
                    count = parseInt(count) + 1;
                }
                localStorage.setItem('visitCount', count);
                visitCounterEl.textContent = count;
            });
    }
});
