
const productsSwiper = new Swiper('.js-products-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    mousewheel: {
        forceToAxis: true,
    },
    noSwiping: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
});


document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-menu-open');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});