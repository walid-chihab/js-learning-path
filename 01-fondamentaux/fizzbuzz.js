/*
 *Sujet : FizzBuzz
Objectif : Créer un programme en JavaScript qui affiche les nombres de 1 à length où :

Pour chaque nombre divisible par 3, afficher "fizz".

Pour chaque nombre divisible par 5, afficher "buzz".

Pour chaque nombre divisible par 3 et 5, afficher "fizzbuzz".

Si le nombre n'est divisible ni par 3 ni par 5, afficher simplement le nombre
*/

let  length  = prompt("entrer votre nombre :");
for (let i=1 ; i<=length ; i++){
    if ( i % 3 === 0 && i % 5 === 0)
        console.log("fizzbuzz");

    else if ( i % 3 === 0)
            console.log("fizz");
    else if ( i % 5 === 0)
            console.log("buzz");
    else
        console.log(i);
}
