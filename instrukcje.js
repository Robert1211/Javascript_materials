//instrukcje warunkowe
const plec = "robot"; //tu moze byc: menszczyzna, kobieta, robot
const wiek = 35;
const zwierzeta = "kot"
// if(plec == "kobieta") {
//     console.log("Hej wiew, ze jestes kobieta")
// } else if(plec == "robot"){
//     console.log("hej wiem, ze jestes robotem")
// }
// else {
//     console.log("hej wiemm, ze jestes man")
// }
// wiek > 30 i osoba bedzie posiadala zwierze pies, uzycie operatorow 
//opertor &&(oznacza to kolejny warunek OBA WARUNKI MUSZA BYC SPELNIONE)

// if(wiek > 30 && zwierzeta == "pies"){
//     console.log("warunek zostal spelniony")
// } else {
//     console.log("warunek nie zostal spelniony")
// }

// opertor typu || czyli oznacza jeden z warunkow jak nie jeden to drugi
if(wiek > 33 || zwierzeta == "pies"){
    console.log("warunek zostal spelniony")
} else {
    console.log("Warunek nie zostal spelniony")
}
