
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

  