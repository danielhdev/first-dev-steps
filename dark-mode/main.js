const inputElement = document.querySelector(".input");
const bodyColor = document.querySelector("body");

inputElement.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()

function updateBody(){
    if(inputElement.checked){
bodyColor.style.background = "black"
    } else {
        bodyColor.style.background = "white"
    } 
}

inputElement.addEventListener("input", ()=>{
    updateBody()
    updateLocalStorage()
} )

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}