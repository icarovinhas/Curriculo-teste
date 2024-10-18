var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

const swiperDepoimentos = new Swiper('#swiper-depoimentos', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.querySelectorAll('.pergunta-titulo').forEach(titulo => {
    titulo.addEventListener('click', () => {
        const texto = titulo.nextElementSibling;
        texto.style.display = texto.style.display === 'none' ? 'block' : 'none';
    });
});
