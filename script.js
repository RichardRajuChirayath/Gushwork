document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header ---
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.zIndex = '1000';
            
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.position = 'relative';
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = 'none';
        }
        lastScrollY = window.scrollY;
    });

    // --- Manufacturing Process Tabs ---
    const tabs = document.querySelectorAll('.tab');
    const processContent = {
        'Raw Material': {
            title: 'High-Grade Raw Material Selection',
            desc: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.',
            checks: ['PE100 grade material', 'Optimal molecular weight distribution']
        },
        'Extrusion': {
            title: 'Advanced Extrusion Technology',
            desc: 'Molten polymer is pushed through a high-precision die-head to form the pipe structure.',
            checks: ['Uniform wall distribution', 'Temperature-controlled zones']
        }
        // Simplified for now, can be expanded
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const data = processContent[tab.textContent];
            if (data) {
                document.querySelector('.process-content h3').textContent = data.title;
                document.querySelector('.process-content p').textContent = data.desc;
                const list = document.querySelector('.check-list');
                list.innerHTML = data.checks.map(c => `<li>${c}</li>`).join('');
            }
        });
    });

    // --- FAQ Accordion ---
    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach(item => {
        item.querySelector('.acc-header').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // --- Image Zoom Functionality ---
    const zoomContainer = document.querySelector('.zoom-container');
    const lens = document.querySelector('.zoom-lens');
    const result = document.querySelector('.zoom-result');
    const placeholder = document.querySelector('.carousel-placeholder');

    // Since we use placeholders, we'll mimic the effect
    zoomContainer.addEventListener('mousemove', (e) => {
        lens.style.display = 'block';
        result.style.display = 'block';
        placeholder.style.opacity = '0.3';

        const rect = zoomContainer.getBoundingClientRect();
        let x = e.clientX - rect.left - (lens.offsetWidth / 2);
        let y = e.clientY - rect.top - (lens.offsetHeight / 2);

        // Constraints
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > rect.width - lens.offsetWidth) x = rect.width - lens.offsetWidth;
        if (y > rect.height - lens.offsetHeight) y = rect.height - lens.offsetHeight;

        lens.style.left = x + 'px';
        lens.style.top = y + 'px';

        // Fake zoom magnification logic
        result.style.backgroundColor = '#ddd'; // Placeholder color
        result.style.backgroundImage = 'radial-gradient(circle, #bbb 10%, transparent 10%)';
        result.style.backgroundSize = '20px 20px';
        result.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    });

    zoomContainer.addEventListener('mouseleave', () => {
        lens.style.display = 'none';
        result.style.display = 'none';
        placeholder.style.opacity = '1';
    });
});
