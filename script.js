// chiedo all'utente quale esercizio vuole eseguire
const scelta = prompt("Scrivi: palindroma, pari o dispari").toLowerCase();


// ==========================
// ESERCIZIO 1 - PALINDROMA
// ==========================
if (scelta === "palindroma") {

  // chiedo una parola all'utente
  const parola = prompt("Inserisci una parola");

  // creo una funzione per verificare se la parola è palindroma
  function isPalindroma(parola) {
    let parolaInvertita = "";

    // ciclo per invertire la parola
    for (let i = parola.length - 1; i >= 0; i--) {
      parolaInvertita += parola[i];
    }

    // confronto tra parola originale e parola invertita
    if (parola === parolaInvertita) {
      return true;
    } else {
      return false;
    }
  }

  // stampo il risultato finale
  if (isPalindroma(parola)) {
    console.log("È palindroma");
  } else {
    console.log("NON è palindroma");
  }

}


// ==========================
// ESERCIZIO 2 - PARI E DISPARI
// ==========================
else if (scelta === "pari" || scelta === "dispari") {

  // chiedo all'utente di inserire un numero da 1 a 5
  const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

  // funzione per generare un numero random da 1 a 5
  function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
  }

  // funzione per controllare se un numero è pari
  function isPari(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  // genero il numero del computer
  const numeroComputer = generaNumeroRandom();

  // sommo i due numeri
  const somma = numeroUtente + numeroComputer;

  // stampo i valori per controllare
  console.log("Numero utente:", numeroUtente);
  console.log("Numero computer:", numeroComputer);
  console.log("Somma:", somma);