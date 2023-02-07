import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import "./index.css"

const CartItem = ({ cartProduct, onIncrementCartProducts, onDecrementCartProducts, onDeleteCartProduct }) => {
    const { imageURL, name, price, quantity, id, userQuantity } = cartProduct
    const onIncrement = () => {
        if (userQuantity !== quantity) {
            onIncrementCartProducts(id, quantity)
        }
        else {
            toast.error('Max. items limit exceeded !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const onDecrement = () => {
        onDecrementCartProducts(id)
    }

    const onDelete = () => {
        onDeleteCartProduct(id)
    }

    return (
        <div className="cart-item">
            <img className="cart-product-image" src={imageURL} alt={name} />
            <div className="cart-item-details-container">
                <div className="cart-product-title-brand-container">
                    <p className="cart-product-title">{name}</p>
                    <p className="cart-product-brand">{userQuantity * price}</p>
                </div>
                <div className="cart-quantity-container">
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onDecrement}
                    >
                        <BsDashSquare color="#52606D" size={16} />
                    </button>
                    <p className="cart-quantity">{userQuantity}</p>
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onIncrement}
                    >
                        <BsPlusSquare color="#52606D" size={16} />
                    </button>
                    <ToastContainer
                        autoClose={3000}
                        hideProgressBar={true}
                    />
                </div>
                <div className="total-price-remove-container">
                    <p className="cart-total-price">Rs {price}/-</p>
                    <button
                        className="remove-button"
                        type="button"
                        onClick={onDelete}
                    >
                        Remove
                    </button>
                </div>
            </div>
            <button
                className="delete-button"
                type="button"
                onClick={onDelete}
            >
                <AiFillCloseCircle color="#616E7C" size={20} />
            </button>
        </div>
    )
}
export default CartItem