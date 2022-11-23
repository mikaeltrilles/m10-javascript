// •       Contrôle  de  saisie :  lorsque  l’utilisateur  clique  sur  le  bouton  de  validation,  une 
// fonction est appelée. Cette fonction contrôle les saisies effectuées par l’utilisateur :
// o Le nom doit être renseigné
// o Le prénom doit être renseigné
// o La date de naissance doit être renseignée
// •       Si  l’utilisateur  n’a  pas  respecté  un  des  contrôles  ci-dessus,  un  message  d’erreur 
// s’affiche sur fond rouge dans la page persistant tant que l’utilisateur n’a pas corrigé 

//declaration des variables nom prenom date
var nom, prenom, date;

//fonction de controle

// Fonction de controle des element du formulaire
function formulaire(e) {

  nom = document.getElementById("nom").value ? document.getElementById("nom").value : "";
  prenom = document.getElementById("prenom").value ? document.getElementById("prenom").value : "";
  date = document.getElementById("date").value ? document.getElementById("date").value : false;
  if (nom == "" || prenom == "" || date == false) {
    document.getElementById("message").innerHTML = "Veuillez remplir tous les champs";
    document.getElementById("message").style.backgroundColor = "red";
  } else {
    document.getElementById("message").innerHTML = "Formulaire envoyé. Bienvenue " + prenom + " " + nom;
    document.getElementById("message").style.backgroundColor = "green";
  }
} 


console.log(nom);
console.log(prenom);
console.log(date);

//appel de la fonction
formulaire();
