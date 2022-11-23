/* Le but de cet exercice est de faire saisir 2 nombres à l’utilisateur (1 par champ de 
  saisie). Lorsque l’utilisateur clique sur le bouton, le résultat de l’opération sélectionnée 
  par l’utilisateur s’affiche dans la page HTML avec un des messages suivants selon le 
  cas :
  o « Le résultat de l’addition est : … »
  o « Le résultat de la soustraction est : … » 
  o « Le résultat de la multiplication est : … » 
  o « Le résultat de la division est : … »
  •       Contrôle de saisie : si un des champs de saisie ne contient pas un nombre, un message 
  d’alerte sur fond rouge s’affiche : « Vous devez saisir un nombre ».
*/

// Déclaration des variables
var nb1, nb2, resultat, operation;

function operation() {
  // Récupération des valeurs saisies par l'utilisateur
  nb1 = parseInt(document.getElementById("a").value);
  nb2 = parseInt(document.getElementById("b").value);
  operation = document.getElementById("operation").value;

  // Contrôle de saisie
  if (isNaN(nb1) || isNaN(nb2)) {
    document.getElementById("resultat").innerHTML = "Veuillez saisir des nombres";
    document.getElementById("resultat").style.color = "red";
  } else {
    // Calcul du résultat
    switch (operation) {
      case "addition":
        resultat = nb1 + nb2;
        break;
      case "soustraction":
        resultat = nb1 - nb2;
        break;
      case "multiplication":
        resultat = nb1 * nb2;
        break;
      case "division":
        resultat = nb1 / nb2;
        break;
    }

    // Affichage du résultat
    document.getElementById("resultat").innerHTML = `Le résultat de ${(((operation) == "addition" ? "l'" : "la "))} ${operation} est : ${resultat}`;
    document.getElementById("resultat").style.color = "white";
    document.getElementById("resultat").style.backgroundColor = "green";
    
    console.log(operation);
  }
}

operation();
