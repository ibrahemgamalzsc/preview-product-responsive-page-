var images = [
    'https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fe9d2d4d5f69cabcca75_p2-1.jpg',
    'https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fea32d95ef225ba4280c_p2-2.jpg',
    'https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fea64c7562efc069dc35_p2-3.jpg',
]

var arrowLeft = document.getElementsByClassName('left-arrow')[0];
var arrowRight = document.getElementsByClassName('right-arrow')[0];
var sliderWrapper = document.getElementsByClassName('left-up-cotainer')[0];
var sliderImages;
var current;
var allImages = document.getElementsByClassName('all-images-wrapper')[0];


prepareSlides()
function prepareSlides() {
    images.forEach((image) => {
        const slider = document.createElement('img');
        slider.style.backgroundImage = `url(${image})`;
        slider.style.width = '100%'
        slider.style.backgroundPosition = '100% 50%';
        slider.style.backgroundSize = 'cover';
        slider.style.backgroundRepeat = 'no-repeat';
        slider.classList.add('slider')
        slider.style.transition = '.5s all'

        sliderWrapper.appendChild(slider);

    });
    sliderImages = document.querySelectorAll('.slider');
    startSlide()
    setAllImages()

}

current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Initialize slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// Show previous slide
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next slide
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

function setAllImages() {
    images.forEach((image) => {
        const slider = document.createElement('img');
        slider.style.backgroundImage = `url(${image})`;
        slider.style.width = '100%'
        slider.style.backgroundPosition = '100% 50%';
        slider.style.backgroundSize = 'cover';
        slider.style.backgroundRepeat = 'no-repeat';
        slider.classList.add('slider')
        slider.style.transition = '.5s all'
        allImages.appendChild(slider);

    });
}



var menuToggle = document.getElementById('menu-toggle');

var nav = document.getElementById('nav');

menuToggle.onclick = () => {
    if (nav.style.display == "") {
        nav.style.display = "flex";
        menuToggle.classList.add('close-menu');
    } else {
            menuToggle.classList.remove('close-menu');
            nav.style.display = '';

    }
}

window.addEventListener('mouseup', function (event) {
    if (event.target != nav && event.target.parentNode != nav &&         nav.style.display == "flex") {
        menuToggle.classList.remove('close-menu');
        nav.style.display = 'none';
    }
});