var hamburger = document.querySelector(".hamburger--spin");

var nav = document.getElementById("navigation-bar");
var mobileLinks = document.getElementById("mobile-links");

var mainContainer = document.querySelector(".main-container");
var footer = document.querySelector("footer");

hamburger.addEventListener('click', function () {

    mainContainer.style.display = "block";
    footer.style.display = "block";

    /* user closed hamburger menu */
    if (hamburger.classList.contains("is-active")) {

        hamburger.classList.remove("is-active");
        mobileLinks.classList.remove("fadeIn");

        mobileLinks.classList.add("fadeOut");

        /* wait for animation to end and then set the following CSS attributes */
        mobileLinks.addEventListener("animationend", function () {
            mobileLinks.style.opacity = 0;
            mobileLinks.style.zIndex = -1;

            /* move menu off screen */
            mobileLinks.style.transform = "translateX(-320px)";
            nav.style.display = "none";

        }, false);


    } else /* user opened hamburger menu */ {
        footer.style.display = "none";

        nav.style.display = "block";
        nav.style.position = "absolute";

        /* move menu into focus */
        mobileLinks.style.transform = "translateX(0px)";
        mainContainer.style.display = "none";

        hamburger.classList.add("is-active");

        mobileLinks.classList.remove("fadeOut");
        mobileLinks.classList.add("fadeIn");

        /* wait for animation to end and then set the following CSS attributes */
        mobileLinks.addEventListener("animationend", function () {
            mobileLinks.style.opacity = 1;
            mobileLinks.style.zIndex = 2;

            /* make sure menu stays in focus and doesn't disappear */
            mobileLinks.style.transform = "translateX(0px)";
            nav.style.display = "block";

        }, false);

    }
});

