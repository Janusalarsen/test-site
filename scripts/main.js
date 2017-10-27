var myHeading = document.querySelector('h1');
myHeading.textContent = 'Janus Larsen';

document.querySelector('a').onclick = function() {
    alert('Open Artstation in a new tab?');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mini_janus_6_tiny.png') {
      myImage.setAttribute ('src', 'images/mini_hanne_6_tiny.png');
    } else {
      myImage.setAttribute ('images/mini_janus_6_tiny.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName + '!';
}
myButton.onclick = function() {
  setUserName();
}
