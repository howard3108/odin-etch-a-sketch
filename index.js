// constants
const defaultSquares = 16
const defaultColour = 'black'

// add a function to create the number of divs
function addDivs(num) {

  //constants
  const divContainer = document.querySelector('#divContainer')

  // for loop to make 256 divs
  for (i = 0; i < num * num; i++) {

    // assign createDivs and class of squares and add it into divContainer
    const createDivs = document.createElement('div')
    createDivs.className = 'square'

    // add the divs inside the divContainer
    divContainer.appendChild(createDivs)
  }
}

function addColor(color) {

  // get the class of squares
  const getSquare = document.querySelectorAll('.square')

  // add background color to squares
  for (i = 0; i < getSquare.length; i++) {
    getSquare[i].addEventListener('mousemove', (event) => {
      if (event.buttons === 1) { // Check if the left mouse button is pressed
        event.target.style.backgroundColor = color;
      }
    })
  }
}

window.onload = () => {
  addDivs(defaultSquares)
  addColor(defaultColour)
}
