var setIntervalId = setInterval(function () 
 {createLetter()}, 3000); 

//each time the function is called a random letter will appear 

var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

function createLetter() {  
  var randomLetter = letterArray[Math.floor(Math.random() * 26)];
  randomLetter = randomLetter.toLowerCase();
  var letterDiv = document.createElement('div');
  letterDiv.innerHTML = randomLetter;
  letterDiv.className = 'letter';
  letterDiv.id = randomLetter;
  letterDiv.style.bottom = 1000 - (Math.random() * 500) + "px";
  letterDiv.style.top = Math.random() * 10 + "px";
  letterDiv.style.left = Math.random() * 300 + "px";
  container = document.getElementById('container');
  container.appendChild(letterDiv);

  
$(document).keydown( function (event) { 
    var keycode = String.fromCharCode(event.keyCode);
    keycode = keycode.toLowerCase(); 
    console.log(keycode + " KEYCODE HERE");
    console.log(randomLetter);
    if(keycode === randomLetter){
      $("#" + keycode).hide(); 
    console.log("keys are the same");
    } else { 
    console.log("keys are not the same");
    }
  });
}
  










//style 
//counter
//decrease counter
// time limit


//create two players






//create a gameover function using the intervalId 
//var gameOver = function() {clearInterval(intervalId); 
//  alert("GameOver"); 



// how to animatite div falling jquery
// if letter you type === random letter
// do something
// like this.hide()
// append('.pick')
// time limit
// score board
// reset 
// players
