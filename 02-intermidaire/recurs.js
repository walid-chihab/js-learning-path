nombre = prompt("enterer un nombre positif : ");// La méthode `prompt()` accepte toujours une chaîne de caractères (string) en entrée,
if (isNaN(nombre) || nombre.trim() === "" || nombre <= 0){// La méthode `trim()` élimine les espaces au début et à la fin de la chaîne de caractères
    console.log("entrer nompre positif");
}
 else {
    test(Number(nombre));  // Conversion du nombre en entier pour l'utiliser dans la fonction
}
function test( nombre){
    if (nombre === 0)
        console.log("nombre pair");
    else if(nombre === 1)
        console.log("nombre impaire");
    else 
        test(nombre - 2);//appeller la fonction while le nombre est pas 0 | 1 
}
