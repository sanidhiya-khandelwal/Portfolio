function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' })
}

// header links
document.querySelector('a[href="#home-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('home');
})

document.querySelector('a[href="#about-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('hero');
})

document.querySelector('a[href="#techstack-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('techstack');
})

document.querySelector('a[href="#projects-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('projects');
})

//footer links
document.querySelector('a[href="#home-section-footer"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('home');
})

document.querySelector('a[href="#about-section-footer"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('hero');
})

document.querySelector('a[href="#techstack-section-footer"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('techstack');
})

document.querySelector('a[href="#projects-section-footer"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('projects');
})