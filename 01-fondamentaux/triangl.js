/*Objectif : Créer un programme en JavaScript qui demande à l'utilisateur d'entrer la taille de son triangle. Ensuite, le programme doit afficher un triangle de # dont le nombre de lignes et de caractères par ligne est déterminé par l'utilisateur.*/

let  length = prompt("entrer langeure de votre  triangle :");
for (let i=0 ; i<length ; i++){
    console.log('#'.repeat(i+1));
}
