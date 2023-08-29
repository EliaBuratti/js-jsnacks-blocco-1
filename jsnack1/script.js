/* :barretta_cioccolato: Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

//creo due costanti dove chiedo di inserire dei numeri
const firstNumber = Number(prompt('inserisci il primo numero'));

const secondNumber = Number(prompt('inserisci il secondo numero'));

console.log('first number ', firstNumber, '; second number', secondNumber);

//identifico il numero maggiore e lo stampo in console
if (firstNumber > secondNumber) {
    console.log('il numero maggiore è', firstNumber);

} else {
    console.log('il numero maggiore è', secondNumber);
};
