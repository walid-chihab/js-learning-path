function somme_chiffre(n) {
    let sum =0;
   for (let i = 0 ; i< n.length ; i++)
   {
        sum = Number(n[i]) + sum ;
    }
    return sum;
}
let n = prompt("Entrer un nombre:");
console.log("la somme est :  " + somme_chiffre(n) );

