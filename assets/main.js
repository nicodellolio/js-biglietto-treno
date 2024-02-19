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
 // applicare uno sconto del 20% per i minorenni
 if (userAge < 18) {
    console.log((tickeFullPrice / 100) * 80);
 }

 // applicare uno sconto del 20% per i minorenni
 if (userAge >= 65) {
    console.log((tickeFullPrice / 100) * 60);
 }

