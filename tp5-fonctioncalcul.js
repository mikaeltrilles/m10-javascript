/**
Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où 
il manque un paramètre
Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où 
un paramètre n’est pas un nombre.
 */

function calcul(a, b){
    if (a === undefined || b === undefined){
        throw new Error("Il manque un paramètre");
    }
    if (typeof a !== "number" || typeof b !== "number"){
        throw new Error("Un paramètre n'est pas un nombre");
    }
    return a * b + a + b;
}

// Appel de la fonction avec les paramètres 2.5 et 8
console.log("Résultat avec 2 nombres : 2.5 et 8 = " + calcul(2.5, 8));
// Appel de la fonction avec les paramètres a et bc
console.log("Résultat avec 2 chaînes de caractères : a et bc = " + calcul("a", "bc"));
// Appel de la fonction avec les paramètres 2 et "a"
console.log("Résultat avec 1 nombre et 1 chaîne de caractères : 2 et a = " + calcul(2, "a"));
// Appel de la fonction avec les paramètres 2 et undefined
console.log("Résultat avec 1 nombre et 1 undefined : 2 et undefined = " + calcul(2));

