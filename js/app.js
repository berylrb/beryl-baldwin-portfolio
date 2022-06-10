

// if (window.location.href == host + 'index.html') {
// const smolDiv = document.querySelector('#smol-div')
// const handDiv = document.querySelector("#hand-div")
// const hiBttn = document.querySelector('#wave')

// hiBttn.addEventListener('click', startWave)
// smolDiv.addEventListener('mouseover', stopWave)

// function startWave(evt) {
//   handDiv.innerHTML = '<img id="hand" src= "./assets/hand-ani.png">'
// }

// function stopWave(evt) {
//     handDiv.innerHTML = '<img id="hand" src= "./assets/hand-still.png">'
//   }
// }




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

