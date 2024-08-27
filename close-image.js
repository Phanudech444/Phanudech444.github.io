// JavaScript to close the lightbox when clicking outside the image
document.addEventListener('click', function (event) {
    var lightbox = document.querySelector('.lightbox');
    var isClickInside = lightbox && lightbox.contains(event.target);

    if (lightbox && !isClickInside) {
        lightbox.classList.remove('lightbox-open'); // ปิด lightbox
    }
});
