//Sposoby deklarowania tablic
//sposob 1

const tablica1 = ["Alicja"];
tablica1.push(2)            // za pomoca tego mozemy dodac do tablicy kolejna wartosc np 2
tablica1[2] = "Marian"     //za pomoca tego mozemy dodac do tablicy kolejna wartosc np "Marian"
console.log(tablica1)
//console.log(tablica1.length)
//console.log(typeof(tablica1));

//sposob 2
const tablica2 = new Array(5);  //deklaracja tablicy tworzy 5 pustych miejsc


tablica2[3] = "Kamil"  //dodawanie wartosci w miejsce indeksowe o wartosci 3
console.log(tablica2);