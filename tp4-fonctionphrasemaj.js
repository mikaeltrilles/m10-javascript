/*
Créer une fonction qui prend en paramètre une chaine de caractères.
Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa 
première lettre mis en majuscule
Exemple :
- Si je passe à cette fonction la chaine de caractères "Bonjour tout le monde" 
- La fonction retourne alors "Bonjour Tout Le Monde"
Astuce : Cette fonction utilisera la fonction précédente pour la mise en majuscule de la 
première lettre de chaque mot.
*/

function majuscule(chaine) {
  let tableau = chaine.split(" ");
  let resultat = "";
  for (let i = 0; i < tableau.length; i++) {
    resultat += tableau[i][0].toUpperCase() + tableau[i].slice(1) + " ";
  }
  return resultat;
}

console.log(majuscule("bonjour tout le monde"));
