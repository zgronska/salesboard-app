import { petCareItemsArray, achievementItemsArray } from '/data.js'

//* Select HTML elements

// Body
const body = document.querySelector("body")

//? Main app

const petName = document.getElementById("pet-name"); // Pet name heading
const petPic = document.getElementById("pet-pic"); // Pet picture

// Action buttons
const feedBtn = document.getElementById("feed-btn");
const playBtn = document.getElementById("play-btn");
const groomBtn = document.getElementById("groom-btn");

// Cards - to be filled with values
const petCareEl = document.getElementById("pet-care"); // Pet care
const achievementsEl = document.getElementById("achievements"); // Achievements
const scoreEl = document.getElementById("score"); // Score
const levelEl = document.getElementById("level"); // Level

//? Choose your pet

const cypSection = document.getElementById("cyp-section");

// Pet type radio buttons
const cypDog = document.getElementById("cyp-dog");
const cypCat = document.getElementById("cyp-cat");

// Pet name input
const cypName = document.getElementById("cyp-name");

const cypSendBtn = document.getElementById("cyp-sendbtn"); // Send button

//? Pop up

const achievementEmoji = document.getElementById("achievement-emoji"); // Span element for emoji

const popupBtn = document.getElementById("btn-popup"); // Close popup button

//? COMMENTS
//? We probably won't need all of these, but I wrote it all out just in case. After we're done, let's delete the unused ids from HTML. We should also move them to local functions as we write them for better practice, as in general elements should not be accessed globally if they are not needed.

//TODO: Add event listeners to the buttons
//code here


// EVENT LISTENERS FOR BUTTONS 

const actionBtns = document.querySelector(".action-btns")

actionBtns.addEventListener("click", function(e){	
	if (e.target.id === "feed-btn"){
		addToPetCareArray("food")
	} else if (e.target.id === "play-btn"){
		addToPetCareArray("play")
	} else if (e.target.id === "groom-btn"){
		addToPetCareArray("groom")
	} 
	
	
})

//event listener for section containing reset button
//event listener for CYP section

function renderMainApp(name, pet) {

    const appSection = document.getElementById("app-section")
    appSection.innerHTML = `
        <header>
            <h1 class="page-title" id="pet-name">${name}</h1>
            // Not sure what would be the best way to render the pics, because they're dependent both on the choice in CYP, and the levelling up
            // Option one: hardcode the HTML. Not sure how to implement level up change later
            <img src="./images/${pet} 1.png" class="pfp" id="pet-pic" />
            // Option two: separate function that renders the initial pic & changes the pic on level up
            renderPetPic(pet, 1)
        </header>

        <div class="action-btns flex">
            <button class="btn btn-action" id="feed-btn">🍖</button>
            <button class="btn btn-action" id="play-btn">⚽</button>
            <button class="btn btn-action" id="groom-btn">🧼</button>
        </div>

        <div class="cards">
            <div class="card full-width">
            <h2>Pet care</h2>
            <div class="pill" id="pet-care"></div>
            </div>

            <div class="card full-width">
            <h2>Achievements</h2>
            <div class="pill" id="achievements"></div>
            </div>

            <div class="card half-width">
            <h2>Total Score</h2>
            <div class="pill" id="score">0</div>
            </div>

            <div class="card half-width">
            <h2>Pet Level</h2>
            <div class="pill" id="level">1</div>
            </div>
        </div>
    `
}

renderMainApp()
