import { useSelector } from "react-redux";
import "./index.css"

const CartSummary = () => {
    const cartList = useSelector((state) => state.allProducts.cartList)
    let totalPrice;
    if (cartList.length > 0) {
        totalPrice = cartList.map(item => {
            return item.price * item.userQuantity
        }).reduce((a, b) => a + b)
    }

    return (
        <div className="d-flex flex-row justify-content-end">
            <div>
                <h1 className="order-total-value">Order Total:
                    <span className="order-total-label">Rs. {totalPrice}/-</span>
                </h1>
                <p className="total-items">{cartList.length} items in cart</p>
                <button className="btn btn-primary">Checkout</button>
            </div>
        </div>

    )
}
export default CartSummary;