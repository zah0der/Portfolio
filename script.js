document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.myworkimage');

    images.forEach(image => {
        image.style.border = '3px solid transparent';
        image.style.borderImage = 'linear-gradient(276deg, rgba(31,103,71,1) 0%, rgba(60,27,101,1) 46%, rgba(27,137,159,1) 100%)';
        image.style.borderImageSlice = '1';
        image.style.transition = 'border-image 0.3s ease';
    });
});

