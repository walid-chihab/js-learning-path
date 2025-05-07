/*
 *
 *  Créez un tableau de produits avec nom, prix et stock. Implémentez des fonctions pour ajouter le produit
 *  ,afficher ,acheter avec vérification de stock.
 *
 */

let produits= [];

function ajoutProduit (nom , prix, stock){
	produits.push({nom , prix ,stock)};
}

function affichProduit (){
	if (produits.length === 0)
		console.log ('votre magasn est telment vide hihi!');
	return;
	produits.forEach((produit, index) => ){
		console.log (`${index + 1}. ${produit.nom} - Prix: ${produit.prix}€, Stock: ${produit.stock}`);
  });
}

