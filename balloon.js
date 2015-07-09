var letterArray= 'abcdefghijklmnopqrstuvwxyz'.split('');

var randomLetter = letterArray[Math.floor(Math.random() * 26)];

$(document).keypress(function (e) {
 if (String.fromCharCode(e.which) === randomLetter) {
  console.log('yay');
 }
})



// create div from javascript
// or jquery would be better
// how to animatite div falling jquery
// 
// 
// if letter you type === random letter
// do somethign
// like this.hide()
// append('.pick')
// time limit
// score board
// reset 
// players
// layout