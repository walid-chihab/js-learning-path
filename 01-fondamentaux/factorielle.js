function factorielle ( n){
    if (n === 0 || n ===1 )
        return 1;
    else {
        n = n * factorielle (n - 1) ;
      return n;
    }
}
let n = +prompt("entrer un nombre : ");
console.log ("la fatrorielle de  "+n+" est "+factorielle (n));
