document.addEventListener('DOMContentLoaded', () => {
    const commonElements = {
        nav: `
            <div class="container">
                <a href="/" class="logo">AI Code Academy</a>
                <button class="hamburger">
                    <span></span><span></span><span></span>
                </button>
                <div class="right-section">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/course.html">Course</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                    <div class="theme-switch">
                        <input type="checkbox" id="theme-toggle">
                        <label for="theme-toggle"></label>
                    </div>
                </div>
            </div>
        `,
        footer: `
            <div class="container">
                <p>&copy; 2024 AI Code Academy. All rights reserved.</p>
            </div>
        `
    };

    // Inject HTML
    document.querySelector('nav').innerHTML = commonElements.nav;
    document.querySelector('footer').innerHTML = commonElements.footer;

    // Initialize theme
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        themeToggle.checked = savedTheme === 'light';
    }

    // Theme toggle functionality
    const themeSwitch = document.querySelector('.theme-switch');
    themeSwitch.addEventListener('click', (e) => {
        // Toggle theme
        const isLight = themeToggle.checked;
        document.body.setAttribute('data-theme', isLight ? 'light' : 'dark');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Close menu after theme switch
        if (rightSection.classList.contains('active')) {
            toggleMenu();
        }
        
        // Prevent event from bubbling up to nav links
        e.stopPropagation();
        
        // Force page reload after a short delay
        setTimeout(() => {
            window.location.reload();
        }, 150);
    });

    // Remove the previous theme toggle listener
    themeToggle.removeEventListener('change', () => {});

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const rightSection = document.querySelector('.right-section');
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);

    function toggleMenu() {
        hamburger.classList.toggle('active');
        rightSection.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = rightSection.classList.contains('active') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (rightSection.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}); 