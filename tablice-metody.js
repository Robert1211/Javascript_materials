
//Metody natablicach

const tablica = ["Klaudia", 2, 5.53, true, {name: "Tomasz", age: 24}]
const liczby = [1, 6, 4, 9, 2, 4];

//weryfikacja dlugosci tablicy
//console.log(tablica.length)
//console.log(liczby.length)

//dodawanie elementow do tablicy na sam koniec
tablica.push("Wojtek");
//console.log(tablica)

//odejmowanie ostatniego elementu 
tablica.pop();
liczby.pop();
//console.log(liczby);
//console.log(tablica);

//odejmowanie elementu z poczatku tablicy
tablica.shift();
//console.log(tablica)

//znajdowanie elementu w tablicy po jej wartosci czyli jaki ma index
//sluzy do znajdowania elementu pod jakim indexem sie znajduje element
const indexElement = liczby.indexOf(6);
//console.log(indexElement)

const indexElement2 = tablica.indexOf("Klaudia")
//jesli szukany element nie istnieje to wynikiem wyszukiwania bedzie -1 oznacza to ze nie ma takiego indeksu w naszej tablicy
//console.log(indexElement2)

//usuwanie dowolnego elementu z tablicy za pomoca indexu, ktory wczesniej znalezlismy za pomoca indexOf;
liczby.splice(indexElement, 2); //ta jedynka oznacza ze chcemy usunac jeden element, jesli bylo by tam 2 czyli usuwamy dwa elementy o danego elementu
//console.log(liczby)

//przekszalcenie tablicy na stringa
const imiona = ["Rafal", "Krzys", "Ola", "Ania"]
const string = liczby.join("  ");
//console.log(string)
//console.log(typeof(string))
const stringImiona = imiona.join("-")    //join wzial wszystko z tablicy i zrobil jednego stringa
//console.log(stringImiona);

//odwrocenie tablicy, czyli zamienienie kolejnosci
//imiona.reverse();

//sortowanie tablicy - ulozenie w kolejnosci alfabetycznej
imiona.sort();
//console.log(imiona)

//laczenie tablic
const superTablica = liczby.concat(imiona);
console.log(superTablica);



