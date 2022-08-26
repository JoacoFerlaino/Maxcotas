
//cargamos el CART de LS
//hacemos funcion con if para chequear que existan datos en el array

function get_cart_items(){
    if(localStorage.getItem('cart_items')){
        let cart = JSON.parse(localStorage.getItem("CART"));
        return cart;
    }else{
        console.log("No hay entradas en el Local Storage")
    }
}
let cart = get_cart_items();