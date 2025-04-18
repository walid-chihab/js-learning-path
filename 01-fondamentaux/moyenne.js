/*
 *Écris une fonction moyenne qui prend un tableau de nombres en argument et retourne la moyenne de ces nombres.
 * */

function	moyenne (tab)

{
	let sum = 0;
	for (let i = 0 ; i< tab.length ; i++)
	{
		sum += tab[i];
	}
	sum = sum/tab.length;
	return sum;
}

let tab = [1,3,22,43,2,76,0];

//affichage du moyenne
console.log(moyenne(tab));
