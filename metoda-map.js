const imiona = ["Alicja", "Tomasz", "Agnieszka", "Beata","Rafal", "Klaudiusz", "Robert", `Mariana`]
const liczby = [24, 63, 41, 68, 85];
let dziewczyny = [];
let chlopcy = [];

//Wykorzystasnie metody map w praktyce
//map to taka petla dla naszej tablicy, mozemy wykonywac rozne operacje
//druga wartosc po przecinku w callbacku bedzie oznaczac index(mozemy zapisac jako index moze byc tez np 'test')

// liczby.map((liczba, index) => {
//     if(liczba > 41){
//         console.log(`Liczba ${liczba} jest wieksza od 41`)
//     } else {
//         console.log(`Liczba ${liczba} jest mniejsza badz rowna  41`)
//     }
 
// console.log(`${liczba} kryje sie pod indexem - ${index}`)

// })
//Praktyczny przyklad niech skrypt wezmie taclice imiona i na poszczegolnej wartosci zwerifikowal czy to jest chlopak czy dziewczyna i jesli to sa dziewczyny to zeby wrzucil do tablicy dziewczyny
//hej javaScript wykonaj operacje map na imionach
//ciekawa zaleznosc imiona kobiet kacza sie przwaznie na "a"
//wyswietl imiona tagze chlopcow
imiona.map(imie => {
    if(imie [imie.length - 1] == 'a'){
        dziewczyny.push(imie)
    }else  {
        chlopcy.push(imie)
       }
    
})
console.log(dziewczyny);
console.log(chlopcy)