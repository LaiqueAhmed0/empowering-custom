$(document).ready(() => {
    $('.responsive').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.responsive1').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    document.querySelectorAll('.responsive button.slick-prev.slick-arrow').forEach(el => {
        el.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    });
    document.querySelectorAll('.responsive button.slick-next.slick-arrow').forEach(el => {
        el.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    });
    document.querySelectorAll('.responsive1 button.slick-prev.slick-arrow').forEach(el => {
        el.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>';
    });
    document.querySelectorAll('.responsive1 button.slick-next.slick-arrow').forEach(el => {
        el.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>';
    });

    const scrollButton = document.getElementById('scrollButton');
    const scrollDuration = 800;

    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            const start = window.scrollY;
            const target = start + window.innerHeight * 1;
            const startTime = performance.now();

            function animateScroll(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / scrollDuration, 1);
                const ease = easeInOutQuad(progress);

                window.scrollTo(0, start + (target - start) * ease);

                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            }

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            }

            requestAnimationFrame(animateScroll);
        });
    }

    const modalOpen = document.getElementById('video-play-button');
    const modalClose = document.getElementById('video-close-button');
    const modal = document.getElementById('video-modal');

    if (modalOpen && modalClose && modal) {
        modalOpen.addEventListener('click', () => {
            modal.style.top = "0%";
            document.body.style.overflow = "hidden";
        });

        modalClose.addEventListener('click', () => {
            modal.style.top = "-500%";
            document.body.style.overflow = "auto";
        });
    }

    const menuBar = document.getElementById('menu-bar');
    const menuModal = document.getElementById('menu-modal');
    const menuModalClose = document.getElementById('menu-modal-close');

    if (menuBar && menuModal && menuModalClose) {
        menuBar.addEventListener('click', () => {
            menuModal.style.left = "0%";
            document.body.style.overflow = "hidden";
        });

        menuModalClose.addEventListener('click', () => {
            menuModal.style.left = "-100%";
            document.body.style.overflow = "auto";
        });
    }

    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});

Fancybox.bind('[data-fancybox="gallery"]', {
    infinite: true,
    loop: true,
    arrows: true,
    buttons: ["close"],
  });



  document.querySelectorAll('.ep-modal-button').forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('ep-modal');
        const iframe = modal.querySelector('iframe');
        const url = button.getAttribute('data-url');
        iframe.src = url;
        modal.style.top = '0%';
        document.body.style.overflow = "hidden";
    });
});


    document.getElementById('ep-modal-close').addEventListener('click', () => {
        const modal = document.getElementById('ep-modal');
        const iframe = modal.querySelector('iframe');
        iframe.src = "";
        modal.style.top = '-500%';
        document.body.style.overflow = "auto";
    });

