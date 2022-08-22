//sluzy do wykonania pewnej okreslonej czynnosci, wywolac okreslona metode po na przyklad kliknieciu po pewnym czasie w przysisk

// function wysietlTekst(){
//     console.log("Robert")
// }
// setTimeout(wysietlTekst, 7000)// hej javascrip chcem aby ta metoda wykonala sie przy pomocy setTimeout  
//1 secunda to 1000ms


//po kliknieciu w nasz napis THE BAND, bedzie losowo wybieral jakis inny kolor i go zmienial

const h2Element = document.querySelector("#band h2");  //wybieramy lokalizacje elementu na ktory bedziemy klikac
const colors = ["blue", "red", "yellow", "green", "pink"]

function changeColor(){
    const randomValue = Math.floor(Math.random() * ((colors.length -1) - 0)) + 0;  //tworzymy zmienna ktora bedzie przechowywac zaokraglona i losowa wartosc z tablicy colors
    h2Element.style.color = colors[randomValue] // otrzymanej wartosci nadajemy nowe style losowe z tablicy
    h2Element.style.fontSize = "130px"   // 
  
}


h2Element.addEventListener("click", function(){
    setTimeout(changeColor, 3000);     //tworzymy funkje ktora bedzie nasluchiwala naszego dzialania
})
