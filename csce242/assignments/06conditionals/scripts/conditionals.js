
//Ethan Goldstein

//toggle the navigation
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
    document.getElementById("toggle-nav").classList.toggle("arrow-up");
};

//show exercise 1
document.getElementById("link-exercise1").onclick = (e) => {
    e.preventDefault();

    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");
};

//show exercise 2
document.getElementById("link-exercise2").onclick = (e) => {
    e.preventDefault();

    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.remove("hidden");
};

//missing class points deduction
document.getElementById("txt-days-missed").onkeyup = (e) => {
    const daysMissed = parseInt(e.target.value);
    const percentLost = daysMissed * 7 / 25;

    const deductionMessage = document.getElementById("deduction-message");
    const classMessage = document.getElementById("class-message");

    if(isNaN(daysMissed)) {
        deductionMessage.innerHTML = "";
        classMessage.innerHTML = "";
    } else {
        deductionMessage.innerHTML =
            `You will lose ${percentLost.toFixed(1)}% for skipping ${daysMissed} days.`;

        if(daysMissed <= 2) {
            classMessage.innerHTML =
                "Missing a day or two should not hurt your grade too much.";
        } else if(daysMissed <= 5) {
            classMessage.innerHTML =
                "Try not to miss too many classes or you may fall behind.";
        } else if(daysMissed <= 8) {
            classMessage.innerHTML =
                "This is not an online class, you are missing valuable learning opportunities.";
        } else {
            classMessage.innerHTML =
                "You are missing a lot of class and it will have a big effect on your grade.";
        }
    }
};

//end of semester counter
const today = new Date();
const endDate = new Date(today.getFullYear(), 11, 4);

const timeDifference = endDate - today;
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

document.getElementById("days-left").innerHTML =
    `You have ${daysLeft} days left in the semester`;

if(daysLeft > 100) {
    document.getElementById("semester-message").innerHTML =
        "Not time to start counting down yet.";
} else if(daysLeft > 50) {
    document.getElementById("semester-message").innerHTML =
        "The semester is moving along.";
} else if(daysLeft > 20) {
    document.getElementById("semester-message").innerHTML =
        "The end of the semester is getting closer!";
} else {
    document.getElementById("semester-message").innerHTML =
        "Almost there!";
}