/**
Créez une fonction qui prend en paramètre une date de naissance et affiche son age 
avec nombre d’années et nombre de mois.
Exemple : pour la date 17/12/1982 la fonction affiche Vous avez 39 ans et 11 mois.
 */

function calculAge(dateNaissance) {
    let dateActuelle = new Date(); // Date actuelle
    let age = dateActuelle.getFullYear() - dateNaissance.getFullYear(); // Age en années
    let mois = dateActuelle.getMonth() - dateNaissance.getMonth();  // Age en mois
    if (mois < 0 || (mois === 0 && dateActuelle.getDate() < dateNaissance.getDate())) {
        age--;  // Si l'anniversaire n'est pas encore passé, on retire 1 an
        mois = 12 + mois; // On ajoute 12 mois
    }
    return `Vous avez ${age} ans et ${mois} mois.`;
}

let dateNaissance = new Date(1982, 11, 17);
console.log(calculAge(dateNaissance));