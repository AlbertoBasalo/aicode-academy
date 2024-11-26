const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'light';
}

themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}); 

// Matrix rain effect for hero section
    const matrixEffect = document.querySelector('.matrix-effect');
    if (matrixEffect) {
        const text = matrixEffect.textContent;
        let index = 0;

        function scrambleText() {
            const scrambled = text.split('').map((char, i) => {
                if (i < index) return char;
                return String.fromCharCode(33 + Math.floor(Math.random() * 94));
            }).join('');

            matrixEffect.textContent = scrambled;

            if (index < text.length) {
                index++;
                setTimeout(scrambleText, 100);
            }
        }

        // Start the effect when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    scrambleText();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(matrixEffect);
    }

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const rightSection = document.querySelector('.right-section');
const menuOverlay = document.querySelector('.menu-overlay');

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