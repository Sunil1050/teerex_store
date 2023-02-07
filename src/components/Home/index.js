import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchTerm } from "../../redux/products/productsSlice";
import Sidebar from "../Sidebar";
import ProductsSection from "../ProductsSection";
import './index.css'

const Home = () => {
    return (
        <div className="home-container" style={{ height: 100 + "vh" }}>
            <Sidebar />
            <div className="product-section-container">
                <ProductsSection />
            </div>

        </div>

    )
}
export default Home;