// localStorage interface storage - ktory sluzy do przetwarzania roznych danych, jest to taki schowek na elementy ktore mozemy sobie przechowyac tam odczytywac je.
//dla przykladu w takim storge mozemy zapisywac wyniki w grze na naszej stronie internetowej
// dzieki takiemu zapisowi mozemy po ponownym otworzeniu naszej pregladarki internetowej te dane dalej tam beda, i bedziemy mogli caly czas te dane aktualizowac( jak zapis na dysk)

//Local Storage mozna znalezc za pomca narzedzia inspection, nastepnie klikajac w Application, nastepnie klikajac w Local Storage

//zapisywanie do localStorage
localStorage.setItem("title", "Super Gra  Komputerowa")
localStorage.setItem("score", "24")
localStorage.setItem("name","Steve")
localStorage.setItem("rank", "Silver")
//SetItem -znaczy ustaw wartosc
//key : nazwa schowka
//value : to co chcemy tam wrzucic
//key , value : musza byc zapisane jako string

//odczywywanie z lokalStorage
const titleGame = localStorage.getItem("title")
//tworzymy zmienna const ktora przechowuje tytul gry
console.log(titleGame);

//usuwanie elementu z localStorage
localStorage.removeItem("title");

//usuwanie elementow kilka z LocalStorage
if(confirm("Czy na pewno chcesz usunac dane")){
    localStorage.clear();
    alert("Udalo sie wyczyscic dane")
} else{
    alert("Nie udalo sie wyczyscic danych")
}
