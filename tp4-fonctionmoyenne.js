/*
Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en 
paramètre.
Cette fonction doit retourner un message d’erreur dans le cas où un élément du 
tableau n’est pas un nombre
Réalisez 3 appels à cette fonction avec : 
- Un tableau contenant des éléments
- Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que 
votre fonction retourne 0 dans le cas où le tableau est vide.
- Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?
*/

function moyenneTableau(tableau) {
  let somme = 0;
  if (tableau.length > 0) { // Si le tableau n'est pas vide
    for (let i = 0; i < tableau.length; i++) {  // On parcourt le tableau
      if (typeof tableau[i] !== "number") { // Si un élément n'est pas un nombre
        return "Erreur : un des éléments du tableau n'est pas un nombre";
      }
      somme += tableau[i];
    }
    return somme / tableau.length;
  } return 0;
}

let tableau1 = [1, 2, 3, 4, 5];
let tableau2 = [];
let tableau3 = ["a", "b", "c"];

console.log("La moyenne du tableau 1 est : " + moyenneTableau(tableau1));
console.log("La moyenne du tableau 2 est : " + moyenneTableau(tableau2));
console.log("La moyenne du tableau 3 est : " + moyenneTableau(tableau3));
