/* :barretta_cioccolato: :barretta_cioccolato: Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

//creo una costante dove andrò ad inserire tutti i numeri dispari
const oddNum = [];

//creo un ciclo dove chiedo 6 volte all'utente di inserire dei numeri
for (let i = 0; i < 6; i++) {
    
    //chiedo all'utente di inserire dei numeri e li stampo in console
    const userNum = Number(prompt('Inserisci dei numeri'));

    //verifico che ci siano solo numeri 
    if ((isNaN(userNum)) || (userNum == "") || (userNum == "undefined")) {
        
        alert('compila i campi con i numeri');
        window.location.reload();
        break;

    } else {
        console.log(`il ${i + 1}° numero inserito è: ${userNum}`);

        //identifico i numeri dispari e li metto nell'array
        if (userNum % 2 !== 0) {
            oddNum.push(userNum);
        }
    }
};

//controllo se nell'array sono presenti dei dati e restituisco il risultato
if (oddNum != 0) {

    //stampo in console l'array aggiornato con solo i numeri dispari
    console.log(`Array con solo i numeri dispari: ${oddNum}`);

} else {
    console.log('Non hai inserito numeri dispari');

};


