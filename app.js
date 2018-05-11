// hello
let container = document.getElementById('container');
let menuButton = document.getElementById('menu-button');
let menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
  console.log('clicked');
  menu.style.width = '300px';
  container.setAttribute('style', 'grid-auto-columns: 300px 1fr 1fr;');
});
