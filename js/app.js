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




import { projectData } from "../js/my-projects.js"



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


import { carousel } from "../js/my-projects.js"

if (window.location.href == host + 'about.html') {
  const carouselContainer = document.querySelector('#carousel-container')

let carouselMarkup = carousel.map(frame => 
`
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="${frame.pic}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${frame.pic2}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${frame.pic3}" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${frame.pic4}" alt="Fourth slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${frame.pic5}" alt="Fifth slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
`
).join('')

carouselContainer.innerHTML = carouselMarkup
}

