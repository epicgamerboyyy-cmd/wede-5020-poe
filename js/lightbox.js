// Lightbox - click any hero banner image to view it full screen
// Part 3 - JavaScript functionality

document.addEventListener('DOMContentLoaded', function () {
    // create the lightbox overlay elements
    var overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Image viewer');

    var img = document.createElement('img');
    img.id = 'lightboxImg';
    img.alt = '';

    var closeBtn = document.createElement('button');
    closeBtn.id = 'lightboxClose';
    closeBtn.textContent = '×';
    closeBtn.setAttribute('aria-label', 'Close image viewer');

    overlay.appendChild(closeBtn);
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    // make all hero banner images clickable
    var bannerImgs = document.querySelectorAll('.hero-banner-container img');
    bannerImgs.forEach(function (bannerImg) {
        bannerImg.style.cursor = 'zoom-in';
        bannerImg.setAttribute('title', 'Click to enlarge');

        bannerImg.addEventListener('click', function () {
            img.src = this.src;
            img.alt = this.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            closeBtn.focus();
        });
    });

    // close on button click
    closeBtn.addEventListener('click', closeLightbox);

    // close on overlay background click
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeLightbox();
    });

    // close with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        img.src = '';
    }
});
