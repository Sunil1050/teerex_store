import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoSearch } from "react-icons/go";
import { fetchAsyncProducts, getSearchTerm, getCartList } from "../../redux/products/productsSlice"
import './index.css'
import ProductDetail from "../ProductDetail";

const ProductsSection = () => {
    const products = useSelector((state) => state.allProducts.products)
    let cartList = useSelector((state) => state.allProducts.cartList)
    const { color, gender, type, price } = useSelector((state) => state.allProducts.filterList)
    const searchTerm = useSelector((state) => state.allProducts.searchTerm)
    const dispatch = useDispatch()

    const onSearch = (event) => {
        dispatch(getSearchTerm(event.target.value))
    }

    const onAddToCart = (product) => {
        const productObject = cartList.find(
            eachCartItem => eachCartItem.id === product.id,
        )

        if (productObject) {
            const updatedCartList = cartList.map(eachCartItem => {
                if (productObject.id === eachCartItem.id) {
                    const updatedQuantity = eachCartItem.userQuantity + product.userQuantity

                    return { ...eachCartItem, userQuantity: updatedQuantity }
                }

                return eachCartItem
            })
            console.log("Cart list: ", cartList);
            dispatch(getCartList(updatedCartList))
        }
        else {
            console.log("Cart list in else block: ", cartList);
            const updatedCartList = [...cartList, product]
            dispatch(getCartList(updatedCartList))
        }
    }

    useEffect(() => {
        dispatch(fetchAsyncProducts())
    }, [dispatch])


    const filteredProducts = products.filter(item => {
        return (
            (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.type.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (color === '' || item.color.toLowerCase().includes(color.toLowerCase())) &&
            (gender === '' || item.gender.toLowerCase() === gender.toLowerCase()) &&
            (type === '' || item.type.toLowerCase().includes(type.toLowerCase())) &&
            (price === '' || (item.price >= price[0] && item.price <= price[1]))
        )
    })

    return (
        <div>
            <div className="text-center mb-3 d-md-block d-none">
                <input type="input" placeholder="Search for products.." className="search-input" onChange={onSearch} value={searchTerm} />
                <button type="button" className="search-button">
                    <GoSearch />
                </button>
            </div>
            <div className="products-display">
                {filteredProducts.map(item => {
                    return <ProductDetail key={item.id} eachProduct={item} onAddToCart={onAddToCart} />
                })}
            </div>
        </div>
    )
}

const priceRange = (range, price) => {
    const a = range.split("-").map(item => parseInt(item))
    console.log('Range: ', a)
    console.log('Price range: ', price > a[0] && price < a[1])
    return price > a[0] && price < a[1]
}
export default ProductsSection;