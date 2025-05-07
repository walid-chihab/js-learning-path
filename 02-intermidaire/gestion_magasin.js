/*
 *
 *  Créez un tableau de produits avec nom, prix et stock. Implémentez des fonctions pour ajouter le produit
 *  ,afficher ,acheter avec vérification de stock.
 *
 */

let produits= [];


//push: ajout a la fin ,:unshift ajout au debut
function ajoutProduit (nom , prix, stock){
	produits.push({nom , prix ,stock});
}

function affichProduit (){
	if (produits.length === 0)
		console.log ('votre magasin est telment vide hihi!');
	return;
	produits.forEach((produit, index) => ){
		console.log (`${index + 1}. ${produit.nom} - Prix: ${produit.prix}€, Stock: ${produit.stock}`);
  });
}

//achète une quantité d'un produit si possible
void achterProduit(nom , quantite){
	let produit = produit.find(p => p.nom === nom );
	if (!produit)
		console.log("ce produit n'existe pas");
	return;
	if (produit.stock < quantite ){
		console.log("stock pas sufissant!");
		return;
	}
	produit.stock -= quantite;
	console.log (` l'achat de ${quantite} de nom ${nom} est effectue`);
}


