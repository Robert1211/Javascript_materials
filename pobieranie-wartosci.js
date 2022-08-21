
//pobieranie wartosci z elementow
const p = document.querySelector("p.w3-justify");
const h2Band = document.querySelector("div#band h2");
const pWeLoveMusic = document.querySelector(" p.w3-opacity");
const img = document.querySelector("img.w3-image");   //chcemy pobrac wartosc src
const inputName = document.querySelector(`input[name]`)
//zeby pobrac wartosc z tego elementu wykorzystuje sie metode innerText
const value = p.innerText;

//console.log(value);
//console.log(h2Band.innerText)

//innerHTML jest roznica miedzy innerText(pobiera tylko text) a innerHTML(pobiera rowniez kod HTML)
//console.log(pWeLoveMusic.innerText)
//console.log(pWeLoveMusic.innerHTML)
//console.log(img.getAttribute("src"));

//pobieranie styli CSS
//console.log(img.style.width)
//pobieranie tekstow z dynamicznych elementow - input
//console.log(inputName.value)

inputName.addEventListener("keyup", () => {
    console.log(inputName.value)
})

