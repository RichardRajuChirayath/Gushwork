function initApp() {
    console.log("App Initialized");

    // Sticky Header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Modal / Quote logic
    const quoteBtns = document.querySelectorAll('.btn-primary, .btn-fill, .btn-quote-blue');
    quoteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Quote request initiated! Our team will contact you shortly.');
        });
    });

    // Accordion Logic (for FAQ)
    const accHeaders = document.querySelectorAll('.acc-header');
    accHeaders.forEach(h => {
        h.addEventListener('click', () => {
            const content = h.nextElementSibling;
            if (content) {
                const isOpen = content.style.display === 'block';
                document.querySelectorAll('.acc-content').forEach(c => c.style.display = 'none');
                content.style.display = isOpen ? 'none' : 'block';
            }
        });
    });

    // Simple thumbnail switch logic
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('hero-main-img');
    thumbs.forEach(t => {
        t.addEventListener('click', () => {
            thumbs.forEach(thumb => thumb.classList.remove('active'));
            t.classList.add('active');
            // Assuming the CSS background-image has the URL
            const url = t.style.backgroundImage.slice(5, -2).replace(/"/g, "");
            if (url && mainImg) mainImg.src = url;
        });
    });
}

// Support for both direct and modular loading
if (document.readyState === 'complete') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}

// Expose to window for the index.html fetch loader
window.initApp = initApp;
