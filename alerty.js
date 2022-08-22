//wyswietlenie alertu na stronie
const h2Element = document.querySelector("#band h2.w3-wide"); //wybranie elementu na ktory bedziemy klikac

//ALERT TYPU ALERT
//function wykonajAlert(){
//    alert("Hurra! udalo sie kliknac w naglowek")   //funkcja dzieki ktorej wysietli sie alert, zwykly alert funkcja informacyjna
//}

//kolejne zastosowanie alert, po kliknieciu pojawi sie komunikat ktory trzeba zaakceptowac albo odrzucic ALERT TYPU CONFIRM
// function wykonajAlert2(){
//     if(confirm("Akceptujesz regulamin")){
//         console.log("Uzytkownik zaakceptowal regulamin")
//     } else {
//         console.log("Uzytkownik odrzucil regulamin")
//     }

// }

//kolejny alert
//ALERT TYPU PROMPT mozemy wpisywac dane
function wykonajAlert3 (){
    const userName = prompt("Jak sie nazywasz?\nPodaj adres?", "Name");//jesli chcemy zapisac dwie liniki na alercie to stosujemy \n  czyli druga linia
    console.log("Uzytkownik nazywa sie " + userName)
}


h2Element.addEventListener("click", wykonajAlert3);    //oklesla jakie zdarzenie musi nastapic aby wykonala sie funkcja


//1. Wybrac element na ktory klikamy, czyli okreslic jego dokladna siezke dostepu
//2. Zbudowac funkcje ktora bedzie albo alertem albo confirm
//3. Nastepnie zmienna stworzona przy lokalizacji bedzie nasluchiwac zdarzenia za pomoca AddLintenere