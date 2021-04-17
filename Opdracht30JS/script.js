/** @format */

const colors = ["yellow", "Blue", "Red", "Orange"];
let i = 0;

while (colors[i]) {
  console.log(colors[i]);
  i++;
}

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach((element) => console.log(element));

/*
  
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
while loop : 4 regels
for loop : 3 regels
  

Hoeveel regels neemt mijn forEach method in beslag?
foreach regels : 1 regel



Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
het is korter, vind een for loop makkelijker leesbaar.

Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

nee je leest alleen de inhoud van het object en logt die inhoud.

*/

const items = {
  first: "hallo",
  second: "Doei",
  third: "ja joh",
  fourth: "nee man",
  fifth: "oke",
};

for (const item in items) {
  console.log(`${item}: ${items[item]}`);
}
