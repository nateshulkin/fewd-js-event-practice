(function () {

const buttons = document.querySelectorAll('button');
const button1 = buttons[0];
const button2 = buttons[1];
const button3 = buttons[2];
button1.addEventListener('click', function() {
  button1.classList.toggle('button-danger');
});

button2.addEventListener('click', function() {
  button2.innerText = 'You Clicked Me!';
});
button3.addEventListener('click', function() {
  button2.innerText = 'button two';
});

})();
