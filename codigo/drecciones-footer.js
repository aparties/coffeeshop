const socialIcons = document.querySelector('.social-icons');
const direcciones = socialIcons.children;
Array.from(direcciones).forEach((element, index) => {
    element.addEventListener('click', () => {
        if (index === 0) {
            element.setAttribute("href", "https://web.facebook.com/");
        } else if (index === 1) {
            element.setAttribute("href", "https://x.com/?lang=es");
        } else if (index === 2) {
            element.setAttribute("href", "https://www.instagram.com/");
        } else if (index === 3) {
            element.setAttribute("href", "https://pe.linkedin.com/jobs");
        }
    });
});