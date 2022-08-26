/*se activa con el onkeyvalue del html
primero obtenemos los valores del usuario y los guardamos en searchbox
segundo comparamos lo ingresado con los productos (pro-container)
tercero accedemos a los productos con "pro"
cuarto comparamos directamente con el nombre de los productos */
// const search = () =>{
//     const searchbox = document.getElementById("searchInp").value.toUpperCase();
//     const storeitems= document.querySelector(".pro-container")
//     const productSearch= document.querySelectorAll(".pro")
//     const pname=storeitems.querySelectorAll(".pname")


/*Con este Loop lo que haremos es controlar las letras si estan dentro de los nombres
y si se cumplen los dos IFS se continua con el loop*/
//     for (var i=0; i <pname.length; i++){
//         let match = productSearch[i].querySelector(".pname")[0];

//         if(match){
//             let textvalue=match.textContent || match.innerHTML

//             if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//                 product[i].style.diplay ="";  
//             }else{
//                 product[i].style.diplay ="none";
//             }
//         }

       

//     }
// }

const d=document;

function searchFilter(input, selector){
d.addEventListener("keyup", e =>{
    if(e.target.matches(input)){
        //console.log(e.key)
        //console.log(e.target.value)
        d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value)
            ?el.classlist.remove("filter")
            :el.classlist.add("filter")
        )
    }
})
}

searchFilter("searchInp", "pname")