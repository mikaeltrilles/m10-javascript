// Fonction addition de la page tp08-addition.html

// Déclaration des variables
var nb1, nb2, resultat;

// Fonction addition
function addition() {
  nb1 = parseInt(document.getElementById("a").value) ? parseInt(document.getElementById("a").value) : undefined;
  nb2 = parseInt(document.getElementById("b").value) ? parseInt(document.getElementById("b").value) : undefined;

  if (isNaN(nb1) || isNaN(nb2)) {
    document.getElementById("resultat").innerHTML = "Veuillez saisir des nombres";
    document.getElementById("resultat").style.backgroundColor = "red";
  } else {
    resultat = nb1 + nb2;
    document.getElementById("resultat").innerHTML = resultat;
    document.getElementById("resultat").style.backgroundColor = "green";

  }
}

addition();
console.log(nb1);
console.log(nb2);