/*

1. Chiedere all'utente il numero di chilometri che vuole percorre

2. poi chiedere l'età dell'utente

3. calcolare il prezzo del biglietto in base a 3 regole:
    -il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -va applicato uno sconto del 20% per i minorenni
    -va applicato uno sconto del 40% per gli over 65.

*/

const outputTag = document.getElementById('output');


let distance = prompt('Inserire il numero di kilometri che vuole percorre');

console.log(distance);

const age = prompt('Inserire la propria età');

console.log(age);

let price = (age * 0.21)

const discount = price
  
  if (age < 18) {
    System.out.println('The price is' + '' +(price / 5))
  }

console.log(price);

document.getElementById('output').innerHTML = distance + age;