// ===== PALINDROMA =====

// Chiedo parola all'utente
const parola = prompt("Inserisci una parola");

// Creo una funzione per verificare se la parola è palindroma
function isPalindroma(parola) {
  let parolaInvertita = "";

  // ciclo per invertire la parola
  for (let i = parola.length - 1; i >= 0; i--) {
    parolaInvertita += parola[i];
  }
    // confronto
  if (parola === parolaInvertita) {
    return true;
  } else {
    return false;
  }
}

// risultato
if (isPalindroma(parola)) {
  console.log("È palindroma");
} else {
  console.log("NON è palindroma");
}