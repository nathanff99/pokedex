document.addEventListener('DOMContentLoaded', init, false);

function init() {
    initMenu()
    initCarousel()
}

function initMenu() {
    const menu = document.querySelector(".menu-mobile");
    const hamburger = document.querySelector(".hamburger .button");
    const closeIcon = document.querySelector(".hamburger .button .button__close");
    const menuIcon = document.querySelector(".hamburger .button .button__icon");

    function toggleMenu() {
        if (menu.classList.contains("menu-mobile--show")) {
            menu.classList.toggle("menu-mobile--show");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        } else {
            menu.classList.toggle("menu-mobile--show");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
        }
    }

    hamburger.addEventListener("click", toggleMenu);
}

function initCarousel() {
    const countCarousels = document.querySelector('.carousel')


    if (countCarousels) {
        const interval = 5000
        const animDuration = 600;

        const carousel = document.querySelector(".carousel")
        const dots = carousel.querySelector(".carousel__dots")
        const images = carousel.querySelectorAll(".carousel__image")

        let currentImage = 0;
        let previousImage = images.length - 1;
        let intrvl;
        let timeout;

        for (let i = 0; i < images.length; ++i) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dots.appendChild(dot);
            dot.addEventListener("click", dotClick.bind(null, i), false);
        }

        const allDots = dots.querySelectorAll(".dot");
        allDots[0].classList.add("dot--active");

        images[0].style.top = "0";
        timeout = setTimeout(() => {
            animateCarousel();
            images[0].style.top = "";
            intrvl = setInterval(animateCarousel, interval);
        }, interval - animDuration);

        function animateCarousel(nextImage, top) {
            if (!nextImage) {
                nextImage = currentImage + 1 < images.length ? currentImage + 2 : 1;
            }

            --nextImage;
            images[previousImage].style.animationName = "";

            if (!top) {
                images[nextImage].style.animationName = "topNext";
                images[currentImage].style.animationName = "topCurrent";
            } else {
                images[nextImage].style.animationName = "bottomNext";
                images[currentImage].style.animationName = "bottomCurrent";
            }

            previousImage = currentImage;
            currentImage = nextImage;

            currDot = allDots[currentImage];
            currDot.classList.add("dot--active");
            prevDot = allDots[previousImage];
            prevDot.classList.remove("dot--active");
        }

        function dotClick(num) {
            if (num == currentImage) {
                return false;
            }

            clearTimeout(timeout);
            clearInterval(intrvl);

            if (num > currentImage) {
                animateCarousel(num + 1);
            } else {
                animateCarousel(num + 1, true);
            }

            intrvl = setInterval(animateCarousel, interval);
        }
    }
}