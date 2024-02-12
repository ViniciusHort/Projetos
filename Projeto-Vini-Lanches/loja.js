
function ready() {


const AddToCart =   document.getElementsByClassName("btn btn-sm btn-outline-secondary")
console.log(AddToCart)
    for (var i = 0; i < AddToCart.length; i++) {
        AddToCart[i].addEventListener("click", addProductToCart)
    }
}

//Adicionar ao Carrinho

function addProductToCart(event){
    const button = event.target
    console.log(button)
}

//Remover Produto

const removeProductButton = document.getElementsByClassName("btn btn-danger")
console.log(removeProductButton)
for (var i = 0; i < removeProductButton.length; i++) {
    removeProductButton[i].addEventListener("click", function(event){
        event.target.parentElement.parentElement.remove()
    })
}