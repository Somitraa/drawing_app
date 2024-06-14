var selectedTool = "brush";
var selectedColor = "black";
var selectedSize = 10;
var selectedFill = false;
var isDrawing = false;

var tools = document.querySelectorAll(".tool");
var brushSize = document.querySelector("#brush-size");
var colors = document.querySelectorAll(".color");
var fillColor = document.querySelector("#fill-color");

colors.forEach((color) => {
  color.addEventListener("click", function () {
    selectedColor = color.id;

    colors.forEach((color) => {
      color.classList.remove("selected");
    });

    color.classList.add("selected");
  });
});

fillColor.addEventListener("change", function () {
  selectedFill = fillColor.checked ? true : false;
  console.log(selectedFill);
});

tools.forEach((tool) => {
  tool.addEventListener("click", function () {
    selectedTool = tool.id;

    tools.forEach((tool) => {
      tool.classList.remove("active");
    });

    tool.classList.add("active");
  });
});

brushSize.addEventListener("change", function () {
  selectedSize = brushSize.value;
  console.log(selectedSize);
});

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

canvas.addEventListener("mousedown", function (e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});


canvas.addEventListener("mousemove", function (e) {
  if (!isDrawing) return;
  console.log(e.offsetX, e.offsetY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = selectedColor;
  ctx.lineWidth = selectedSize;
  ctx.stroke();
});

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
  ctx.closePath();
});