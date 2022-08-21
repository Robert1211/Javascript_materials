//Pierwszy sposob pobierania elementow  -  queryselector
const h2Band = document.querySelector("div#band h2.w3-wide");
const bandBox = document.querySelector("div#band");
const footer = document.querySelector("footer>i:nth-child(3)");
const div = document.querySelector("div") //pobierze tylko pierwszego diva z 86
console.log(h2Band);
console.log(bandBox);
console.log(footer);
console.log(div)
//.querySelection jest uniwersalna metoda, mozemy odwolywac sie do identyfikatorow i class, dlugich lokalizacji,
// czasami element nie ma klasy ani indyfikatora, czasami element ma atrybut po, ktorym mozemy sie odwolac
//chcemy znalezc atrybut ktory ma w sobie "Nowy York" - to musimy sie odwolac konkretnie do atrybutu np.  img[alt="New York"]

//drugi sposob pobierania elementow - querySelectorAll  - sprawdza sie tylko w niektorych przypadkach
//pozwala pobrac lokalizatory, mozemy pobierac kilka elementow
const div2 = document.querySelectorAll("div")
console.log(div2)

//Trzeci sposob pobierania elementow - getElementByClassName
//pobierania elementow po samej klasie, czyli jeet tylko do klas!!!
const specialBtn = document.getElementsByClassName("special")
console.log(specialBtn)

//Czwarty sposob pobierania elementow - getElementById
//pobieranie elemntow tylko z pomoca Id
const navDemoElement = document.getElementById("navDemo")
console.log(navDemoElement)

//Piaty sposob pobierania elementu po znaczniku - getElementByTagName
const imgElement = document.getElementsByTagName("img")
console.log(imgElement)