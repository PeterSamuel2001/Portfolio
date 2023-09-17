// back to top and header links transitions

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


