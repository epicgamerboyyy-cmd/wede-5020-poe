// Accordion component for the services FAQ section
// clicking a header toggles the panel open and closed

document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var body = this.nextElementSibling;
            var isOpen = this.classList.contains('active');

            // close everything first
            document.querySelectorAll('.accordion-header').forEach(function (h) {
                h.classList.remove('active');
                h.setAttribute('aria-expanded', 'false');
                h.nextElementSibling.style.maxHeight = null;
            });

            // if the clicked one was closed, open it now
            if (!isOpen) {
                this.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });

        // keyboard support - open with Enter or Space
        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // open the first one by default so the page doesnt look broken
    if (headers.length > 0) {
        headers[0].click();
    }
});
