//addEventListener - To metoda dzieki ktorej mozemy wywolac jakas dowolna funkcjem, w momencie kiedy zostanie wykryte jakies konnkretne(specjalne) zdarzenie na naszej stronie internetowej(app) - na przyklad klikniecie przycisku, przewiniecie strony, najechanie kursorem czy wpisanie literki w pole tekstowe - jest nastepnie wyzwalana jakas funkcja.

const h2Band = document.querySelector("div#band h2");
const p = document.querySelector("p.w3-justify");
const buyTicketBtn = document.querySelector("#buy-ticket");
const formContact = document.querySelector("form");
const link = document.querySelector(`div.w3-top div.w3-bar a[href="#contact"]`);
const inputName =document.querySelector(`input[name="Name"]`);
//musimy powiedziec javaScriptowy aby nasluchiwal klikniecia tylko na tym elemencie - javaScript musi wiedzidec o jaki element nam chodzi

//zdarzenie klikniecie

function showText(){
    console.log("Kliknelem w naglowek z funkcji")
}
h2Band.addEventListener("click", showText)

//slowko this
// p.addEventListener("click", function(){
//     console.log(p)
// })

//p.addEventListener("click", () => {    //jesli uzyjemy funcji narrow to addEventListener nie zadziala tylko bedzie wyzej brany element jesli uzyjemy funkcji function to bedzie widziala ten nasz element p
//    console.log(this)
//})

//Event - ten parametr kazdo razowo przekaze nam dodatkowy obiekt z informacja ktora jest zwiazana z tym zdarzeniem
// e to event
// p.addEventListener("click", e => {
//     if(e.clientX > 500){
//         console.log("Wartosc jest wieksza niz 500 i wynosi:" + e.clientX)
//     } else{
//         console.log("Wartosc jest mniejsza niz 500 i wynosi:" + e.clientX)
//     }
// })

//zdarzenie mouseover i mouseout

//mouseover jset to zdarzenie ktore wykonuje sie wtedy kiedy dany uzytkownik najedzie myszka na ten przycisk
 buyTicketBtn.addEventListener("mouseover", () => {
     console.log("zadzialo sie")
 })
//mouseout
buyTicketBtn.addEventListener("mouseout", e => {
    console.log(e)
})

//PreventDfault - to dziala tak ze odwolujemy sie na poczatku do naszego formularza
// bedzxiemy chcieli nasluchwac kiedy rozpocznie sie akcja submit
//e.preventDefualt  - metoda zatrzymania np wysylania formularza, to nam BLOKUJE METODE
formContact.addEventListener("submit", e => {
    e.preventDefault()
    console.log("TEST")
})

// czyli w tym przypadku miala byc spowodowana akcja przekierowania, ktora zostaje przerwana i klikajac na "'CONTACT" zostaje zablokowana(wstrzymana) wszelka akcja
link.addEventListener("click", event => {
    event.preventDefault();
    console.log("robert")
})

//manipulacje textem danego inputa - nasluchiwanie co dokladnie uzytkownuik wpisuje w inputa, i na biezaco wykonywac jakies akcje albo walidacje ktore sa nam potrzebne
//keydown, keyup - moitorowanie czy dany klawisz zostal wcisniety w inpucie

//keyup
inputName.addEventListener("keydown", e => {
   // console.log("Uruchomiono zdarzenie KEYDOWN!!!!")
   console.log(e.key)
})

//keydown
inputName.addEventListener("keyup", () => {
    console.log("Uruchomiono zdarzenie KEYUP!!!!")
})

//Scroll - scrolujac dana strone badz aplikacje - odwolujemy sie do globalnego elementu window
//mozemy zobaczyc takze event tego scrolla
window.addEventListener("scroll", e => {
   // console.log(window.scrollY)  //to zdarzenie jest przydatne w momencie kiedy czasami chcemy zby naprzyklad menu zmienialo swoja pozycje podczas scrollowania
})

//wykonanie zdarzenia po wczytaniu sie w pelni naszego DOM
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM wczytal sie caly poprawnie")
})