// Ethan Goldstein

//destination information
const mountains = [];
mountains["Asheville"] = "https://www.google.com/maps?q=Asheville,NC&output=embed";
mountains["Boone"] = "https://www.google.com/maps?q=Boone,NC&output=embed";
mountains["Hot Springs"] = "https://www.google.com/maps?q=Hot+Springs,NC&output=embed";
mountains["Table Rock"] = "https://www.google.com/maps?q=Table+Rock,SC&output=embed";

const beaches = [];
beaches["Myrtle Beach"] = "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed";
beaches["Hilton Head"] = "https://www.google.com/maps?q=Hilton+Head,SC&output=embed";
beaches["Folly Beach"] = "https://www.google.com/maps?q=Folly+Beach,SC&output=embed";
beaches["Isle of Palms"] = "https://www.google.com/maps?q=Isle+of+Palms,SC&output=embed";

const destinationType = document.getElementById("destination-type");
const destinationList = document.getElementById("destination-list");
const mapArea = document.getElementById("map-area");
const destinationMap = document.getElementById("destination-map");

//shows the destinations for the selected type
destinationType.onchange = (e) => {
    destinationList.innerHTML = "";
    mapArea.classList.add("hidden");
    destinationMap.src = "";

    let destinations = [];

    if(e.target.value == "mountains") {
        destinations = mountains;
    } else if(e.target.value == "beaches") {
        destinations = beaches;
    }

    const destinationNames = [];

    for(let destination in destinations) {
        destinationNames.push(destination);
    }

    destinationNames.forEach((destination) => {
        const link = document.createElement("a");
        link.href = "#";
        link.innerHTML = destination;

        link.onclick = (e) => {
            e.preventDefault();
            destinationMap.src = destinations[destination];
            mapArea.classList.remove("hidden");
        };

        destinationList.append(link);
    });
};