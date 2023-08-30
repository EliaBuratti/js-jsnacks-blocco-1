/* :barretta_cioccolato: Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

//creo due costanti con il prompt

const firstWord = prompt('inserisci una parola a tuo piacimento');

const secondWord = prompt("inserisci un'altra parola a tuo piacimento");

console.log('la prima parola è: ', firstWord, '; la seconda parola è:', secondWord);

//comparo la lunghezza delle parole e stampo nella console in sucessione. Dalla più lunga alla piu corta. 

if (firstWord.length > secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);

} else if (firstWord.length < secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
};




//-----------------------------------------

// da rifare con il ciclo while

const word = [];

let i = 0;
while (i < 2) {

    const userWord = prompt('inserisci una parola a tuo piacimento');

    if (!isNaN(userWord) ) {
        alert('compila i campi correttamente!');

    } else {
        word.push(userWord);
        i++
    }
}

//verifico la lunghezza delle parole e poi le stampo in console a seconda della loro lunghezza

if (word[0].length < word[1].length) {
    console.log(`la parola piu corta è: ${word[0]} e quella più lunga è: ${word[1]}`);

} else if (word[0].length === word[1].length){
    console.log('Le parole sono lunghe uguali');

} else {
    console.log(`la parola piu corta è: ${word[1]} e quella più lunga è: ${word[0]}`);
};
