// 1) Create the framework for these pages:
  // home
  // about
  // projects
  // resume
  // contact

// 2) create nav bar

// 3) Store cached element references

// 4) initialize animations on load

// 5) Define the required constants

// 6) figure out the rest of what i need to do 

// import 'bootstrap'; 

// function invertHex(hex) {
//   let newColor =(Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16)
//   return newColor.substr(1).toUpperCase()
// }

// invertHex('00FF00');

const host = "http://127.0.0.1:5500/"

// const ff = new Freezeframe({
//   trigger: false
// });
// ff.start();

// if (window.location.href == host + 'index.html') {
// const three = document.querySelector("#three-items")

if (window.location.href == host + 'index.html') {
const smolDiv = document.querySelector('#smol-div')
const handDiv = document.querySelector("#hand-div")
const hiBttn = document.querySelector('#wave')

hiBttn.addEventListener('click', startWave)
smolDiv.addEventListener('mouseover', stopWave)

function startWave(evt) {
  handDiv.innerHTML = '<img id="hand" src= "./assets/hand-ani.png">'
}

function stopWave(evt) {
    handDiv.innerHTML = '<img id="hand" src= "./assets/hand-still.png">'
  }
}




import { projectData } from "../my-projects.js"



if (window.location.href == host + 'projects.html') {
const cardContainer = document.getElementById('card-container')

let projectMarkup = projectData.map(project => 
`
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${project.pic}" alt="Screenshot of Tic-Tac-Grow mid-game.">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <a href=${project.github} target="_blank" class="btn btn-primary">Github</a>
    <a href=${project.launch} target="_blank" class="btn btn-secondary">Launch</a>
  </div>
</div> 
`
  ).join('')



  cardContainer.innerHTML = projectMarkup
}




if (window.location.href == host + 'projects.html') {
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

cardContainer.innerHTML = projectMarkup
}

