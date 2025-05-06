/*
 *
 *Écris une fonction inverserChaine qui prend une chaîne de caractères et retourne cette même chaîne inversée.
 *
 */


function reverseString(str) {
    // La chaîne est convertie en tableau de caractères avec split('') → ['h', 'e', 'l', 'l', 'o']
    // Ensuite, le tableau est inversé avec reverse() → ['o', 'l', 'l', 'e', 'h']
    // Enfin, on rejoint les caractères en une chaîne avec join('') → "olleh"
    return str.split('').reverse().join('');  // "hello" → ['h','e','l','l','o'] → ['o','l','l','e','h'] → "olleh"
}

// On crée une variable qui contient une chaîne à inverser
let myString = "hello";

// On appelle la fonction reverseString avec myString, et on stocke le resultat dans reversedString
let reversedString = reverseString(myString);

// On affiche la chaîne inversée dans la console
console.log(reversedString);  // Résultat attendu : "olleh"

