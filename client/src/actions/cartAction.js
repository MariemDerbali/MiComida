export const addToCart = (repas, quantite) => (dispatch, getState) => {

    var cartItem = {
        nom: repas.nom,
        _id: repas._id,
        image: repas.image,
        quantite: Number(quantite),
        Lesprix: repas.Lesprix,
        prix: repas.Lesprix[0] * quantite
    }

    if (cartItem.quantite > 10) {
        alert('vous ne pouvez pas ajouter plus de 10 quantités')
    }
    else {
        if (cartItem.quantite < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: repas })
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }

    }




    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (repas) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: repas })
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}