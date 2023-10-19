import CartContext from "./cart-context";


const CartProvider = props => {
    const addItemFromCartHandler = item => {};
    const removeItemFromCartHandler = item => {};
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;