let phrases = [
  { text: 'До Бонуса', class: '.clock1' },
  { text: 'До Алтая', class: '.clock2' },
];



let button1 = document.querySelector('.button1');
let clock1 = document.querySelector('.clock1');

button1.addEventListener('click', function () {
  var element = document.getElementsByTagName( ".clock1" )[0];
  element.parentNode.removeChild(element);
});
