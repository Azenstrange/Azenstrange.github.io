const element1 = document.querySelector('.element1')
const element2 = document.querySelector('.element2')
const element3 = document.querySelector('.element3')
const element4 = document.querySelector('.element4')
const element5 = document.querySelector('.element5')
const tableau = document.querySelector('.tableau')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const img5 = document.querySelector('.img5')
const lesimg=document.querySelector('.lesimg')
let imglist = [img1, img2, img3, img4, img5]

element1.addEventListener(
  'click',
  function() {
  tableau.classList.toggle("invisible")
  img1.classList.remove("invisible")
  }
)
element2.addEventListener(
  'click',
  function() {
    tableau.classList.add("invisible")
    img2.classList.remove("invisible")
  }
)
element3.addEventListener(
  'click',
  function() {
    tableau.classList.toggle("invisible")
    img3.classList.remove("invisible")
  }
)
element4.addEventListener(
  'click',
  function() {
    tableau.classList.toggle("invisible")
    img4.classList.remove("invisible")
  }
)

element5.addEventListener(
  'click',
  function() {
    tableau.classList.toggle("invisible")
    img5.classList.remove("invisible")
  }
)
lesimg.addEventListener(
  'click', function() {
      for (var i = 0; i < imglist.length; i++) {
        if(!imglist[i].classList.contains("invisible")){
            imglist[i].classList.toggle("invisible")
        }
      }
      tableau.classList.toggle("invisible")
  }
)
