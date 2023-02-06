import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../apis/productApi";

const initialState = {
    products: [],
    searchTerm: "",
    filterList: {
        color: "",
        gender: "",
        type: "",
        price: ""
    },
    cartList: []
};

export const fetchAsyncProducts = createAsyncThunk(
    "products/fetchAsyncProducts",
    async () => {
        const response = await productApi.get("/coding-problems/shopping-cart/catalogue.json");
        return response.data;
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getSearchTerm: (state, { payload }) => {
            state.searchTerm = payload
        },
        changeColor: (state, { payload }) => {
            state.filterList.color = payload
        },
        changeGender: (state, { payload }) => {
            state.filterList.gender = payload
        },
        changeType: (state, { payload }) => {
            state.filterList.type = payload
        },
        changePrice: (state, { payload }) => {
            state.filterList.price = payload
        },
        getCartList: (state, { payload }) => {
            state.cartList = payload
        },
        incrementCartProducts: (state, { payload }) => {
            state.cartList = payload
        },
        decrementCartProducts: (state, { payload }) => {
            state.cartList = payload
        },
        deleteCartProduct: (state, {payload}) => {
            state.cartList = payload;
        }
    },
    extraReducers: {
        [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, products: payload };
        }
    },
});

export const { getSearchTerm, changeColor, changeGender, changePrice, changeType, getCartList, incrementCartProducts, decrementCartProducts, deleteCartProduct} = productSlice.actions;
export default productSlice.reducer;