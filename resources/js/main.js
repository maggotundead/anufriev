
const articlesSwiper = new Swiper('.js-articles-swiper', {
    slidesPerView: 3,
    loop: false,
    draggable: true,
    spaceBetween: 30,
    mousewheel: {
        forceToAxis: true,
    },
    noSwiping: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        1025: {
            slidesPerView: 3,
        }
    }
});

//
const massMediaSwiper = new Swiper('.js-media-swiper', {
    slidesPerView: 1,
    loop: true,
    draggable: true,
    spaceBetween: 30,
    // mousewheel: {
    //     forceToAxis: true,
    // },
    noSwiping: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        prevEl: '#prev-article',
        nextEl: '#next-article',
    },
    runCallbacksOnInit: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
let counter = document.getElementById('articles-counter');
function change(){
    counter.innerHTML = `<span>${ massMediaSwiper.realIndex +  1 }</span>/<span>${ massMediaSwiper.slides.length - 2 }</span>`; // if loop
    // counter.innerHTML = `<span>${ massMediaSwiper.realIndex +  1 }</span>/<span>${ massMediaSwiper.slides.length }</span>`; // if no loop
}

if ( counter ) {
    change();
    document.getElementById('next-article').addEventListener('click', change);
    document.getElementById('prev-article').addEventListener('click', change);
}

const massThumbsSwiper = new Swiper('.js-thumbs-swiper', {
    slidesPerView: 'auto',
    loop: true,
    draggable: false,
    noSwiping: true,
    navigation: {
        prevEl: '#prev-article',
        nextEl: '#next-article',
    },
});

// massMediaSwiper.controller.control = massThumbsSwiper;
// massThumbsSwiper.controller.control = massMediaSwiper;
//


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

const contactModal = document.querySelector('.contact-modal');
document.querySelectorAll('[data-modal-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
        contactModal.classList.add('open');
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('open');
        });
    });
});
document.querySelectorAll('.modal-overlay').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('open');
        });
    });
});