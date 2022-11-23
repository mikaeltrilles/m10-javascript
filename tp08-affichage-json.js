//  vous devez développer cette fonction javascript  initialiserDonnees().


function initialiserDonnees() {
  let data = {
    "polluant": "CO2",
    "unite": "milliards de tonnes",
    "annee": 2017,
    "pays": [{ "nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn" },
    { "nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us" },
    { "nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in" },
    { "nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru" },
    { "nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp" },
    { "nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de" },
    { "nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr" },
    { "nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir" },
    { "nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca" }]
  }


  document.getElementById("titre").innerHTML = `Pays les plus polluant pour le ${data.polluant.slice(0,2)}<sub>${data.polluant.slice(2,3)}</sub> <small>(${data.unite})</small>`;
  document.getElementById("annee").innerHTML = `Année : ${data.annee}`;

  //Prepa entete de la table - Puis map du tableau pour le contenu de la table - Fermeture de la table
  document.getElementById("listePays").innerHTML = `<table class="table"><thead><tr><th> </th><th scope="col">NOM</th><th scope="col">VALEUR</th><th scope="col">%</th><th scope="col">CODE</th></tr></thead><tbody>

  ${data.pays.map((pays) => `<tr><td><img src="https://www.drapeauxdespays.fr/data/flags/w580/${pays.code}.webp" style="width:30px;"></td><td>${pays.nom}</td><td>${pays.valeur}</td><td>${pays.pourcentage}</td><td>${pays.code}</td></tr>`).join("")}`;

  document.getElementById("listePays").innerHTML += `</tbody></table>`;

}

initialiserDonnees();