//za pomoca jezyka javaScript mozemy wplywac na wlasciwosci css konkretnych elementow, ktore znajduja sie na stronie, na przyklad po kliknieciu w jakis konkretny przycisk zmien to :zmien kolor, background, usun dany obrazek, zaokraglil rogi

//zmiana koloru "BAND" po kliknieciu na kolor czerwony
const h2Element = document.querySelector("div#band h2.w3-wide")
const navbar = document.querySelector("div.w3-bar");

let = switchVariable = false;



h2Element.addEventListener("click", function(){
   //zmiana koloru h2 na czerwony zmiana wlasciwosci
   //chcemy aby po kolejnym kliknieciu wracalo wszystko do poprzedniej wersji 
   if(switchVariable === false){                      //na poczatku jest sprawdzany warunek czy nasz switchVariable jest rowny fals, wiec ustawia te wlasciwosci jak caly blok przeleci to zalacza sie negacja wartosc boolinowska, czyli uzytkownik klika drugi raz  i sprawdza wartosc czy jest false or true(czyli moze byc negacja) i wteddy robi sie drugi else czyli false i true na przemian
    this.style.color = "red";
   // this.style.backgroundColor = "blue";//
    this.style.fontSize = "56px";
    
   } else {
        this.style.color = "black";
        this.style.fontSize = "22px"
   }
   switchVariable = !switchVariable;

    //NIE ZALECANY SPOSOB
    // inny sposob zmiany styli mozna napisac w stringu
    // UWAGA taki zapis kasuje porzednie zapisy powoduje dzialanie ostatniego zapisu,
    // poprzedni sposob uzywania javaScriptu powoduje ze style sa dodawane
    
    //this.style = "color: yellow";
    //this.style = "text-decoration: underline";//ten zapis bedzie tylko dzialal
})

//chcemy aby nasz navbar ktory sie przesuwa razem ze strona, w pewnym momencie zmienil kolor na inny
window.addEventListener("scroll", () => {
    if(window.scrollY > 350){
        navbar.style.backgroundColor = "blue"
    } else {
        navbar.style.backgroundColor = "orange"
    }
})