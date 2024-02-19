/* tools: 

 -prompt
 -multiplication
 -subtraction
 -if 

*/

// chiedere al passeggero (utente) il numero di chilometri da fare
let kmToDo = Number(prompt("Inserisci i km che desideri percorrere"));
console.log(kmToDo);

// chiedere al passeggero (utente) la propria età

const userAge = Number(prompt("Inserisci la tua età"));
console.log(userAge);

// ____________________________________ //

// calcolare il prezzo totale del viaggio:
 // = 0.21€/km

 let pricePerKm = (0.21)

 let tickeFullPrice = (pricePerKm * kmToDo);
 console.log(tickeFullPrice);


// sottrarre sconto per categoria
    // sottrare uno sconto del 20% per i minorenni (under 18)
if (userAge < 18) {
    console.log((tickeFullPrice / 100) * 80);
    let ticketDiscount20 = ((tickeFullPrice / 100) * 80);
    alert(ticketDiscount20.toFixed(2) + "€");

    // sottrare uno sconto del 40% per gli anziani (over 65)
} else if (userAge >= 65) {
    console.log((tickeFullPrice / 100) * 60);
    let ticketDiscount40 = ((tickeFullPrice / 100) * 60);
    alert(ticketDiscount40.toFixed(2) + "€");

    // nessuno sconto per i passegeri adulti (18-64)
} else {
    console.log(tickeFullPrice);
    alert(tickeFullPrice.toFixed(2) + "€");
}

// ____________________________________ //
