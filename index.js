//* Select HTML elements

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
