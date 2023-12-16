const word = document.getElementById("word")
const text = document.getElementById("text")
const score = document.getElementById("score")
const time = document.getElementById("time")
const BtnLevel = document.getElementById("level-btn")
const setting = document.getElementById("setting")
const FormLevel = document.getElementById("level-form")
const level = document.getElementById("level")
const end = document.getElementById("end")
//!finished fetching from css
const words = [
	"code",
	"java",
	"html",
	"css",
	"bug",
	"api",
	"git",
	"loop",
	"data",
	"file",
	"node",
	"bash",
	"test",
	"link",
	"byte",
	"echo",
	"ruby",
	"json",
	"php",
	"bool",
	"node",
	"web",
	"app",
	"css",
	"html",
	"tech",
	"byte",
	"loop",
	"async",
	"view",
	"babel",
	"docker",
	"unit",
	"rest",
	"soap",
	"sass",
	"npm",
	"api",
	"sync",
	"git",
	"responsive",
	"cyber",
	"cypress",
]

let scoreSum = 0
let timeSum = 0
let randomword
let now_level = "normal"
//! additional save defualt
const mem = localStorage.getItem("level_mode") || "normal"
//!gen word
const RandomWord = () => {
	return words[Math.floor(Math.random() * words.length)]
}

const DisplayWord = () => {
	randomword = RandomWord()
	word.innerHTML = randomword
}

text.addEventListener("input", e => {
	if (e.target.value === randomword) {
		e.target.value = ""
		DisplayWord()
		timeSum += mem === "easy" ? 3 : mem === "normal" ? 2 : 1
		UpdateScore()
	}
})

const UpdateScore = () => {
	scoreSum += 10
	score.innerHTML = scoreSum
	time.innerHTML = timeSum
	time.style.color = time.style.color === "black" ? "white" : "black"
	score.style.color = score.style.color === "black" ? "white" : "black"
	word.style.color = word.style.color === "black" ? "white" : "black"
}

const UpdateTimeDecrease = () => {
	timeSum -= 1
	time.innerHTML = timeSum
	if (timeSum === 0) {
		clearInterval(timeInterval)
		EndGame()
	}
}
const timeInterval = setInterval(UpdateTimeDecrease, 1000)

const EndGame = () => {
	end.innerHTML = `<h2>Your Score : ${scoreSum} points</h2>
    <button onclick="location.reload()">Restart</button>
    <h3>To change the difficulty, click the icon below.</h3>
    `
	end.style.display = "grid"
}
// !click setting hide/show
BtnLevel.addEventListener("click", () => {
	setting.classList.toggle("hide")
})
//! level is tag select 3 mode in html
level.addEventListener("change", e => {
	now_level = e.target.value
	localStorage.setItem("level_mode", now_level)
})

const Start = () => {
	level.value = mem
	timeSum = mem === "easy" ? 8 : mem === "normal" ? 7 : 6
}
Start()
DisplayWord()
text.focus() //! focus input, dont need to click input for type
