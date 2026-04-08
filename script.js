function initApp() {
    console.log("App Initialized");

    // --- Carousel Logic ---
    const nextBtn = document.querySelector('.nav-btn.next');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const wrap = document.querySelector('.app-slides-wrap');
    let index = 0;

    if (nextBtn && prevBtn && wrap) {
        nextBtn.addEventListener('click', () => {
            if (index < wrap.children.length - 3) {
                index++;
                wrap.style.transform = `translateX(calc(-${index * (100 / 2.7)}%))`;
            }
        });
        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
                wrap.style.transform = `translateX(calc(-${index * (100 / 2.7)}%))`;
            }
        });
    }

    // --- FAQ Accordion ---
    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach(item => {
        item.querySelector('.acc-header').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accItems.forEach(i => {
                i.classList.remove('active');
                const content = i.querySelector('.acc-content');
                if (content) content.style.display = 'none';
            });
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.acc-content');
                if (content) content.style.display = 'block';
            }
        });
    });

    // --- Sticky Header ---
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

    // --- Quote Buttons ---
    const quoteBtns = document.querySelectorAll('.btn-primary, .btn-fill, .btn-quote-blue, .btn-cat');
    quoteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Your request has been received! Our team will contact you shortly.');
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
