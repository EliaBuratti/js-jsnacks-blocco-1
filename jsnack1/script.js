/* :barretta_cioccolato: Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = Number(prompt('inserisci il primo numero'));

const secondNumber = Number(prompt('inserisci il primo numero'));

console.log('first number ', firstNumber, '; second number', secondNumber);

if (firstNumber > secondNumber) {
    console.log('il numero maggiore è', firstNumber);

} else {
    console.log('il numero maggiore è', secondNumber);
};
