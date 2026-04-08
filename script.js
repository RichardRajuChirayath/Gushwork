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

    // --- Manufacturing Process Tabs ---
    const processSteps = [
        {
            title: "High-Grade Raw Material Selection",
            desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
            bullets: ["PE100 grade material", "Optimal molecular weight distribution"]
        },
        {
            title: "Precision Extrusion",
            desc: "Our state-of-the-art extrusion lines melt and form the HDPE into precise pipe profiles with consistent wall thickness.",
            bullets: ["Controlled heating zones", "Uniform melt temperature"]
        },
        {
            title: "Intensive Cooling",
            desc: "Multiple water spray tanks rapidly cool the pipe to solidify the structure while maintaining dimensional stability.",
            bullets: ["Multi-stage cooling", "Temperature gradient control"]
        },
        {
            title: "Precise Sizing",
            desc: "Advanced vacuum sizing technology ensures the outer diameter meets strict international tolerance standards.",
            bullets: ["Micrometer precision", "Real-time adjustments"]
        },
        {
            title: "Rigorous Quality Control",
            desc: "Continuous ultrasonic wall thickness measurement and regular destructive testing ensure zero-defect output.",
            bullets: ["Ultrasonic monitoring", "Pressure testing"]
        },
        {
            title: "Permanent Marking",
            desc: "Each pipe is laser-marked with batch numbers, dimensions, and certification stamps for full traceability.",
            bullets: ["Indelible marking", "Full traceability"]
        },
        {
            title: "Automated Cutting",
            desc: "Planetary saws provided clean, square cuts at exact lengths without damaging the pipe ends.",
            bullets: ["Clean square ends", "Custom length options"]
        },
        {
            title: "Secure Packaging",
            desc: "Coils and straight lengths are securely bundled and strapped for damage-free transportation to your site.",
            bullets: ["Protective wrapping", "Safe site delivery"]
        }
    ];

    const tabs = document.querySelectorAll('.tab-item');
    const procTitle = document.getElementById('proc-title');
    const procDesc = document.getElementById('proc-desc');
    const procList = document.getElementById('proc-bullets');

    if (tabs.length > 0 && procTitle) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const step = parseInt(tab.dataset.step);
                const data = processSteps[step];
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                procTitle.innerText = data.title;
                procDesc.innerText = data.desc;
                procList.innerHTML = data.bullets.map(b => `<li><span>✔</span> ${b}</li>`).join('');
            });
        });
    }

    // --- FAQ Accordion ---
    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach(item => {
        const header = item.querySelector('.acc-header');
        if (header) {
            header.addEventListener('click', () => {
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
        }
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

window.initApp = initApp;
