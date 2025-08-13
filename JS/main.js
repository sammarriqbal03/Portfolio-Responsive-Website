

/*=========== Toggle icon navbar ===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*=========== Scroll Section Active Link ===========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);
};

/*=========== Scroll Reveal ===========*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .Portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img-box', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=========== Typed.js Animation ===========*/
document.addEventListener("DOMContentLoaded", function () {
    const textArray = [
        "Software Engineering Student",
        "UI/UX Designer",
        "Frontend Developer"
    ];
    let typingText = document.getElementById("typing-text");
    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
        let current = textArray[arrayIndex];

        if (isDeleting) {
            typingText.textContent = current.substring(0, charIndex--);
            delay = 50; // delete speed
        } else {
            typingText.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            delay = 100; // typing speed
        }

        // When word is fully typed
        if (!isDeleting && charIndex === current.length) {
            delay = 1500; // pause before deleting
            isDeleting = true;
        }
        // When deleting is done
        else if (isDeleting && charIndex === 1) { // stop at first letter
            isDeleting = false;
            arrayIndex = (arrayIndex + 1) % textArray.length;
            delay = 200; // quick switch to next word
        }

        setTimeout(type, delay);
    }

    type();
});