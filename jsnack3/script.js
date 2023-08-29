/* :barretta_cioccolato: Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


//creo un array vuoto
const userNum =[];
console.log(userNum);

//creo una costante vuota dove calcolo il totale
let total = 0;

//creo un loop dove chiedo di inserire 10 volte dei numeri
for (let i = 0; i < 10; i++) {

    //chiedo all'utente di inserire dei numeri
    const userInputNum = Number(prompt('Inserisci un numero da 1 a infinito'));

    //verifico che ci siano solo numeri 
    if ((isNaN(userInputNum)) || (userInputNum == "") || (userInputNum == "undefined")) {

        alert('Rispetta la richiesta');
        window.location.reload();
        break; // interrompo il ciclo

    } else {
        //stampo in console i numeri
        console.log(`Il ${i + 1}° numero inserito è ${userInputNum}`);
    
        //aggiungo i numeri all'array
        userNum.push(userInputNum);
        console.log(`array aggiornato ${userNum}`);
    
        //sommo tutti i numeri dell'array
        total += Number(userNum[i]);
    }
};

console.log('La somma totale è: ', total);
