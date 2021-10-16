const menuButton = document.querySelector("button.header-nav-btn"),
      menuList = document.querySelector(".header-nav");

const searchButton = document.querySelector(".search-btn"),
      searchForm = document.querySelector("form.header-form");

if (menuButton) {
    menuButton.addEventListener("click", e => {
        menuList.classList.toggle("header-nav-active");
        const menuButtonIconMenu = document.querySelector(".header-nav-btn-icon-menu"),
              menuButtonIconClose = document.querySelector(".header-nav-btn-icon-close");

        menuButtonIconMenu.classList.toggle("header-nav-btn-icon-active");
        menuButtonIconClose.classList.toggle("header-nav-btn-icon-active");
    })
}

if (searchButton) {
    searchButton.addEventListener("click", e => {
        searchForm.classList.toggle("header-form--active");

        const searchButtonIconSearch = document.querySelector(".search-btn-icon-search"),
              searchButtonIconClose = document.querySelector(".search-btn-icon-close");

        searchButtonIconSearch.classList.toggle("search-btn-icon-active");
        searchButtonIconClose.classList.toggle("search-btn-icon-active");
    })
}

const swiper = new Swiper('.home-first-hero_swiper', {
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    effect: 'slide',
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.home-first_navigation-next',
        prevEl: '.home-first_navigation-previous'
    }
})

const partnersSlider = new Swiper('.partners-slider_container', {
    loop: true,
    slidesPerView: 4,
    effect: 'slide',
    autoplay: {
        delay: 5000
    },
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1181: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: '.partners-slider_navigation-next',
        prevEl: '.partners-slider_navigation-previous'
    }
})