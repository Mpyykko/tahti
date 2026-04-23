window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 80) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navHeight = document.getElementById('mainNav').offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });

            const navCollapse = document.getElementById('navbarResponsive');
            if (navCollapse.classList.contains('show')) {
                navCollapse.classList.remove('show');
            }
        }
    });
});

document.getElementById('submitButton').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Täytä kaikki kentät ennen lähettämistä.');
        return;
    }

    this.textContent = '✓ Viesti lähetetty!';
    this.classList.remove('btn-primary');
    this.classList.add('btn-success');
    this.disabled = true;

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});