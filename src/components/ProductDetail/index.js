import { useSelector } from "react-redux"
import "./index.css"

const ProductDetail = ({ eachProduct, onAddToCart }) => {
    const userQuantity = 1;
    const { imageURL, name, price, id } = eachProduct

    const onClickCartBtn = () => {
        onAddToCart({...eachProduct, userQuantity})
    }

    return (
        <div className="card m-2" style={{ width: 18 + "rem" }}>
            <img className="card-img-top" src={imageURL} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <p className="price">{price}</p>
                    <button type="button" className="add-cart-button" onClick={onClickCartBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail