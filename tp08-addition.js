// Fonction addition de la page tp08-addition.html

// Déclaration des variables
var nb1, nb2, resultat;

// Fonction addition
function addition() {
  nb1 = parseInt(document.getElementById("a").value);
  nb2 = parseInt(document.getElementById("b").value);
  if (isNaN(nb1) || isNaN(nb2)) {
    document.getElementById("resultat").innerHTML = "Veuillez saisir des nombres";
  } else {
    resultat = nb1 + nb2;
    document.getElementById("resultat").innerHTML = resultat;
  }
}