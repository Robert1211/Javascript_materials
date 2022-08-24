//dodawanie klasy, atrybutu z poziomy js

const boxBand = document.querySelector("div#band")

const p = document.createElement("p")
const link = document.createElement("a")

p.innerText = "Nowy super paragraf"
link.innerText = "przekierowanie do Google.com"

// utworzenie klasy
p.classList.add("activ")
p.classList.add("activ2")   //utworzenie nowej klasy activ2
p.classList.remove("activ2")    //mozemy takze usuwac klasy

link.setAttribute("href", "https://google.com")     // dodawanie atrybuitu do linku czyli dodanie hrew
link.removeAttribute("href")      //rownie dobrze mozemy takze usunac atrybut

link.id = "super-link"   //dodawanie indtyfikatora



boxBand.appendChild(p)
boxBand.appendChild(link)          