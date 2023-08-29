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

