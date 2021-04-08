const fs           = require('fs')
const readlineSync = require('readline-sync');
const {randomInt}  = require('crypto');

// tableau random = tableau
const tableau    = ['🐐', '🐐', '🐐']
let voiture      = '🚘';
let indexHasard  = randomInt(0, tableau.length); // index de la voiture 
let chifChoice   = randomInt(0, tableau.length);
let tabHasard    = tableau.splice(indexHasard, 1, voiture)
let question     = ""
let questionDeux = ""
let count = 0
let victoire = 0
let defaite  = 0


while (count !== 10) {
    question = randomInt(0, tableau.length);

    while(chifChoice === question || chifChoice === indexHasard) {
    chifChoice = randomInt(0, tableau.length);}

    if(question !== indexHasard) {
    count ++
    console.log(`Tu as retiré une : ... ${tableau[chifChoice]}`)
    tableau.splice(chifChoice, 1)
    } else if (question === indexHasard) {
    count ++
    console.log(`Tu as retiré ${tableau[chifChoice]}`)
    tableau.splice(chifChoice, 1)
    }

    console.log(tableau)
    console.log(indexHasard)

    questionDeux = question

    if(questionDeux == indexHasard) {
        count ++
        victoire ++
        console.log("Bravo")
        } else {
        count ++
        defaite ++
        console.log(`Perdu, la bonne porte était la ${indexHasard}`)
    }
    console.log(victoire)
    console.log(defaite)
}
