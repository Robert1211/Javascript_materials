//wbudowany obiekt math, ktory zawiera wlasnosci metody zwiazanej z funkcjami i stalymi matematycznymi - czyli za pomoca obiektu math bedziemy mogli robic rozne operacje matematyczne(potegowanie, pierwiastki)

const pi = Math.PI;  //zwraca wartosc PI
const pierwiastek2 = Math.SQRT2  //zwraca pierwiastek kwadratowy z 2
const logarytm2 = Math.LN2;  //logarytm naturalny z 2
const logarytm10 = Math.LN10;  //logarytm naturalny z 10
const zaokraglenie1 = Math.round(logarytm10); //zaokraglanie do najblizszej liczby calkowitej
const zaokraglenie2 = Math.ceil(2.1)          //zaokraglenie do najblizszej liczby calkowitej w gore
const zaokraglenie3 = Math.floor(24.1)        //zaokraglenie do najblizszej liczby calkowitej w dol
const zaokraglenie4 = Math.trunc(2.85556514514564181448444486) //nic nie bedie zaokraglalo w gore czy w dol poprostu do calosci

console.log(zaokraglenie4);
