// •       Contrôle  de  saisie :  lorsque  l’utilisateur  clique  sur  le  bouton  de  validation,  une 
// fonction est appelée. Cette fonction contrôle les saisies effectuées par l’utilisateur :
// o Le nom doit être renseigné
// o Le prénom doit être renseigné
// o La date de naissance doit être renseignée
// •       Si  l’utilisateur  n’a  pas  respecté  un  des  contrôles  ci-dessus,  un  message  d’erreur 
// s’affiche sur fond rouge dans la page persistant tant que l’utilisateur n’a pas corrigé 

// Declaration des variables
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var date = document.getElementById("date").value;
var message = document.getElementById("message");




const formulaire = () => {
  if (nom == "" || prenom == "" || date == "") {
    return (message.style.backgroundColor = "red"
      , message.innerHTML = "Veuillez remplir tous les champs");
  } else {
    return (message.style.backgroundColor = "green",
      message.innerHTML = "Formulaire envoyé");
  }
};
