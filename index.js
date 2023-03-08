// Product A info
let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50
}

// Product B info
let productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75
}


/*NOTES:
1. This is a first draft of the JS algorithm and logic for our app. 
Let me know if you think this looks clear, or if we should change the work flow of the functions etc.
2. Some html changes (and CSS?) will be required,
 and I added a rough list for them in the end of the document.
3. First part is for algorithm and logic, based on what the app would roughly do. 
I tried to make it malleable, so if we want to add features, it would be easy to do. 
But I'm not sure if I was able to take everything into account, so suggestions are welcome :)
4. Second part is for specifying a few core concepts, and what they are supposed to do in this first draft. 
 We might want to change some of it for the next draft.
5. I added some other comments along the way too.
6. I didn't add the localStorage yet! I've had some issues getting it to work before, 
so I need to brush up on my knowledge on it first...
 */

/* ALGORITHM & LOGIC

renderLayoutOne() 

renderLayoutOne(){ /*this would be the "choose your pet"-section 

	render the pop-up-window visible with css.style

	OR

	chooseYourPetWindow.innerHtml = `
	<form>
		<input type="radio" id="choice-cat">
		<input type="radio" id="choice-dog">
		<input type="text" id="pet-name">
		<button type="submit" id="pet-name-btn">
	</form>
	`
}

chooseYourPetForm.addEventListener("submit", function(e){
		- get the FormData
		- render the pet-name into Main App
		- render the pet-image into Main App
		- hide the pop-up-form-window
})

.container.addEventListener("click", function(e){	
	IF (e.target.id === "feed-btn"){
		addToPetCareArray("food")
	} ELSE IF (e.target.id === "play-btn"){
		addToPetCareArray("play")
	} ELSE IF (e.target.id === "groom-btn"){
		addToPetCareArray("groom")
	} ELSE IF ((e.target.id === "reset-btn"){
		resetGame()
	}
})

addToPetCareArray(itemId){	
	- get the target item from itemsArray
	- push the target item into petCareArray

	- run renderPetCareArray(petCareArray)
	- run achievementsArray(petCareArray)
}

renderPetCareArray(array){
	 - loop throught the array:
	 - render the emojis,
	 - add scores to totalScore 
}

achievementsArray(array){
	IF (1st interaction && "choice-cat.checked"){
	 	push "🐈" to achievementsArray
	} else IF (1st interaction && "choice-dog.checked"){
	add "🐕" to achievementsArray
	}

	IF (totalScore === 10 || totalScore === 20 || totalScore === 30){
		push "💝" to Achievements
		add 1 to petLevel
		renderAchievementUnlocked()
	}
}

renderAchievementUnlocked(){
	pop-up-window for the achievements
	and a button for closing the window
}

resetGame(){
	◦ clear Local Storage
	◦ clear all added data
	◦ renderLayoutOne()


}

*/

/*  CORE VARIABLES ETC:

buttons:

feed-btn:
	◦ push "🍖" to petCareArray
	◦ add "points" to totalScore
	◦ run renderPetCare()
play-btn:
	◦ push "⚽" to petCareArray
	◦ add "points" to totalScore
	◦ run renderPetCare()
groom-btn:
	◦ push "🧼" to petCareArray
	◦ add "points" to totalScore
	◦ run renderPetCare()

reset-btn
	◦ clear perCareArray and achievementsArray
	◦ clear totalScore and PetLevel
	◦ clear Local Storage
	◦ render()
	toggle-theme-btn
	◦ css.styles: change color scheme

arrays:

itemsArray
	◦ to hold all the emoji-items
	◦ OR DO WE WANT TO HAVE SEPARATE ARRAYS FOR PET CARE ITEMS AND ACHIEVEMENT ITEMS?

petCareArray
	◦ which will be rendered into html

achievementsArray
	◦ which will be rendered into html



array-objects:

	petCareItems = {
		emoji: "🍖",
		id: "food",
		score: 1
	}
	achievementItems = {
		emoji: "🐕",
		id: "dog",
	}

other variables:
 
const totalScore
• will be calculated and  rendered

const petLevel
• will be calculated and rendered
*/

/*  HTML CHANGES:
-do we want to add the "choose your pet"-section straight into the html (and hide it with css), or should we render it with JS (innerHtml)?
-add toggle and reset buttons in Main App
-add pet name field in Main App
-add Achievements Unlocked -section
*/