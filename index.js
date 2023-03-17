import {petCareItemsArray} from '/data.js'
import {achievementItemsArray} from '/data.js'

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

body.addEventListener("click", function(e){	
	if (e.target.id === "feed-btn"){
		addToPetCareArray("food")
	} else if (e.target.id === "play-btn"){
		addToPetCareArray("play")
	} else if (e.target.id === "groom-btn"){
		addToPetCareArray("groom")
	} else if (e.target.id === "reset-btn"){
		resetGame()
	} else if (e.target.id === "cyp-sendbtn"){
		renderMainApp()
    }
})

function renderMainApp() {

// here my idea was to first get the data from the choose your pet section
// and then render the app section in this function
// but lets see how it goes: maybe we want to break this into several different functions, maybe not

    const appSection = document.getElementById("app-section")
    appSection.innerHTML = `
        <header>
            <h1 class="page-title" id="pet-name">Pocket Pet</h1>
            <!-- "Pocket Pet" will be replaced with user name input -->
            <img src="./images/cat 1.png" class="pfp" id="pet-pic" />
        </header>

        <div class="action-btns flex">
            <button class="btn btn-action" id="feed-btn">🍖</button>
            <button class="btn btn-action" id="play-btn">⚽</button>
            <button class="btn btn-action" id="groom-btn">🧼</button>
        </div>

        <div class="cards">
            <div class="card full-width">
            <h2>Pet care</h2>
            <div class="pill" id="pet-care">🍖🍖🍖⚽🍖🍖🧼⚽⚽</div>
            </div>

            <div class="card full-width">
            <h2>Achievements</h2>
            <div class="pill" id="achievements">🐕💝🦴‍</div>
            </div>

            <div class="card half-width">
            <h2>Total Score</h2>
            <div class="pill" id="score">649</div>
            </div>

            <div class="card half-width">
            <h2>Pet Level</h2>
            <div class="pill" id="level">3</div>
            </div>
        </div>
    `
}

renderMainApp()
