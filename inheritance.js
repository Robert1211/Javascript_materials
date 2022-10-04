// powiedziec jednej klasieA, ze chce sie skopiowac wszystkie metody z innej klasy do klasyA
class DrugaKlasa {
    druga(){        //metoda klasy
        return "Druga klasa"   //co klasa zwraca
    }
}
class PierwszaKlasa extends DrugaKlasa {
    pierwsza(){        //metoda klasy
        return "Pierwsza klasa"   //co klasa zwraca
    }
}



//stworzenie dwoch obiektow
const obiekt1 = new PierwszaKlasa();
const obiekt2 = new DrugaKlasa();

console.log(obiekt1.druga())


//mozna powiedziec hej javascript chcemy aby Pierwszaklasa posiadal wszystkie metody co posiada Drugaklasa
//do rozrzeszenia klasy sluzy slowko extends