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

    question = readlineSync.question(`Quel porte? 
Réponse : `)

    while(chifChoice === question || chifChoice === indexHasard) {
    chifChoice = randomInt(0, tableau.length);}

    
    if(question !== indexHasard) {
    console.log(`Tu as retiré une : ... ${tableau[chifChoice]}`)
    tableau.splice(chifChoice, 1)
    } else if (question === indexHasard) {
    console.log(`Tu as retiré ${tableau[chifChoice]}`)
    tableau.splice(chifChoice, 1)
    console.log(test)
    }

    console.log(tableau)
    console.log(indexHasard)

    questionDeux = readlineSync.question(`Tu gardes ton choix ou change de portes? 
Réponse : `)

    if(questionDeux == indexHasard) {
        console.log("Bravo")
        process.exit(1)
        } else {
        console.log(`Perdu, la bonne porte était la ${indexHasard}`)
        process.exit(1)
    }



      
        





    








