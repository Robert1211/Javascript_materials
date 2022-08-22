//setInterval(wykonuje rowniez po okreslonym czasie metode ale NON STOP pokie jej nie zartzymamy) i setTimeout(wykonuje cos TYLKO RAZ po pewnym czasie) roznia sie te metody od siebie 

//BARDZO WAZNE  ClearInterval - uzywamy do wsztrzymywania
let licznik = 0;

function wyswietlTekst() {
    licznik++;
    if(licznik === 8) {
        clearInterval(start)
    } 
    console.log("Testowa")
  
    
}

const start = setInterval(wyswietlTekst, 200);
//jesli uruchomimy to co 2s bedzie pojawial sie tekst Testowa, nastepnie zrobmy tak aby sie zatrzymywal