// JavaScript Document

let form = document.querySelector('form');
let main = document.querySelector('main');
let input = document.querySelectorAll('input');
let body = document.querySelector('body'); 
let para = document.createElement('p'); 

body.setAttribute('class', 'meow'); 

form.addEventListener('submit', function(e) { 
  e.preventDefault();  
  let personName = input[0].value; 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);
  console.log('=^..^='); 
}); 



