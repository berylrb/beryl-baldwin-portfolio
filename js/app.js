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


import { projectData } from "../my-projects.js"




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





