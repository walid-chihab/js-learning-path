/*
 *
 * Écris une fonction compterVoyelles qui prend une chaîne de caractères et affiche le
 *nombre de chaque voyelles (`a, e, i, o, u, y`) qu’elle contient.
 *
 */

function	compterVoyelles (string){
	var a,e,i,o,u,y,x;
	a = 0;
	e = 0;
	i = 0;
	o = 0;
	u = 0;
	y = 0;
	x = 0;
	while ( x < string.length){
		if( string[x] == 'a')
			a++;
		else if( string[x] == 'e')
			e++;
		else if( string[x] == 'i')
			i++;
		else if( string[x] == 'o')
			o++;
		else if( string[x] == 'u')
			u++;
		else if( string[x] == 'y')
			y++;
		x++;
	}
	console.log ( " -a"+ a);
	console.log ( " -e"+ e);
	console.log ( " -i"+ i);
	console.log ( " -o"+ o);
	console.log ( " -u"+ u);
	console.log ( " -y"+ y);
}
string = prompt("entrer votre chaine :");
compterVoyelles(string);
