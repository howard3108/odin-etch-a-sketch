// constants
const defaultSquares = 16
const defaultColour = 'black'
let divContainer

// add a function to create the number of divs
function addDivs(num) {

  //constants
  divContainer = document.querySelector('#divContainer')

  // for loop to make 256 divs
  for (i = 0; i < num * num; i++) {

    // assign createDivs and class of squares and add it into divContainer
    const createDivs = document.createElement('div')
    createDivs.className = 'square'

    // add the divs inside the divContainer
    divContainer.appendChild(createDivs)
  }
}

// add color to the background if clicked
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

// function to get the user slider input and change the squares accordingly
function adjustSquares() {

  // constants
  const slider = document.querySelector('.slider')
  const sliderOutput = document.querySelectorAll('.numberOfSquares')

  // change sliderOutput to slider value
  slider.addEventListener('input', () => {
    for (i = 0; i < sliderOutput.length; i++) {
      sliderOutput[i].innerText = slider.value
    }
  })

  // if value changes run clear and add new divs
  slider.addEventListener('change', () => {

    // clear divs
    divContainer.innerHTML = '';

    // add divs and adjust size of square
    addDivs(slider.value)

    const square = document.querySelectorAll('.square')
    const widthAndHeight = 600 / parseInt(slider.value)

    // because square is a nodeList, so we have to go to each node to adjust the css
    for (i = 0; i < square.length; i++) {
      square[i].style.width = `${widthAndHeight}px`
      square[i].style.height = `${widthAndHeight}px`
    }

    addColor(defaultColour)

    rainbowColorChanger()
  })
}

// function to adjust the color when clicking on colorPicker
function changeColor() {
  const colorPicker = document.querySelector('#colorPicker')
  colorPicker.addEventListener('change', (event) => {
    addColor(event.target.value)
  }, false)
}

// function to change the color automatically

function rainbowColorChanger() {
  const rainbow = document.querySelector('#rainbowColorChanger')
  const getSquare = document.querySelectorAll('.square')

  rainbow.addEventListener('click', () => {
    // add background color to squares
    for (i = 0; i < getSquare.length; i++) {
      getSquare[i].addEventListener('mousemove', (event) => {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let a = Math.round(Math.random() * 10) / 10

        if (event.buttons === 1) { // Check if the left mouse button is pressed
          event.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
        }
      })
    }
  })
}

window.onload = () => {
  addDivs(defaultSquares)
  addColor(defaultColour)
  adjustSquares()
  changeColor()
  rainbowColorChanger()
}
