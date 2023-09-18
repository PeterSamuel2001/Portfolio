// back to top

document.addEventListener('DOMContentLoaded', function () {
    var headerLink = document.getElementById("backToTop");
    headerLink.addEventListener('click', function (event) {
        event.preventDefault(); // prevent the default behavior of jumping to the section

        var section = document.querySelector(event.target.getAttribute('href'));
        var scrollOffset = 0; // adjust this value according to your needs

        window.scrollTo({
            top: section.offsetTop - scrollOffset,
            behavior: 'smooth' // adds smooth scrolling effect
        });
    });
});

let span = document.getElementById("backToTop");

window.onscroll = function () {
    this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

//

// header links transitions

document.addEventListener('DOMContentLoaded', function () {
    var headerLink = document.getElementById("section2");
    headerLink.addEventListener('click', function (event) {
        event.preventDefault(); // prevent the default behavior of jumping to the section

        var section = document.querySelector(event.target.getAttribute('href'));
        var scrollOffset = 100; // adjust this value according to your needs

        window.scrollTo({
            top: section.offsetTop - scrollOffset,
            behavior: 'smooth' // adds smooth scrolling effect
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var headerLink = document.getElementById("section3");
    headerLink.addEventListener('click', function (event) {
        event.preventDefault(); // prevent the default behavior of jumping to the section

        var section = document.querySelector(event.target.getAttribute('href'));
        var scrollOffset = 100; // adjust this value according to your needs

        window.scrollTo({
            top: section.offsetTop - scrollOffset,
            behavior: 'smooth' // adds smooth scrolling effect
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var headerLink = document.getElementById("section4");
    headerLink.addEventListener('click', function (event) {
        event.preventDefault(); // prevent the default behavior of jumping to the section

        var section = document.querySelector(event.target.getAttribute('href'));
        var scrollOffset = 100; // adjust this value according to your needs

        window.scrollTo({
            top: section.offsetTop - scrollOffset,
            behavior: 'smooth' // adds smooth scrolling effect
        });
    });
});

//


// active navigation link, section, page or whatever.

const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const scrolledY = window.scrollY;

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        const sectionTop = section.offsetTop - 220;
        const sectionHeight = section.offsetHeight;

        if (scrolledY >= sectionTop && scrolledY < sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

//

// checkbtn and closebtn for mobile burger menu toggle (it makes checkbtn dissapear while closebtn appear and vice versa)

document.getElementById('check').addEventListener('change', function() {
    var checkBtn = document.querySelector('.checkbtn');
    var closeBtn = document.querySelector('.closebtn');

    if (this.checked) {
        checkBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        checkBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }
});

//