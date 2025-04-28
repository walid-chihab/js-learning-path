/**
 *
 * Écris une fonction max_3 qui prend trois nombres en argument et retourne le plus grand des trois.
 *
 *
 **/


function	max_3 ( x1, x2, x3)
{
	if(isNaN(x1) ||isNaN(x2) ||isNaN(x3))
	{
		console.log("enterer des val valable");
	}
	else
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
}


//autre fonction qui fait la meme chose
function	ft_max_3 ( x1, x2, x3) 
{
	// Math.max prend plusieurs arguments et retourne le plus grand
	const max = Math.max(x1, x2, x3);
	console.log(max + " est le plus grand élément de la liste");
}


//let tab = [2,6,9];//les 3_trois_points pour acceder a tout les element du tablea
//max_3(...tab);// Déstructuration d'un tableau "destructuring""tafkik||tadmir"


//fct pre-definie
//ft_max_3(3,8,0);



//si on veux donne directe les vals a nos vars 
////on convert par 3 method de chain de caracter a une valeur on peut l'utiliser
/*  val_1 = +prompt ("entrer la val de 1 ere element : ");
    val_2 = Number(prompt ("entrer la val de 2 eme element : ")) ;
    val_3 = parseInt(prompt ("entrer la val de 3 eme element : "));
*/
