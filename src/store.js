import {configureStore} from "@reduxjs/toolkit";
import productbasicDetailsReducer from "./utilities/slice/productbasicDetailsSlice.js"
export default configureStore({
    reducer: {
        productDetails: productbasicDetailsReducer
    }
})