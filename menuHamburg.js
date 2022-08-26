const bar = document.getElementById("bar"); //la const del menu hamburguesa
const nav = document.getElementById("navbar"); //la const del navbar
const close = document.getElementById("close"); //para cerrar el menu


//SI se hace click en el objeto bar (hamburugesa), lo que sucedera es que se corre la funcion
//y se agrega el "active" a la const nav. El active esta en css y hace que se muestre el navbar
if (bar){
    bar.addEventListener("click",() =>{
        nav.classList.add("active")
    })
}

if(close){
    close.addEventListener("click",() =>{
        nav.classList.remove("active")
    })
}


//total items in cart. Primero traemos el LS donde esta el array de compra
//Luego le pegamos al div del carro el valor traido de LS 
let cartGlobal= JSON.parse(localStorage.getItem("totalItems"));

const totalItemsInCartGlobal = document.querySelector('.total-items-in-cart').innerHTML = cartGlobal

