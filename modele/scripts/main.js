
const tableau = document.querySelector('.tableau')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const img5 = document.querySelector('.img5')
const lesimg=document.querySelector('.lesimg')
const button = document.querySelectorAll('.button')
const elem = document.querySelectorAll('.clickable')

const imglist = document.querySelectorAll('.imgelem')

for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener(
    'dblclick',
    function() {
    imglist[i].classList.toggle("invisible")
    tableau.classList.toggle("invisible")
    }
  )
}
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
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p')

      textEl && (textEl.textContent =
        'moved a distance of ' +
        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                   Math.pow(event.pageY - event.y0, 2) | 0))
          .toFixed(2) + 'px')
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
