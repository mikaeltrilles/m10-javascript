fetch('https://digicode.cleverapps.io/json/pays/pollution') 
.then(res => res.text())
.then(text => console.log(text));
let data = JSON.parse(req.responseText);
console.log(data);