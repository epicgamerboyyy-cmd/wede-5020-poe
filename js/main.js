// Scroll-reveal animations for index page
// elements with class "fade-in" animate in as the user scrolls down

document.addEventListener('DOMContentLoaded', function () {
    // fall back gracefully if the browser doesnt support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.fade-in').forEach(function (el) {
            el.classList.add('visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(function (el) {
        observer.observe(el);
    });
});
