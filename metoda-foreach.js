const imiona = ["Alicja", "Tomasz", "Agnieszka", "Beata","Rafal", "Klaudiusz"]
const liczby = [24, 63, 41, 68, 85];
const pustaTablica = []

//bardzo podobne do metody map(), ma tylko jedna istonta roznice
//metoda forEach zwroc nam wartosc pokoleji z tablicy, czyli cos z nia robi i zwraca z powrote 
  

// imiona.forEach(imie => {
//     console.log(imie)
// })


//jesli tablica jest pusta to methoda map zwroci nam pusta tablice
console.log(
pustaTablica.map(item => {
    return item;
})
)

//jesli tablica jest pusta to methoda forEach zwroci nam "undefined"
console.log(
    pustaTablica.forEach(item => {
        return item
    })
)