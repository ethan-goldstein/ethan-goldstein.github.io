//Shows a message when the button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
};

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
};

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//when changing the number of days since you watered the plant
//show message and change the image
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = e.target.value;
    const pMessage = document.getElementById("p-plant-message");

    if (numDays <= 2) {
        pMessage.innerHTML = `Let your plant rest, it's only been ${numDays} day(s).`;
    } else if (numDays <= 5) {
        pMessage.innerHTML = `Time to water it's been ${numDays} day(s).`;
    } else if (numDays <= 7) {
        pMessage.innerHTML = `Oh no, your plant is wilting, it's been ${numDays} day(s).`;
    } else {
        pMessage.innerHTML = `Your plant is dead, it's been ${numDays} day(s).`;
    }
}