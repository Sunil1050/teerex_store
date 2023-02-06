import { configureStore} from "@reduxjs/toolkit";
import productReducer from "./products/productsSlice"

const store = configureStore({
    reducer: {
        allProducts: productReducer
    }
})

export default store;