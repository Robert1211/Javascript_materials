//Klsay sa to specjalne funkcje z ktorych mozemy tworzyc rozne obiekty, obiekty utworzone na podstawie takiej klasy nazywamy INSTANCJAMI, klasy oprocz tego ze sa zainstancjowane w naszym kodzie moga posiadac rozne METODY, ktore mozemy wywolywac dowolnie na kazdym etapie kodu. 
//Klasy oprocz metod posiadaja swoj KONSTRUKTOR
//KLASA MA METODE I KONSTRUKTORA
//Klasa to taki podzial klasyfikacja, roznych rzeczy elementow ktorych nas otaczaja
//KAZDA KLASA ZACZYNA SIE OD SLOWKA RZECZOWEGO CLASS
//Kazda klasa posiada funkcje ktora jest konstruktor
class Samochod {
    constructor(marka, model, rok, kolor){
        this.markaSamochodu = marka;
        this.modelSamochodu = model;
        this.rokSamochodu = rok;
        this.kolorSamochodu = kolor;
        //mozemy przypisywac naszej klasie rozne wlasciwosci
    }
    //mozemy takze tworzyc metode dla klas
    przywitajSie(){
        console.log(`Jestem samochodem ${this.markaSamochodu} modelu: ${this.modelSamochodu} jestem z rocznika ${this.rokSamochodu} posiadam kolor ${this.kolorSamochodu}`)
    }
    //mozemy sobie robic rozne metody
    pokazRocznik(){
        console.log(`Rocznik samochodu to: ${this.rokSamochodu}`)
    }
}

const fiat = new Samochod("Fiat", "Punto", 2010, "niebieski");  //stworzenie instancji nowego obiektu
const ford = new Samochod("Ford", "Mondeo", 1999, "zielony")  //stworzenie nowej isntancji w oparciu o klase samochod
fiat.przywitajSie();
fiat.pokazRocznik();   //odwolujemy sie do obiekty ktory ma zwrocic rocznik

ford.przywitajSie();
ford.pokazRocznik();