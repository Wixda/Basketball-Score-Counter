const homeCounter = document.getElementById("home-counter");
const guestCounter = document.getElementById("guest-counter");
let homeCount = 0;
let guestCount = 0;

function homePlusOne() {
    homeCount++;
    homeCounter.innerText = homeCount;
}

function homePlusTwo() {
    homeCount += 2;
    homeCounter.innerText = homeCount;
}

function homePlusThree() {
    homeCount += 3;
    homeCounter.innerText = homeCount;
}


function awayPlusOne() {
    guestCount++;
    guestCounter.innerText = guestCount;
}
function awayPlusTwo() {
    guestCount += 2;
    guestCounter.innerText = guestCount;
}

function awayPlusThree() {
    guestCount += 3;
    guestCounter.innerText = guestCount;
}

function reset() {
    homeCount = 0;
    guestCount = 0;
    homeCounter.innerText = 0;
    guestCounter.innerText = 0;
}