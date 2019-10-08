const element = document.querySelector('.element')
const greenButton = document.querySelector('.greenButton')
const circleButton = document.querySelector('.circleButton')
const bigbutton = document.querySelector('.bigbutton')
element.addEventListener(
  'click',
  function() {
  console.log("Hello World")
  }
)
greenButton.addEventListener(
  'click',
  function() {
  element.style.background='green'
  }
)
circleButton.addEventListener(
  'click',
  function() {
  element.style.borderRadius='50%'
  }
)
bigbutton.addEventListener(
  'click',
  function(){
    element.classList.toggle('big')
    if (element.classList.contains('big')) {
      bigbutton.innerHTML= "Reduire"
    }
    else {
      bigbutton.innerHTML="Big"
    }
  }
)
