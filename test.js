const fs           = require('fs')
const readlineSync = require('readline-sync');
const {randomInt}  = require('crypto');

// tableau random = tableau
const tableau    = ['🐐', '🐐', '🐐']
let voiture      = '🚘';
let indexHasard  = randomInt(0, tableau.length); // index de la voiture 
let tabHasard    = tableau.splice(indexHasard, 1, voiture)

let question = 2
let questionDeux = 2

    console.log(indexHasard)
        
    
