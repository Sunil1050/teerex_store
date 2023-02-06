import { useDispatch, useSelector } from "react-redux";
import { getSearchTerm } from "../../redux/products/productsSlice";
import Sidebar from "../Sidebar";
import ProductsSection from "../ProductsSection";
import { GrFilter } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import './index.css'

const Home = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.allProducts.searchTerm)
    const onSearch = (event) => {
        dispatch(getSearchTerm(event.target.value))
    }

    return (
        <div className="home-container" style={{ height: 100 + "vh" }}>
            <div className="text-center mb-3 d-sm-block d-md-none">
                <input type="input" placeholder="Search for products.." className="filter-search-input" onChange={onSearch} value={searchTerm} />
                <button type="button" className="filter-buttons">
                    <GoSearch />
                </button>
                <button type="button" className="filter-buttons">
                    <GrFilter />
                </button>
            </div>
            <Sidebar />
            <div className="product-section-container">
                <ProductsSection />
            </div>

        </div>

    )
}
export default Home;