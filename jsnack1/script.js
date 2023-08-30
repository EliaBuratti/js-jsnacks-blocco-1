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




// da fare con il ciclo while
let num = [];

let i = 0;
while (i < 2) {
    
    //creo prompt per chiedere di iserire i numeri
   const userNum = Number(prompt('inserisci un numero'));


   //verifico che sia un numero 

   if (isNaN(userNum)) {
    alert('inserisci solo numeri');

   } else {
    num.push(userNum);
    i++

   }
};

//comparo i numeri inseriti e ottengo quello piu alto

if (num[0] > num[1]) {
    console.log(`Il numero maggiore è: ${num[0]}`);

    } else if (num[0] === num[1]) {
        console.log('i numeri sono uguali');

    } else {
        console.log(`Il numero maggiore è: ${num[1]}`);
        
}

