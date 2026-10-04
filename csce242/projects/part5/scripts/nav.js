// Ethan Goldstein

//shows and hides the menu on small screens
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
    document.getElementById("toggle-nav").classList.toggle("arrow-up");
};