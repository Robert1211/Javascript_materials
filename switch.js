const stanSwiatla = null; //true albo fals

switch(stanSwiatla) {
    case true:
        console.log(`Swiatlo zostalo wlaczone`)
        break;
    case false:
        console.log(`Swiatlo zostalo zgaszone`)
        break;
    default:
        console.log(`Obecnie jest awaria!!!!!!!!!!!`)
}

//inny przyklad


const imie = `Alicja`

switch(imie) {
    case `Alicja`:
        console.log("imie to " + imie)
        break;
    default:
        console.log("Takiego imienia nie mamy w bazie")
        break;
}
 