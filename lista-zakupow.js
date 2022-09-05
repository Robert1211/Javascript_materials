const addInput = document.getElementById("add_input");  //
const itemList = document.getElementById("items_list");//tworzymy zmienna gdzie pobieramy element w ktorym bedziemy przechowywac wpisana wartosc

function removeItem(e) {
    const removeParent = e.parentNode
    removeParent.remove();
}  //funcja zwiazana z usuwaniem elementu remove item


// e - skrot od event
//nasluchiwanie zdarzenia czy uzytkownik cokolwiek wpisal w input
//uzyjemy keyup - kiedy uzytkownik pusci przycisk to otzrymamy nasza wartosc
addInput.addEventListener("keyup", e => {
    const inputValue = addInput.value;
    if(e.keyCode === 13 && inputValue.length > 0){
    //jesli event bedzie wartosci keyCode === 13 to zzwroc na rzie console.loge ze "Item zostal dodany", musimy takze zweryfikowac czy wartosc dodana nie jest pusta to musimy zrobic &&
    // nastepnie musimy tworzyc nowy item i wrzucac go do naszej listy
            const newItem = document.createElement("li");  //stworzenie nowego elemntu li
            newItem.classList.add("items");          //dodanie classy do tego elementu
            newItem.innerText = inputValue;          //dodanie wartosci ktorej chce uzytkownik
           
            const delBtn = document.createElement("button"); //stworzenie przycisku button dzieki ktoremu mozemy usuwac
            delBtn.classList.add("del_btn");    //nastepnie musimy dodac do niego klassy aby go ostylowac
            delBtn.setAttribute("key", inputValue);   //ustawienie atrybutu za pomoca dwoch paramwtrow
            delBtn.innerText = "Usun"//usuwanie wartosci 
                                     
            delBtn.setAttribute("onClick", "removeItem(this)")//hej delete button chce ci przypisac atrybut onClick czyli nasluchiwanie zdarzenia, nastepnie uruchomic metode removeItem

            //teraz mozemy to polaczyc wszystko zrobic merge
            //musimy ten button wrzucic do li
            newItem.appendChild(delBtn);

            //wrzucic wszyssko do naszej listy ul ktora przechowuje wszystkie items
            itemList.appendChild(newItem)
            
            addInput.value = ""; //usuniecie wartosci z inputa ktora zostaje po wpisaniu wartosci
            
            //obluga przycisku buttona cancel, na samej gorze dodajemy funkcje zwiazana z usuwaniem elementu


        }
    })

