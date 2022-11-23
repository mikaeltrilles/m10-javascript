/* Créer une fonction qui prend en paramètre une chaine de caractères.
Cette fonction retourne la chaine de caractères passée en paramètre avec la première 
lettre en majuscule.
*/

function majuscule(chaine) {
  return chaine[0].toUpperCase() + chaine.slice(1);
}

console.log(majuscule("bonjour"));
