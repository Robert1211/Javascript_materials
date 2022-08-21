//typ liczbowy
//typ number 
const liczba = 24;
const liczba2 = 24.57;

//console.log(liczba)
//console.log(liczba2)
//console.log(liczba - liczba2)

//----------------------------------------------------------

//typ tekstowy, piszemy w cudzyslowiu
//typ string
const pierwszeImie = "Alicja";
const zwierze = 'Kot';

//console.log(pierwszeImie)
//console.log(zwierze)

//console.log(pierwszeImie + zwierze);
//console.log(pierwszeImie + ' ma nowe zwierze,ktorym jest: ' + zwierze);

//-------------------------------------------------------------------

//typ logiczny  przyjmue dwa stany prawda albo falsz
// typ boolean "true" or "false"
const kobieta = false;
const man = true;

//console.log(man)

// rozpoznanie typu -  weryfikacja typu
//console.log(typeof(liczba))

//------------------------------------------------------------

//typ null - typ object
const color = null;
//console.log(color)

let imiePsa;

//console.log(typeof(imiePsa))

imiePsa = 'Bambi';
//console.log(imiePsa)

//----------------------------------------------------

//Typ tablice jest obiektem 
//typ array  
//typ tables OBJECT wazne 
//const przykladowaTablica = [];
const przykladowaTablica = ["Alicja", "Tomasz", "Bartosz", 2, true]

//console.log(przykladowaTablica)
//console.log(przykladowaTablica[2])

//--------------------------------------------------------------

//typ obiekt object

const osoba = {
    imie:"Tomasz",
    wiek:29,
    kolorOczu: "zielony",
    plec: "man"
}

const zmiennaLiczbowa  = '55'

//console.log(osoba)
//console.log(osoba.wiek)

//----------------------------------
//zabawa z typami danych

//console.log(pierwszeImie.length)
//console.log(osoba.plec.length)  //mierzenie dlugosci danego typu daqnych
//console.log(przykladowaTablica[1].toUpperCase()) //uzycie metody do zmiany stringu na duze litery

//console.log(przykladowaTablica[1].toLowerCase()); //metoda ta zmienia stringa na male litery

const wynikDodawania = liczba + zwierze;
//console.log(wynikDodawania)
//console.log(typeof(wynikDodawania))

//console.log(liczba2.toFixed(0)) //zaokragla wartosc do okreslonych miejsc po przecinku

//metoda ktora zmienia typ number w typ string, czyli z liczby nastepuje zmiana na string  
//console.log(String(liczba))

console.log(zmiennaLiczbowa)
console.log(Number(zmiennaLiczbowa)) //change type string to type number
//zamienia typ string na typ number
