/* =========================================================
   ABC247 LANDING PAGE
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CURRENT YEAR
    ====================================================== */

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ====================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        /* Fallback for older browsers */

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }



    /* =====================================================
       HEADER SCROLL EFFECT
    ====================================================== */

    const header = document.querySelector(".site-header");


    function updateHeader() {

        if (!header) {
            return;
        }


        if (window.scrollY > 20) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );



    /* =====================================================
       SMOOTH INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top
                +
                window.pageYOffset
                -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });



    /* =====================================================
       WHATSAPP CTA INTERACTION
    ====================================================== */

    const whatsappButtons =
        document.querySelectorAll(
            'a[href*="tinyurl.com/mwanxs2y"]'
        );


    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            /*
             * We intentionally do NOT modify the URL.
             *
             * Every WhatsApp CTA already points directly to:
             *
             * https://tinyurl.com/mwanxs2y
             *
             * This keeps the CTA simple and reliable.
             */

            button.classList.add("cta-clicked");


            setTimeout(function () {

                button.classList.remove("cta-clicked");

            }, 600);

        });

    });



    /* =====================================================
       SPORT CARD MICRO INTERACTION
    ====================================================== */

    const sportCards =
        document.querySelectorAll(".sport-card");


    sportCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add("sport-hover");

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove("sport-hover");

            }
        );

    });



    /* =====================================================
       HERO IMAGE ERROR HANDLING
    ====================================================== */

    const heroImage =
        document.querySelector(".hero-banner img");


    if (heroImage) {

        heroImage.addEventListener(
            "error",
            function () {

                /*
                 * If ABM.png cannot be loaded, the page will
                 * still remain functional instead of producing
                 * a broken-image icon.
                 */

                heroImage.style.display = "none";

                const heroBanner =
                    document.querySelector(".hero-banner");


                if (heroBanner) {

                    heroBanner.classList.add(
                        "banner-missing"
                    );

                }

            }
        );

    }



    /* =====================================================
       MOBILE NAVIGATION TOGGLE
    ====================================================== */

    const navToggle = document.getElementById("navToggle");
    const siteHeader = document.querySelector(".site-header");
    const siteNav = document.getElementById("siteNav");

    if (navToggle && siteHeader) {

        navToggle.addEventListener("click", function () {

            const isOpen = siteHeader.classList.toggle("nav-open");

            navToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        if (siteNav) {

            siteNav.querySelectorAll("a").forEach(function (link) {

                link.addEventListener("click", function () {

                    siteHeader.classList.remove("nav-open");

                    navToggle.setAttribute("aria-expanded", "false");

                });

            });

        }

    }



    /* =====================================================
       PAGE LOADED
    ====================================================== */

    document.body.classList.add("page-loaded");

});