document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    }

    // Initial display
    images[currentIndex].classList.add('active');

    // Change image every 3 seconds
    setInterval(showNextImage, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            let nextElement = element.nextElementSibling;
            nextElement.classList.toggle('show');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.cat-carousel');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    }

    // Initial display
    images[currentIndex].classList.add('active');

    // Change image every 3 seconds
    setInterval(showNextImage, 3000);
});
