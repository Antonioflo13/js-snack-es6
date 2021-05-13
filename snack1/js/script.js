// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
const biciclette = [

    biciletta1 = {
        nome: "Tarmac SL7",
        peso: 120
    },
    biciletta2 = {
        nome: "Wilier Filante SLR",
        peso: 10
    },
    biciletta3 = {
        nome: "Argon 18 Gallium Pro Disc",
        peso: 5
    }

];

let biciclettaLeggera = biciclette[0];
for (i=0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciclettaLeggera.peso) {
        biciclettaLeggera = biciclette[i];
    }
}
console.log(biciclettaLeggera);

const {nome,peso} = biciclettaLeggera;
console.log(nome,peso);

const bici = document.getElementById("bicileggera");

bici.innerHTML = `<li> ${nome}</li> <li> ${peso}</li> `;




