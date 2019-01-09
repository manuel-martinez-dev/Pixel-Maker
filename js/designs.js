// Get HTML Elements
const table = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");
const color = document.getElementById("colorPicker");

// The passive event listener logs a message on the console
color.addEventListener("click", function(e) {
  console.log(e);
});

// With user input grid is formed
sizePicker.onsubmit = function(event) {
  event.preventDefault();
  clearGrid();
  makeGrid();
};

// The function to create the grid
function makeGrid() {
  clearGrid();
  for (let columns = 0; columns < height.value; columns++) {
    const newRow = table.insertRow(columns);
    for (let box = 0; box < width.value; box++) {
      const newBox = newRow.insertCell(box);
      newBox.addEventListener("click", fill);
    }
  }
}

// The function to clear the grid
function clearGrid() {
  table.innerHTML = '';
}

// The function to fill the grid with colors
function fill() {
  this.style.backgroundColor = `${color.value}`;
}
