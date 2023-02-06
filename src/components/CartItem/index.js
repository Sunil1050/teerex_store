import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"

const CartItem = ({ cartProduct, onIncrementCartProducts, onDecrementCartProducts, onDeleteCartProduct }) => {
    // const cartList = useSelector((state) => state.allProducts.cartList);
    const { imageURL, name, price, quantity, id, userQuantity } = cartProduct
    const onIncrement = () => {
        if (userQuantity !== quantity) {
            onIncrementCartProducts(id, quantity)
        }
        else {
            toast.error('Max. items limit exceeded !', {
                position: toast.POSITION.TOP_RIGHT
            });
            // toast("Max. items limit exceeded");
        }
    }

    const onDecrement = () => {
        onDecrementCartProducts(id)
    }

    const onDelete = () => {
        onDeleteCartProduct(id)
    }

    return (
        <div className="d-flex flex-row justify-content-around align-items-center shadow cart-item">
            <img src={imageURL} alt={name} className="product-img" />
            <div className="text-center">
                <h4>{name}</h4>
                <h5>{userQuantity * price}</h5>
            </div>
            <div className="d-flex">
                <button className="quantity-button" onClick={onDecrement}>
                    -
                </button>
                <h5 className="ml-3 mr-3">{userQuantity}</h5>
                <button className="quantity-button" onClick={onIncrement}>+</button>
                <ToastContainer
                    autoClose={3000}
                    hideProgressBar={true}
                />
            </div>
            <button className="btn btn-outline-secondary" onClick={onDelete}>Delete</button>
        </div>
    )
}
export default CartItem