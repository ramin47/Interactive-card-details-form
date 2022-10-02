let getCardName = document.getElementById("input-name")
let getMessageName = document.getElementById("parag-message-name")

let getBotton = document.getElementById("sub")



getBotton.addEventListener("click", function() {
    event.preventDefault()
    let letters = /^[A-Za-z]+$/;
   if (getCardName.value === "") {
    getMessageName.textContent = "You did not enter your name!"
   } else if (getCardName.value.match(letters)) {
    getMessageName.textContent = "Numbers and symbols are not allowed!"
   }
})