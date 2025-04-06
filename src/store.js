import {configureStore} from "@reduxjs/toolkit";
import productBasicdetailsReducer from "./utilities/slice/productbasicDetailsSlice.js"

export default configureStore({
    reducer: {
        productDetails: productBasicdetailsReducer
    }
})