//funkcje zgrupowane instrukcje ktore uruchamiamy przez podanie ich nazwy

//pierwszy sposob
//deklaracja funkcji
function wyswietlTekst () {
    console.log("przykladowy tekst z funkcji")
}
//wyswietlTekst(); // sposob wywolania naszej funcji+

//drugi sposob deklaracji funkcji
const wyswietlTekst2 = function(){
    console.log("Przykladowy tekst z funcji 2 :)")
}

//wyswietlTekst2() //sposob wywolania naszej funkcji

//Trzeci sposob deklaracji funcji
const wyswietlTekst3 = () => {
    console.log("Przykladowy tekst z funcji 3")
}
//wyswietlTekst3();

// pelon prawna funcji przyklad
// const imie = "Alicja";    // jesli wpiszemy inne imie to wysietli nam tekst 'Dostep jest zabromiony'
// const wiek = 35;
// const zwierze = "kot"

// function zwrocTekst() {
//     if(imie == "Alicja"){
//         console.log("Tak imie to Alicja")
//     } else {
//         console.log("Dostep jest zabroniony")
//     }
// }
// zwrocTekst();


// PARAMETRY W FUNKCJI
// let pierwszaLiczba = 1;
// let drugalLiczba = 2;
// let suma;


// 1.sposob
// function dodawanieLiczb(){
//     suma = pierwszaLiczba + drugalLiczba;
// }

// dodawanieLiczb();

//2.sposob


//let wynik;
//function dodawanieLiczb(pierwsza, druga, imie){
   // console.log("Wynik: "+ imie + "ma obecnie " + Number(pierwsza + druga) + " lat" + " i jest szczesliwy")
   
   // inny zapis latwy
   //return `Wynik: ${imie} ma obecnie ${Number(pierwsza + druga)} lat`   //return znaczy zakonczenie funcji, funkcja nie bedzie juz nic robic
//   return pierwsza + druga  //return kluczowe slowko!!!!!!!
//}
//if(dodawanieLiczb(65, 12, `Rafal`) > 60){

//    console.log(`wartosc wieksza niz 60`)
//}


//inny przyklad
//wynik = dodawanieLiczb(12, 12, "Robert");
//console.log(wynik);
// if(wynik > 60){
//     console.log(`wartosc wieksza niz 60`)
// }
// else if (wynik > 40) {
//     console.log(`wartosc wieksz niz 40`)
// }
// else {
//     console.log(`wartosc mniejsza  niz 43 hahaha`)
// }


//kolejny przyklad

function odejmowanieLiczb(piewrszaLiczba, drugaLiczba){
    return piewrszaLiczba - drugaLiczba
}

function dodawanieLiczb(pierwsza, druga){
    const wynikOdejmowania = odejmowanieLiczb(5, 1)
    return pierwsza + druga + wynikOdejmowania;
}
console.log(dodawanieLiczb(100, 100));

