// Ethan Goldstein

class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    //builds the card that goes in the gallery
    get card() {
        const section = document.createElement("section");
        section.classList.add("vacation-card");

        section.append(this.cardHeader());
        section.append(this.cardImage());

        section.onclick = () => {
            showModal(this);
        };

        return section;
    }

    cardHeader() {
        const header = document.createElement("header");

        const h3 = document.createElement("h3");
        h3.textContent = this.title;

        const p = document.createElement("p");
        p.textContent = `${this.type} Vacation`;

        header.append(h3);
        header.append(p);

        return header;
    }

    cardImage() {
        const img = document.createElement("img");
        img.src = `images/${this.image}`;
        img.alt = `Picture of ${this.title}`;

        return img;
    }

    //builds the popup information from the class variables
    get details() {
        const div = document.createElement("div");
        div.classList.add("vacation-details");

        div.append(this.detailInfo("Type", this.type));
        div.append(this.detailInfo("Description", this.description));
        div.append(this.detailInfo("Things To Do", this.thingsToDo));

        return div;
    }

    detailInfo(property, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${property}:</strong> ${value}`;

        return p;
    }

    get map() {
        const iframe = document.createElement("iframe");
        iframe.src = this.mapSrc;
        iframe.title = `Map of ${this.title}`;

        return iframe;
    }
}

//vacation information
const vacations = [];

vacations.push(new Vacation(
    "Asheville",
    "Mountain",
    "An artsy mountain city in western North Carolina surrounded by the Blue Ridge Mountains.",
    "Tour the Biltmore Estate, drive the Blue Ridge Parkway, explore downtown breweries.",
    "asheville.jpg",
    "https://www.google.com/maps?q=Asheville,NC&output=embed"
));

vacations.push(new Vacation(
    "Boone",
    "Mountain",
    "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
    "Go skiing, visit Appalachian State University, hike Grandfather Mountain.",
    "boone.jpg",
    "https://www.google.com/maps?q=Boone,NC&output=embed"
));

vacations.push(new Vacation(
    "Hot Springs",
    "Mountain",
    "A small mountain town on the French Broad River known for its natural hot mineral springs.",
    "Soak in the hot springs, raft the French Broad River, hike the Appalachian Trail.",
    "hotsprings.jpg",
    "https://www.google.com/maps?q=Hot+Springs,NC&output=embed"
));

vacations.push(new Vacation(
    "Table Rock",
    "Mountain",
    "A state park in upstate South Carolina with a famous granite mountain and a lake.",
    "Hike to the summit of Table Rock, swim in Pinnacle Lake, camp in the park.",
    "tablerock.jpg",
    "https://www.google.com/maps?q=Table+Rock,SC&output=embed"
));

vacations.push(new Vacation(
    "Myrtle Beach",
    "Beach",
    "A busy beach city on the Grand Strand with a boardwalk, amusement rides, and golf courses.",
    "Walk the boardwalk, ride the SkyWheel, play mini golf, relax on the beach.",
    "myrtlebeach.jpg",
    "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed"
));

vacations.push(new Vacation(
    "Hilton Head",
    "Beach",
    "A relaxed island with wide beaches, bike paths, and world class golf.",
    "Bike the island trails, golf at Harbour Town, kayak through the salt marshes.",
    "hiltonhead.jpg",
    "https://www.google.com/maps?q=Hilton+Head,SC&output=embed"
));

vacations.push(new Vacation(
    "Folly Beach",
    "Beach",
    "A laid back surf town on a barrier island just south of Charleston.",
    "Surf at the Washout, fish from the pier, take a day trip to Charleston.",
    "follybeach.jpg",
    "https://www.google.com/maps?q=Folly+Beach,SC&output=embed"
));

vacations.push(new Vacation(
    "Isle of Palms",
    "Beach",
    "A quiet beach community near Charleston with calm water and family friendly beaches.",
    "Rent a paddleboard, eat at the Boardwalk restaurants, watch the sunrise over the ocean.",
    "isleofpalms.jpg",
    "https://www.google.com/maps?q=Isle+of+Palms,SC&output=embed"
));

//modal dialog
const modal = document.createElement("div");
modal.id = "vacation-modal";
modal.classList.add("w3-modal");

const modalContent = document.createElement("div");
modalContent.classList.add("w3-modal-content");
modal.append(modalContent);

const closeButton = document.createElement("span");
closeButton.classList.add("w3-button", "w3-display-topright");
closeButton.innerHTML = "&times;";

const modalBody = document.createElement("div");
modalBody.classList.add("w3-container");

modalContent.append(closeButton);
modalContent.append(modalBody);

document.body.append(modal);

const showModal = (vacation) => {
    modalBody.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = vacation.title;

    const columns = document.createElement("div");
    columns.classList.add("columns");
    columns.append(vacation.map);
    columns.append(vacation.details);

    modalBody.append(h2);
    modalBody.append(columns);

    modal.style.display = "block";
};

const hideModal = () => {
    modal.style.display = "none";
};

closeButton.onclick = hideModal;

//closes the modal when the user clicks outside of it
modal.onclick = (e) => {
    if(e.target == modal) {
        hideModal();
    }
};

//adds every vacation to the page
const vacationsSection = document.getElementById("vacations");

vacations.forEach((vacation) => {
    vacationsSection.append(vacation.card);
});