/**
 * o Améliorez votre fonction afin que cette dernière renvoie une exception dans le 
cas où le paramètre reçu par la fonction n’est pas un nombre
o Améliorez votre fonction afin que cette dernière renvoie une exception dans le 
cas où un élément du tableau n’est pas un nombre
o Mettez en œuvre plusieurs appels différents pour tester :
▪       Le cas avec un tableau nombre
▪       Le cas avec un tableau contenant des nombres et une chaine de 
caractères
▪       Le cas avec un paramètre qui n’est pas un tableau
o Mettez en place les blocs try / catch afin de sécuriser les appels.
 */

function moyenneTableau(tableau) {
    if (typeof tableau !== "object") {
        throw new Error("Le paramètre n'est pas un tableau");
    }
    let somme = 0;
    if (tableau.length > 0) { // Si le tableau n'est pas vide
        for (let i = 0; i < tableau.length; i++) {  // On parcourt le tableau
            if (typeof tableau[i] !== "number") { // Si un élément n'est pas un nombre
                throw new Error("Un des éléments du tableau n'est pas un nombre");
            }
            somme += tableau[i];
        }
        return somme / tableau.length;
    } return 0;
}

let tableau1 = [1, 2, 3, 4, 5];
let tableau2 = [];
let tableau3 = ["a", "b", "c"];
let tableau4 = [1, 2, 3, 4, 5, "a"];
let tableau5 = "a";

try {
    console.log("La moyenne du tableau 1 est : " + moyenneTableau(tableau1));
}
catch (e) {
    console.log(e.message);
}

try {
    console.log("La moyenne du tableau 2 est : " + moyenneTableau(tableau2));
}
catch (e) {
    console.log(e.message);
}

try {
    console.log("La moyenne du tableau 3 est : " + moyenneTableau(tableau3));
}
catch (e) { 
    console.log(e.message);
}

try {
    console.log("La moyenne du tableau 4 est : " + moyenneTableau(tableau4));
}
catch (e) {
    console.log(e.message);
}

try {
    console.log("La moyenne du tableau 5 est : " + moyenneTableau(tableau5));
}
catch (e) {
    console.log(e.message);
}
