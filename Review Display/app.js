const rev1 = document.getElementById("rev1");
const rev2 = document.getElementById("rev2");
const rev3 = document.getElementById("rev3");
const rev4 = document.getElementById("rev4");
const reviews = [rev1, rev2, rev3, rev4];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const surprise = document.getElementById("surprise");

prev.addEventListener("click", () => {
    let currentActive = getActive();
    let currentIndex = reviews.indexOf(currentActive);
    currentActive.classList.remove("active");
    if (currentIndex == 0) {
        reviews[reviews.length - 1].classList.add("active");
    } else {
        reviews[currentIndex - 1].classList.add("active");
    }
});

next.addEventListener("click", () => {
    let currentActive = getActive();
    let currentIndex = reviews.indexOf(currentActive);
    currentActive.classList.remove("active");
    if (currentIndex == reviews.length - 1) {
        reviews[0].classList.add("active");
    } else {
        reviews[currentIndex + 1].classList.add("active");
    }
});

surprise.addEventListener("click", () => {
    let randomNumber;
    let currentActive = getActive();
    let currentIndex = reviews.indexOf(currentActive);
    currentActive.classList.remove("active");
    do {
        randomNumber = Math.floor(Math.random() * (reviews.length));
    } while (randomNumber == currentIndex);
    reviews[randomNumber].classList.add("active");
});

function getActive() {
    let active;
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].classList.contains("active")) {
            active = reviews[i];
        }
    }
    return active;
}