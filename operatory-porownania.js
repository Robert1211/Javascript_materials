//Porownania wartosci ==
const imie1 = `Alicja`;
const imie2 = `Alicja`;

const wiek1 = 7;
const wiek2 = `7`;

//console.log(imie1 == imie2)
//console.log(wiek1 == wiek2) ten operator tylko porownuje wartosc a nie typ czyli 7 to tez 7


//operator porownainie wartosci i  typu
//console.log(wiek1 === wiek2)    ten operaator porownuje wartosc i typ danej zmiennej czyli wynik bedzie fals 

//operator nie rowny, rozny
const samochod = `Fiat`;
//console.log(samochod != `Audi`)

// jesli chcemy porownac jeszcze typ to ===
//console.log(samochod !== `Audi`)


//operatory wiekszosci i mniejszosci
//const liczba1 = 53;
//const liczba2 = 53;

//console.log(liczba1 >= liczba2); //zazwsze znaczek rowna sie musi byc po znaku wiekszosci lub mniejszosci


// OPERTATOR  z uzyciem if

const liczba1 = 53;
const liczba2 = 53;

if(liczba1 == 53) {
    console.log(`jest rowna`)
} else {
    console.log(`nie jest rowna`)
}

//OPERATOR TROJSKLADNIKOWY jego znak atrybut to ?
liczba1 == 53 ? console.log(`jest rowna tej liczbie`) : console.log(`nie jest rowna`) //jesli liczba1 jest rowna(==) 53  to(? -to mozna traktowac jak if) wyswietl mi (jest rowna tej liczbie), a jesli nie jest rowna (: -to mozna traktowac jak else) to wez mi zwroc (nie jest rowna)




