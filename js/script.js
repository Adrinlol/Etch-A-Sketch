// Draw the board as the page loades
document.addEventListener("DOMContentLoaded",function(){
  let rainbow = false;
  drawBoard();


let $cell = $('.cell');
blackButton = document.getElementById('black');
greenButton = document.getElementById('green');
blueButton = document.getElementById('blue');
orangeButton = document.getElementById('orange');
rainbowButton = document.getElementById('rainbow');
randomButton = document.getElementById('random');
eraserButton = document.getElementById('white');


//Function to color the cell
$cell.on('click', function() {
  if (rainbow == false) {
    $(this).css('background-color', color);
  } else {
    $(this).css('background-color', getRandomColor());
  }
});

  // element.addEventListener('click',() => {    
  //   blackButton();
  // });

  blackButton.addEventListener('click',function() {
    color = '#222';
    makeActive(blackButton, elements);
  });

  greenButton.addEventListener('click',function() {
    color = '#00d79d';
    makeActive(greenButton, elements);
  });

  blueButton.addEventListener('click',function() {
    color = '#64c4eb';
    makeActive(blueButton, elements);
  });

  orangeButton.addEventListener('click',function() {
    color = '#F0D423';
    makeActive(orangeButton, elements);
  });

  rainbowButton.addEventListener('click',function() {
    rainbow = !rainbow;
    makeActive(rainbowButton, elements);
  });

  randomButton.addEventListener('click',function() {
    color = getRandomColor();
    rainbow = !rainbow;
    makeActive(randomButton, elements);
  });

  eraserButton.addEventListener('click',function() {
    color = '#fff';
    makeActive(eraserButton, elements);
  });
});

// Function to draw the board
function drawBoard(numberOfRows = 14, numberOfColumns= 22) {
  for (let i = 0; i < numberOfRows; i++) {
    $('#board').append("<div class=\"row\"><\div>");
    for (let c = 0; c < numberOfColumns; c++) {
      $('.row:last-of-type').append("<div class=\"cell\"><\div>");
    }
  }
}

// Function for random color
function getRandomColor(letters='0123456789ABCDEF',color="#") {
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function that displays which button is active
function makeActive(button) {
  button.classList.add('active');
}

// Selecting all the buttons
let elements = document.querySelectorAll("button");

// Remove the other highlights using forEach method
elements.forEach(function(item) {
  item.addEventListener("click", function() {
    elements.forEach(function(element) {
      element.classList.remove("active");
    });
  })
});
