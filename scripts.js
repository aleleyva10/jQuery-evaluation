console.log('jQuery');

$(onReady);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function rgbValue() {
  var r = randomNumber(0, 255);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


var addBlock = function() {
  var $block = ('<div class="block" style="background-color:' + rgbValue() + '"></div>');
  $('main').append($block);
  updateCounters();
};

var deleteBlock = function() {
  console.log('deleted block');
  $(this).remove();
  updateCounters();
};


var updateCounters = function() {
  console.log('in updateCounters');

  $('#red').text($('.blockButton').length);
  $('#blue').text($('.blockButton').length);
  $('#yellow').text($('.blockButton').length);
  $('#green').text($('.blockButton').length);
};

function onReady() {
  $('.blockButton').on("click", addBlock);
  $('main').on('click', '.block', deleteBlock);
}
