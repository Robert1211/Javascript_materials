//Tworzenie nowego elemntu np div

//krok pierwszy najperw takie element musimy gdzies przechowywac
// aby przechowac nowy element musimy znalezc rodzica elementu

// nalezy pobrac ten dokument np.form 
const form = document.querySelector("form")
const boxBand = document.querySelector("div#band")

const divElement = document.createElement("div");  //stworzenie elementu div
divElement.style.width = "100px";
divElement.style.height = "100px";
divElement.style.backgroundColor = "red";


const p = document.createElement("p");
p.innerText = "Nowy super paragraf!!!!!!!"  //polecenie aby dodac text do p

console.log(divElement);
console.log(p);

//wstawianie naszego elemntu do HTML czyli do naszego object model
//czyli musimy sie odwolac do naszego rodzica
form.appendChild(divElement)  //czyli rodzicu chcem dodac nowy element do ciebie
boxBand.appendChild(p)        //appendChild za pomoca tego elementy sa dodawane zawsze na koncu
