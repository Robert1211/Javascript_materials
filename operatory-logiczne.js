const imie = "Kamil";
const samochod = "BMW"


//logiczne  "i"
if(imie == "Kamil" && samochod == "BMW"){     //operatory logiczne && czyli wez imie Kamil oraz tagze samochod o nazwie BMW i wysietl slowo test
    console.log("test");
    }


//logiczne "lub"  czyli conajmniej jedna strona jest spelniona wtedy wysietl slowo test
if(imie == "Kamil" || samochod == "BMW"){ 
    console.log("test");
    }

// logiczne "nie" czyli negacja  "!" czyli negacja odwraca wszystko

let isOpen = true;
isOpen = !isOpen;
console.log(isOpen)