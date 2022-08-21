// let licznik = 0;
// const imionaOsob = ["Alicja", "Bogdan", "Katarzyna", "Robert"]

// //chcemy aby petla liczac od 0  do poki licznik bedzie mniejszy od ilosci imion osob w tablicy

// while(licznik < imionaOsob.length){
//     console.log(imionaOsob[licznik]);
//     licznik++;
// }

//stworzylismy warunek w ktorym petlo while wykonuj sie do momentu, wtedy kiedy do filtrujac biorac po koleji wszystkie osoby(poniewaz mamy inkrementacje) nie napotkasz slowa kluczowego "Katarzyna" - czyli jesli kiedys napotkasz taka wartosc przerwij wykowywanie(czyli w rezultacie nasza petla zostaje przerwana)
let licznik = 0;
const imionaOsob = ["Alicja", "Bogdan", "Katarzyna", "Robert"]


while(imionaOsob[licznik] !== "Katarzyna"){
    console.log(imionaOsob[licznik]);
    licznik++;
}