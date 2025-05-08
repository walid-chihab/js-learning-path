/*
 *
 *  Créez un tableau de produits avec nom, prix et stock. Implémentez des fonctions pour ajouter le produit
 *  ,afficher ,acheter avec vérification de stock.
 *
 */

let produits = [];


//push : ajout a la fin ,unshift : ajout au debut
function ajoutProduit (nom , prix, stock){
	produits.push({nom , prix ,stock});
}

function affichProduit (){
	if (produits.length === 0){
		console.log('votre magasin est telment vide hihi!');
		return;
	}
	produits.forEach((produit, index) =>{
		console.log (`${index + 1}. ${produit.nom} - Prix: ${produit.prix}€, Stock: ${produit.stock}`);
  	});
}

//achète une quantité d'un produit si possible
function  acheterProduit(nom_P , quantite){
	let produit = produits.find(p => p.nom === nom_P );//return soit indefined soitnom du produit
	if (!produit){//indefined
		console.log("ce produit n'existe pas");
		return;
	}
	if (produit.stock < quantite ){
		console.log("stock pas sufissant!");
		return;
	}
	produit.stock -= quantite;
	console.log(` l'achat de ${quantite} de nom ${nom_P} est effectue`);
}
affichProduit();
ajoutProduit('stylo', 12, 12);
ajoutProduit('ram', 120, 12);
ajoutProduit('disque_dur', 12, 12);
ajoutProduit('cable', 2, 12);
affichProduit();









