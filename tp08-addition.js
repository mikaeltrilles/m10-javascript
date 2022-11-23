function addition() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var resultat = parseInt(a) + parseInt(b);
  document.getElementById("resultat").innerHTML = resultat;
}
