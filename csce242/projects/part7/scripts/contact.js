// Ethan Goldstein
//https://web3forms.com/

const form = document.getElementById("contact-form");
const result = document.getElementById("result");

const showResult = (message, type) => {
    result.innerHTML = message;
    result.className = type;
};

//pauses so the message doesn't just flicker on and off
const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

//shows an error if a required field is empty or filled in wrong
form.addEventListener("invalid", () => {
    showResult("Please fill out all the required fields.", "error");
}, true);

form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "23a460a0-68ac-476c-b02d-1ee47215e3b3");
    formData.append("subject", "New Sweet Expressions Order Request");

    showResult("Sending...", "");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        await wait(1000);

        if (response.ok) {
            showResult("Thank you! Your order request was sent. We'll be in touch soon.", "success");
            form.reset();
        } else {
            showResult("Error: " + data.message, "error");
        }
    } catch (error) {
        await wait(1000);
        showResult("Sorry, we couldn't send your request. Please try again.", "error");
    }
};