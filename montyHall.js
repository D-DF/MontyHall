const fs           = require('fs')
const readlineSync = require('readline-sync');
const {randomInt}  = require('crypto');

// tableau random = tableau
const tableau    = ['🐐', '🐐', '🐐']
let voiture      = '🚘';
let indexHasard  = randomInt(0, tableau.length); // index de la voiture 
let tabHasard    = tableau.splice(indexHasard, 1, voiture)
let question     = ""
let questionDeux = ""
let count = 0

while (count !== 2) {

    console.log(indexHasard)

    question = readlineSync.question(`Quel porte?`)
        if(question !== indexHasard) {
            count ++
        tableau.splice(question, 1)
        } else if (question == indexHasard) {
            count ++
        tableau.splice(!indexHasard && !question, 1)
        }

    questionDeux = readlineSync.question("Tu gardes ton choix ou change de portes?")
        if(questionDeux == indexHasard) {
        console.log("Bravo")
        count++
        process.exit(1)
        } else {
        console.log("perdu")
        count++
        process.exit(1)
        }
}
      
        





    








