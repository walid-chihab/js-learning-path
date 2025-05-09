/************************************************************************************************/
/*  Crée un tableau des étudiants où chaque étudiant est représenté par un objet avec :		*/
/*     nom (string)										*/
/*     age (number)			  							*/
/*     notes (tableau de nombres)	 !                                                      */
/* 1. Implémente une fonction ajouterEtudiant(nom, age, notes) qui ajoute un étudiant.		*/
/* 2. Implémente une fonction calculerMoyenne(nom) qui:						*/
/*    ‐ Trouve l’étudiant dans le tableau							*/
/*    ‐ Retourne la moyenne de ses notes							*/
/* 3. Implémente une fonction afficherMeilleurEtudiant() qui trouve et affiche l'étudiant 	*/
/* avec la meilleure moyenne.									*/
/************************************************************************************************/


// declare le tab qui va contient les objets
let etudiants = [];

// fonction qui ajout les etudiant prenet comme argumment nom, age, notes
function ajouterEtudiant(nom, age, notes){
	

	etudiants.push({nom, age, notes});

}


//fct qui calcule le moyenne des notes d'un etudiant
function calculerMoyenne(nom){
	 
	const etudiant = etudiants.find(e => e.nom === nom);
	
	//verifiant si ce argument est existe
	if (!etudiant){
		console.log(`l'etudiant ${nom} que vous cherche est pas existe!`);
		return ;
	}
	
	//si ya pas de note dans liste des notes de ce etudiant
	if (etudiant.notes.length === 0){
		console.log (`la liste des notes de votre etudiant ${nom} est  pas definis `);
		return ;
	}

	let sum = 0;

	//si ya des des notes on fait la somme de ces notes 
	etudiant.notes.forEach(note => {
		sum += note;
		return ;
	});


	//on l'affich le moyenne de ces notes 
	sum  = sum /etudiant.notes.length ;
	console.log (`le moyenne de ${nom} est ${sum}`);

}

ajouterEtudiant('anwar', 21, [14.3, 12.11, 11.89]);
ajouterEtudiant('haytem', 25, [11.31]);
ajouterEtudiant('anwar', 23, [14.54]);
ajouterEtudiant('anwar', 20, [14.00]);
