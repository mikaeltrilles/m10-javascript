/*
Créer une fonction qui vérifie le contenu d’un tableau 
- Si le tableau ne contient que des nombres alors la fonction retourne true 
- Sinon la fonction retourne false
Réalisez 3 appels à cette fonction avec : 
- Un tableau contenant des nombres
- Un tableau contenant des nombres et une chaine de caractères 
- Un tableau vide.
*/

function verifTableau(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    if (typeof tableau[i] !== "number") {
      return false;
    }
  }
  return true;
}

let tableau1 = [1, 2, 3, 4, 5];
let tableau2 = [1, 2, 3, 4, 5, "a"];
let tableau3 = [];

console.log("Le Tableau de chiffre : " + verifTableau(tableau1));
console.log("Le Tableau de chiffre et de lettre : " + verifTableau(tableau2));
console.log("Le Tableau vide : " + verifTableau(tableau3));
