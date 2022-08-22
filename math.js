//wbudowany obiekt math, ktory zawiera wlasnosci metody zwiazanej z funkcjami i stalymi matematycznymi - czyli za pomoca obiektu math bedziemy mogli robic rozne operacje matematyczne(potegowanie, pierwiastki)

const pi = Math.PI;  //zwraca wartosc PI
const pierwiastek2 = Math.SQRT2  //zwraca pierwiastek kwadratowy z 2
const logarytm2 = Math.LN2;  //logarytm naturalny z 2
const logarytm10 = Math.LN10;  //logarytm naturalny z 10
const zaokraglenie1 = Math.round(logarytm10); //zaokraglanie do najblizszej liczby calkowitej
const zaokraglenie2 = Math.ceil(1.1)          //zaokraglenie do najblizszej liczby calkowitej w gore
const zaokraglenie3 = Math.floor(24.1)        //zaokraglenie do najblizszej liczby calkowitej w dol
const zaokraglenie4 = Math.trunc(2.85556514514564181448444486) //zwracanie czesci calkowitej
const signMetoda = Math.sign(-3000)  //w przypadku kiedy::  Ujemna = -1, Wynosi 0 = 0, Dodatnia = 1,
const potegowanie = Math.pow(2, 64)  // metoda ta pozwala spotegowac jakies liczby
const pierwiastek = Math.sqrt(64.6)       // pierwiastkowanie 
const zwrocenieWartosciBezwzglednej = Math.abs(-10.25) //zwrocenie wartosci bezwzglednej dodatniej np z liczby ujemnej
const minimalnaLiczba = Math.min(-4, -12, 5, 2, 55, 77) //zwrocenie wartosci minimalnej z jakiegos zboiru - zawsze wybierze najmniejsza liczbe ze zbioru
const maxLiczba = Math.max(7, -78, 14, -2)  // zwraca wartosc maksymalna z danego zbioru
//console.log(maxLiczba);

const losowanieLiczb = Math.floor((Math.random() * (50 - 1) + 1));  //generuje nam losowo liczbe z przedzialu od 1 do 50, uzywamy Math.flor w celu zaokraglenia do pelnych liczb

//console.log(losowanieLiczb)      //losowanie liczb
console.log(`test${losowanieLiczb}@example.com`)//losowanie liczb z textem


