const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name")

const emoji = []
async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=e8cd933329cb4f49ab3d589250d32c7cb4a3a780"
  )
  data = await response.json()

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName
    })
  }
}
getEmoji()

btnEl.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * emoji.length)
  btnEl.innerText = emoji[randomNum].emojiName
  emojiNameEl.innerText = emoji[randomNum].emojiCode
})
