// Ethan Goldstein
//shows a speech bubble when the column is clicked
const speech = document.getElementById("speech");

speech.onclick = (e) => {
    document.getElementById("speech-bubble").classList.add("show-bubble");
};

//shows the selected beverage
const beverage = document.getElementById("beverage");

beverage.onchange = (e) => {
    document.getElementById("beverage-message").innerHTML =
        e.target.value + ": Nice Choice!";
};

//adds a sticker when the image is clicked
const sticker = document.getElementById("sticker-image");

sticker.onclick = (e) => {
    document.getElementById("emoji").innerHTML = "☀️";
};