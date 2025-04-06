import {createSlice} from "@reduxjs/toolkit";

export const productBasicDetails = createSlice({
    name: 'ProductbasicDetails',
    initialState: {
        productBasicDetails: {},
    },
    reducers: {
        storeProductBasicDetails: (state,action) => {

        }
    }
})

export default productBasicDetails.reducer;