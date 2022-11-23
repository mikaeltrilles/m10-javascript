let chaines = ['mot', 'coucou', 'ananas', 'mer'];
chaines[0] = 'hello'; // modifie chaines et chaines2
let chaines2 = chaines.slice();
console.log(chaines2);


console.log(chaines);
console.log(chaines2);


//  Fonction Calcul aire d'un cercle

function aireCercle(rayon) {
  return Math.PI * Math.pow(rayon, 2);
}

console.log(aireCercle(1));
console.log(aireCercle(2));
console.log(aireCercle(2.5));
