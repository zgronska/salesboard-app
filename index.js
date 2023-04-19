import { userData, actionsArray, achievementItemsArray } from "/data.js"

// UTILITIES //

//? Utility function to simplify accessing DOM elements
const get = element => document.getElementById(element)

const awardPoints = () => Math.floor(Math.random() * (10 - 1) + 1)

const close = () => {
  // TODO: closes the popup window.
}

// RENDER FUNCTIONS //

const render = userData => {
  // TODO: takes data from local storage and updates the main app with the chosen pet type (image) and name (heading) on the first render, and updates the points, emojis, levels, etc. on the subsequent renders
}

const renderPopUp = () => {
  // TODO: displays the popup with achievement / level information
}

const renderPicture = level => {
  // TODO: changes the pet picture on level up
}

// UPDATE FUNCTIONS //

const updateLevel = () => {
  // TODO: checks if there are enough points for next level. If true, updates the level in userData and calls render() to update the UI. Triggered on updatePoints()
}

const updatePoints = action => {
  // TODO: triggered on click of one of the action buttons. Calls awardPoints(), adds awarded points to the total and calls render() to update the UI.
}

const updateAchievements = () => {
  // TODO: checks if any of the achievement conditions are met. If true, updates userData and calls render() to update the UI.
}

const updateData = () => {
  // TODO: updates the userData and saves it into local storage.
}

// FUNCTION TRIGGERS //

// Action buttons clicked
get("action-btns").addEventListener("click", e => {
  updatePoints(e.target.id)
})

// Page load
window.addEventListener("DOMContentLoaded", () => {
  // TODO
})

// Close pop up button clicked
get("btn-popup").addEventListener("click", close)
