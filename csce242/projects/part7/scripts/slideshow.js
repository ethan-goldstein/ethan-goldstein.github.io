// Ethan Goldstein

const slides = document.querySelectorAll("#slides img");
const dots = document.getElementById("slide-dots");

const getCurrentSlide = () => {
    return document.querySelector("#slides img:not(.hidden)");
};

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
    updateDots();
};

//shows the slide after the current one, starting over at the end
const showNextSlide = () => {
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null) {
        nextSlide = document.querySelector("#slides img:first-child");
    }

    slide(currentSlide, nextSlide);
};

//shows the slide before the current one, wrapping around to the end
const showPreviousSlide = () => {
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.previousElementSibling;

    if(nextSlide == null) {
        nextSlide = document.querySelector("#slides img:last-child");
    }

    slide(currentSlide, nextSlide);
};

document.getElementById("slide-right").onclick = (e) => {
    e.preventDefault();
    showNextSlide();
};

document.getElementById("slide-left").onclick = (e) => {
    e.preventDefault();
    showPreviousSlide();
};

//one dot for each slide, clicking a dot jumps to that slide
slides.forEach((image, index) => {
    const dot = document.createElement("span");

    dot.onclick = () => {
        slide(getCurrentSlide(), slides[index]);
    };

    dots.append(dot);
});

const updateDots = () => {
    const currentSlide = getCurrentSlide();

    slides.forEach((image, index) => {
        dots.children[index].classList.toggle("active", image == currentSlide);
    });
};

updateDots();

//moves to the next slide every 5 seconds
setInterval(showNextSlide, 5000);