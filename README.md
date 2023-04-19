# Notes

## To do

### CSS

- fixes

### JavaScript

#### Choose your pet

- track input values
- save values to local storage
- on submit, hide the section and display the main app

#### Main app

##### Base functionalities

1. **userData object** - stores the following information:

- pet name,
- pet type,
- current level,
- points sub-object (feedPoints, playPoints, groomPoints),
- awarded achievements array

2. **awardPoints()** - returns a random value between 1 and 10

3. **close()** - closes the popup window.

##### Render functions

1. **render(userData)** - takes data from local storage and updates the main app with the chosen pet type (image) and name (heading) on the first render, and updates the points, emojis, levels, etc. on the subsequent renders
2. **renderPopUp()** - displays the popup with achievement / level information
3. **renderPicture(level)** - changes the pet picture on level up.

##### Update functions

1. **updateLevel()** - checks if there are enough points for next level. If true, updates the level in userData and calls render() to update the UI. Triggered on updatePoints().
2. **updatePoints(action)** - triggered on click of one of the action buttons. Calls awardPoints(), adds awarded points to the total and calls render() to update the UI.
3. **updateAchievements()** - checks if any of the achievement conditions are met. If true, updates userData and calls render() to update the UI.
4. **updateData()** - updates the userData and saves it into local storage.

---
