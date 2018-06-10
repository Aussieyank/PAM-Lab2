/*GRADER NOTES:
  Select color input.
  Select size input.
  When size is submitted by user, call makeGrid()*/


//Create Grid
function makeGrid() {
  //If fixing these to #pixelCanvas tr and td doesn't work, try const.
  var inputX, inputY, canvas, cell, row;

  inputY = $("#inputHeight").val();
  inputX = $("#inputWidth").val();
  canvas = $("#pixelCanvas");

  // Delete any previous table cells when grid size is changed
  canvas.empty();


  //applies to rows
  for (y = 0; y < inputY; y++) {
    canvas.append("<tr></tr>");
  }

  //applies to columns
  row = $("tr");
  x = 0;
  while (x < inputX) {
    x++;
    row.append("<td></td>");
  }
}

//Call makeGrid
$('input[type="submit"]').click(function(event) {
  event.preventDefault();
  makeGrid();
});

//may need to replace above var with const.
const colorPicker = $('#colorPicker');
let newColor = colorPicker.val();
let h2 = $('h2');

colorPicker.on('change', () => {
  newColor = colorPicker.val();
  h2.text(newColor);
});

//pointer pressed event
$("#pixelCanvas")
  .delegate("td", "mousedown", function() {
    mouseDownState = true;
    $el = $(this);
    $el.css("background", $("#colorPicker").val());
  })
  .delegate("td", "mousedown", function() {
    if (mouseDownState) {
      $el = $(this);
      $el.css("background", $("#colorPicker").val());
    }
  });

//pointer released
$("html").bind("mouseup", function() {
  mouseDownState = false;
});

//reset grid button
$('input[type="Reset"]').click(function(event) {
	$('#pixelCanvas').empty();
});
