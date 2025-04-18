/**
 *
 * Écris une fonction max_3 qui prend trois nombres en argument et retourne le plus grand des trois.
 *
 *
 **/


function	max_3 ( x1, x2, x3)
{
	if ( x1 > x2)
	{
		if( x1 > x3 )
			console.log( x1 + " est le plus grand element de la liste");
	}
	else
	{
		if ( x2 > x3 )
			console.log( x2 + " est le plus grand element de la liste");
		else 
			console.log( x3 + " est le plus grand element de la liste");
	}
}


//autre fonction qui fait la meme chose
function	ft_max_3 ( x1, x2, x3) 
{
	// Math.max prend plusieurs arguments et retourne le plus grand
	const max = Math.max(x1, x2, x3);
	console.log(max + " est le plus grand élément de la liste");
}


let tab = [2,6,9];

//max_3(...tab);// Déstructuration d'un tableau "destructuring""tafkik||tadmir"

//ft_max_3(3,8,0);
