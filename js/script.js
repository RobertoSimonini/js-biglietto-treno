console.log('OK JS');

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* ----------------------------------------------------*/


// 2- Chiedo all'utente il numero di km che deve percorrere 
// 3- Chiedo all'utente la sua età 
// 4- Calcolo il prezzo del biglietto 
// 5- Creo le condizioni di sconto per i minorenni 
// 6- Creo le condizioni di sconto per gli over 65

/*---------------------------------------------------- */

// 1- Prendo l'elemento dal DOM 
const placeholder = document.getElementById('target');

// 2- Chiedo all'utente il numero di km che deve percorrere 
const kmRoute = parseInt(prompt('Quanti km devi percorrere?', 15).trim())
// // console.log(kmRoute);

