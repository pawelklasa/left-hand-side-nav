// hello
let container = document.getElementById('container');
let menuButton = document.getElementById('menu-button');
let menu = document.getElementById('menu');
let close = document.getElementById('close');

menuButton.addEventListener('click', function() {
  menu.style.width = '200px';
  container.setAttribute('style', 'grid-auto-columns: 200px 1fr 1fr;');
  close.innerHTML = 'close';
});
