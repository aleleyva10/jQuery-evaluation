console.log('jQuery');

$(onReady);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

var redCount = 0;
var blueCount = 0;
var greenCount = 0;
var yellowCount = 0;

var addBlock = function() {
  var color = randomNumber(0, 3);

  if (color === 0) {
    color = "red";
    redCount++;
    $('#red').text(redCount);
    console.log('You created a red block');
  } else if (color === 1) {
    color = "blue";
    blueCount++;
    $('#blue').text(blueCount);
    console.log('You created a blue block');
  } else if (color === 2) {
    color = "green";
    greenCount++;
    $('#green').text(greenCount);
    console.log('You created a green block');
  } else if (color === 3) {
    color = "yellow";
    yellowCount++;
    $('#yellow').text(yellowCount);
    console.log('You created a yellow block');
  }

  $('main').append("<div class='color-cube " + color + "'></div>");
};

var deleteBlock = function() {
  console.log('deleted block');
  $(this).remove();
  redCount++;
  blueCount++;
  greenCount--;
  yellowCount--;
};


function onReady() {
  $('.blockButton').on("click", addBlock);
  $('main').on('click', '.color-cube', deleteBlock);
}
