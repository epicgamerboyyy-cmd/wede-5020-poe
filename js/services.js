// Accordion + search filter for services page
// Part 3 - JavaScript functionality

document.addEventListener('DOMContentLoaded', function () {

    // ── ACCORDION ──────────────────────────────────────────────
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

            // open clicked one if it was closed
            if (!isOpen) {
                this.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });

        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    if (headers.length > 0) {
        headers[0].click();
    }

    // ── SEARCH / FILTER ────────────────────────────────────────
    var searchInput = document.getElementById('serviceSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        var query = this.value.toLowerCase().trim();

        // filter service cards
        var cards = document.querySelectorAll('.service-card');
        cards.forEach(function (card) {
            var text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
        });

        // filter FAQ accordion items
        var items = document.querySelectorAll('.accordion-item');
        items.forEach(function (item) {
            var text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        });

        // show a no results message if everything is hidden
        var noResults = document.getElementById('noResults');
        var allHidden =
            Array.from(cards).every(function (c) { return c.style.display === 'none'; }) &&
            Array.from(items).every(function (i) { return i.style.display === 'none'; });

        if (noResults) noResults.style.display = allHidden ? 'block' : 'none';

        // if search is cleared, reopen the first accordion item
        if (query === '' && headers.length > 0) {
            headers[0].click();
        }
    });
});
