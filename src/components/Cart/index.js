import { useDispatch, useSelector } from "react-redux";
import { incrementCartProducts, decrementCartProducts, deleteCartProduct } from "../../redux/products/productsSlice"
import CartItem from "../CartItem";
const Cart = () => {
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.allProducts.cartList)

    const onIncrementCartProducts = (cartProductId, quantity) => {
        const updatedCartList = cartList.map(eachCartItem => {
            if (cartProductId === eachCartItem.id && eachCartItem.userQuantity < quantity) {
                const updatedQuantity = eachCartItem.userQuantity + 1
                return { ...eachCartItem, userQuantity: updatedQuantity }
            }
            return { ...eachCartItem, userQuantity: quantity }
        })
        dispatch(incrementCartProducts(updatedCartList))
    }

    const onDecrementCartProducts = (cartProductId) => {
        const updatedCartList = cartList.map(eachCartItem => {
            if (cartProductId === eachCartItem.id && eachCartItem.userQuantity > 0) {
                const updatedQuantity = eachCartItem.userQuantity - 1
                return { ...eachCartItem, userQuantity: updatedQuantity }
            }
            return eachCartItem
        })
        dispatch(decrementCartProducts(updatedCartList))
    }

    const onDeleteCartProduct = (cartProductId) => {
        const updatedCartList = cartList.filter(item => {
            return item.id !== cartProductId
        })
        dispatch(deleteCartProduct(updatedCartList))
    }

    return (
        <div className="p-5 mt-5" style={{ height: 100 + 'vh' }}>
            <h4 className="text-dark">Shopping Cart</h4>
            <div className="cart-list">
                {cartList.map(item => {
                    return <CartItem key={item.id} cartProduct={item} onIncrementCartProducts={onIncrementCartProducts} onDecrementCartProducts={onDecrementCartProducts} onDeleteCartProduct={onDeleteCartProduct} />
                })}
            </div>
        </div>
    )
}
export default Cart;