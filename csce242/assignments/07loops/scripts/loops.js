// Ethan Goldstein
const road = document.getElementById("road");

const colors = [
    "teal",
    "lightblue",
    "lightgreen",
    "salmon",
    "plum",
    "purple"
];

//draw one car
const drawCar = (color, left, top) => {
    const car = document.createElement("div");
    car.classList.add("car");
    car.style.backgroundColor = color;
    car.style.left = left + "%";
    car.style.top = top + "px";

    const carTop = document.createElement("div");
    carTop.classList.add("car-top");
    car.appendChild(carTop);

    const window = document.createElement("div");
    window.classList.add("window");
    car.appendChild(window);

    const leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel");
    leftWheel.classList.add("left-wheel");
    car.appendChild(leftWheel);

    const rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel");
    rightWheel.classList.add("right-wheel");
    car.appendChild(rightWheel);

    road.appendChild(car);
};

//create cars
for(let i = 0; i < 8; i++){
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.floor(Math.random() * 85);

    let top;

    if(Math.random() < 0.5){
        top = 95;
    }
    else {
        top = 190;
    }

    drawCar(color, left, top);
}