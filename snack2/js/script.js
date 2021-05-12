// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// FUNCTIONS
const randomNumber = (min, max) =>  Math.floor(Math.random() * (max - min + 1) ) + min;

// VARIABILI
var squadre = [

    squadra1 = {
        nome: "Fiorentina",
        punti: 0,
        falli: 0
    },
    squadra2 = {
        nome: "Juvetus",
        punti: 0,
        falli: 0
    },
    squadra3 = {
        nome: "Inter",
        punti: 0,
        falli: 0
    }
];

rapportoSquadraFalli = [];

for (let i=0; i<squadre.length; i++) {
    squadre[i].punti = randomNumber(1,15);
    squadre[i].falli = randomNumber(1,20);
    var {nome,falli} = squadre[i];
    rapportoSquadraFalli.push({nome,falli});
}
console.log(squadre);
console.log(rapportoSquadraFalli); 