const addInput = document.getElementById("add_input")
// e - skrot od event

addInput.addEventListener("keyup", e => {
    const inputValue = addInput.value;
    if(e.keyCode === 13){
        console.log("Item zostal dodany")
    }

})