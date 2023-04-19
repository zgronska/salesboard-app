// First, check if there is already an object in local storage. If yes, use that. If not, create a new one with starting values.
const userData = JSON.parse(localStorage.getItem("userData")) || {
  petName: "",
  petType: "dog",
  level: 1,
  points: {
    feedPoints: 0,
    playPoints: 0,
    groomPoints: 0,
  },
  achievements: [],
}

// ? Not sure if we need this:
const actionsArray = [
  {
    emoji: "🍖",
    id: "action-food",
  },
  {
    emoji: "⚽",
    id: "action-play",
  },
  {
    emoji: "🧼",
    id: "action-groom",
  },
]

const achievementItemsArray = [
  {
    id: "achv-1",
    name: "Welcome Home!",
    emoji: "🐾",
    condition: "Interact with your pet for the first time",
  },
  {
    id: "achv-2",
    name: "Master Groomer",
    emoji: "🛁",
    condition: "Reach a certain number of grooming points",
  },
  {
    id: "achv-3",
    name: "Gourmet Chef",
    emoji: "🥩",
    condition: "Reach X number of feeding points",
  },
  {
    id: "achv-4",
    name: "Loving Companion",
    emoji: "⚽",
    condition: "Reach X number of playing points",
  },
  {
    id: "achv-6",
    name: "Perfect Pooch",
    emoji: "🐶",
    condition: "Reach the maximum level for your dog",
  },
  {
    id: "achv-7",
    name: "Cool Cat",
    emoji: "😺",
    condition: "Reach the maximum level for your cat",
  },
  {
    id: "achv-10",
    name: "Loyal Friend",
    emoji: "💝",
    condition:
      "Interact with your pet for a certain number of consecutive days",
  },
]

export { userData, actionsArray, achievementItemsArray }
