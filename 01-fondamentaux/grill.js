/*Sujet : Afficher un motif de grille en fonction de la longueur et largeur spécifiées par l'utilisateur.*/

let length = parseInt(prompt("Entrer votre longueur du grille :"));
let width = parseInt(prompt("Entrer votre largeur du grille :"));

for (let i = 1; i <= width; i++) {
    if (i % 2 === 0) {
        console.log("\t" + "#".repeat(length));  // Lignes paires
    } else {
        console.log("#".repeat(length));  // Lignes impaires
    }
}

