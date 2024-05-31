tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                tthoves: ["TT Hoves Pro Trial"],
            },
            colors: {
                'primary-00': '#1254FF',
                'primary-01': '#293356',
            }
        }
    }
};



const swiper = new Swiper('.swiper.join-facebook-groups', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination.join-facebook-groups',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next.join-facebook-groups',
        prevEl: '.swiper-button-prev.join-facebook-groups',
    },
});