import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import './index.css'

const Header = () => {
    const cartList = useSelector((state) => state.allProducts.cartList)

    return (
        <div className="header fixed-top">
            <div className="d-flex flex-row justify-content-between">
                <Link to="/">
                    <h1 className="App-logo">TeeRex Store</h1>
                </Link>
                <div className="d-flex flex-row">
                    <p className="header-products d-none d-md-block">Products</p>
                    <Link to="/cart">
                        <button type="button" className="cart-button">
                            <i className="fa" style={{ fontSize: 24 + "px" }}>&#xf07a;</i>
                            <span> {cartList.length > 0 && cartList.length} </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default Header;