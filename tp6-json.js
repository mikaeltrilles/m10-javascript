/**
• Déclarez une variable contenant du JSON
• Cette variable doit permettre de stocker des informations concernant une société.
Toutes les informations suivantes doivent être contenues dans une seule variable au
format JSON :
    o Nom : Google
    o Siège social : Googleplex, Mountain View, California, United States
    o Fondateurs :
        Larry Page, né le 26/03/1973 à East Lansing, Michigan
        Sergey Brin, né le 21/08/1973 à Moscou, Union Soviétique
    o Chiffre d’affaires en milliards de $:
        2008, 16.49
        2012, 37.97
        2016, 89.46
        2018, 136.2

• Faites une boucle pour afficher les fondateurs de la société ainsi que les chiffres
d’affaires de la société.
 */
let societe = {
  nom: "Google",
  siegeSocial: "Googleplex, Mountain View, California, United States",
  fondateurs: [
    { nom: "Larry Page", dateNaissance: "26/03/1973", lieuNaissance: "East Lansing, Michigan" },
    { nom: "Sergey Brin", dateNaissance: "21/08/1973", lieuNaissance: "Moscou, Union Soviétique" }
  ],
  chiffresAffaires: [
    { annee: 2008, chiffreAffaire: 16.49 },
    { annee: 2012, chiffreAffaire: 37.97 },
    { annee: 2016, chiffreAffaire: 89.46 },
    { annee: 2018, chiffreAffaire: 136.2 }
  ]
};
console.log("Fondateurs de la société " + societe.nom + " :");
for (let i = 0; i < societe.fondateurs.length; i++) {
  console.log("\t" +societe.fondateurs[i].nom + ", né le " + societe.fondateurs[i].dateNaissance + " à " + societe.fondateurs[i].lieuNaissance);
}
console.log("\nChiffres d'affaires de la société " + societe.nom + " :");
for (let i = 0; i < societe.chiffresAffaires.length; i++) {
  console.log("\tEn " + societe.chiffresAffaires[i].annee + `, ${societe.nom} réalisé un chiffre de ` + societe.chiffresAffaires[i].chiffreAffaire + " milliards de $");
}
