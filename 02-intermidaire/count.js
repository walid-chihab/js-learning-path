/**
 *1- Écrir une fonction count_b qui prend une chaîne de caractères comme argument et  retourne le nombre de caractères "b,B" (maj ou min) en dans cette chaîne.
 *
 *  
 * 2- Écris une fonction countChar qui fonctionne comme countBs, mais qui prend un  deuxième argument représentant le caractère à compter (au lieu de compter uniquement  les B majuscules).*/
	

//une fct qui generalise count_b
function	count_char (mot, c)
{
        let compt=0;
        for (let i=0 ; i< mot.length ; i++){
		if (mot[i] === c){
			console.log( "exixste dans adress  " + (i+1) +"  de la chain");
			compt++;
			continue;
		}
	}
	return compt;
}





//fonction traiter l'adresse du caracter b
function	count_b (mot)
{
	let compt=0;
	for (let i=0 ; i< mot.length ; i++){
        	if (mot[i] === 'B' || mot[i] === 'b'){
                	console.log( "exixste dans adress  " + (i+1) +"  de la chain");
                	compt++;
        	 	continue;
        	}

	return compt;
	}
}

    let mot="hello evbeBryone";//notre chaine a traiter


    console.log ("\n");

    //compt = count_b(mot);//donne la valeur qui elle est return par la fct a le variable compt

    //compt = count_char (mot);//la meme choses mais avec la fct la plus generalise 

    //combient de ce caractere dans la chaine
    if ((compt !==  0) && (compt !==1)){   /*instruction logique "algebre du math"*/
        console.log("votre caractere repeter " + compt +" fois");
    }
    else
    {
        if(compt === 1)
            console.log("votre caractere existe une seul fois");
        else
            console.log("votre caractere n'exisste pas");

    }



