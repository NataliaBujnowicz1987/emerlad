function menuBurger() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-mobile-links');
    const navLinks = document.querySelectorAll('.nav-mobile-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // console.log('click');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 + 0.5}s`
            }
            burger.classList.toggle('toggle');
        })
    })

    for (let i = 0; i < navLinks.length; i++) {

        navLinks[i].addEventListener('click', () => {
            nav.classList.remove('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 + 0.5}s`
                }
                burger.classList.toggle('toggle');
            })

        })
    }
}


menuBurger()
