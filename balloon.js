var kitty = document.getElementById(kitty);
$(kitty).slideDown(); 

var counter = 0; 
var timer = 0; 
//every few seconds a new letter will appear 
var setIntervalId = setInterval(function () {createLetter()}, 2000); 
//a string of letters turned to an array
var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

//creates a random letter and appends onto the container
function createLetter() {  
  var randomLetter = letterArray[Math.floor(Math.random() * 26)];
  randomLetter = randomLetter.toLowerCase();



  var letterDiv = document.createElement('div');
  letterDiv.innerHTML = randomLetter;
  letterDiv.className = 'letter';
  letterDiv.id = randomLetter;
  letterDiv.style.bottom = 1000 - (Math.random() * 500) + "px";
  letterDiv.style.top = Math.random() * 300 + "px";
  letterDiv.style.left = Math.random() * 800 + "px";
  letterDiv.style.bottom = Math.random() * 500 + "px"; 
  letterDiv.style.right = Math.random() * 1400 + "px";
  container = document.getElementById('container');
  container.appendChild(letterDiv);

//letters are eliminated when pressed keys are the same
$(document).keydown( function (event) { 
    var keycode = String.fromCharCode(event.keyCode);
    keycode = keycode.toLowerCase(); 
    console.log(keycode + " KEYCODE HERE");
    console.log(randomLetter);
//score is incremented with the counter variable 
    document.getElementById('counter'); 
    if(keycode === randomLetter){
      counter++;
      $("#counter").html("Player Score: " + counter);
      console.log(counter);
    $("#" + keycode).fadeOut("slow"); 
      console.log("keys are the same");
    } else {
      console.log("keys are not the same");
      console.log(counter);
    }
    });
    
 //Set a timer for the game 
  function gameOver() { 

    var message = document.getElementById('message');
    message.innerHTML = "Timer: " + Date(); 
   }
    var timer = setInterval(gameOver); 
 //A function to stop the game
  function stopGame() { 
    clearInterval(timer);
    clearInterval(setIntervalId); 
}
    setTimeout(stopGame, 30000);
    
}    



// resets the game

//function onLoad() {
//document.getElementById("resetButton").addEventListener("click", function(){
   // if()
  //}
//}








//style 
//counter
//decrease counter
// time limitr


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
