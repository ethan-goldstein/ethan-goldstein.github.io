// Ethan Goldstein

const url = "https://ethan-goldstein.github.io/json/cookies.json";

const getCookies = async () => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

//gets the cookies from the json file and adds a card for each one
const showCookies = async () => {
    const cookies = await getCookies();
    const cookieList = document.getElementById("cookie-list");

    if (cookies == null) {
        cookieList.innerHTML = "<p>Sorry, we couldn't load our cookies right now.</p>";
        return;
    }

    cookies.forEach((cookie) => {
        cookieList.append(getCookieSection(cookie));
    });
};

const getCookieSection = (cookie) => {
    const section = document.createElement("section");
    section.classList.add("gallery-card");

    const img = document.createElement("img");
    img.src = cookie.img_name;
    img.alt = cookie.name;
    section.append(img);

    const h3 = document.createElement("h3");
    h3.innerHTML = cookie.name;
    section.append(h3);

    const category = document.createElement("p");
    category.classList.add("category");
    category.innerHTML = cookie.category;
    section.append(category);

    const description = document.createElement("p");
    description.innerHTML = cookie.description;
    section.append(description);

    const details = document.createElement("p");
    details.classList.add("cookie-details");
    details.innerHTML = `${cookie.price} &middot; Minimum order: ${cookie.min_order}`;
    section.append(details);

    return section;
};

showCookies();