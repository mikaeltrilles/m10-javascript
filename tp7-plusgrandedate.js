// Créez une fonction qui prend en paramètre 2 dates et affiche la plus récente des 2

function plusGrandeDate(date1, date2) {
    if (date1 > date2) {
        return date1;
    } else {
        return date2;
    }
}

let date1 = new Date(1982, 11, 17);
let date2 = new Date(2022, 11, 17);

console.log(`La plus grande date est : ${plusGrandeDate(date1, date2)}`);
