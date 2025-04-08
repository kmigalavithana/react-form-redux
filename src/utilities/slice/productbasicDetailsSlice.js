import {createSlice} from "@reduxjs/toolkit";


const productbasicDetailsSlice=createSlice({
    name: "productbasicDetails",
    initialState: {
        productBasicdetails: {

        }
    },
    reducers: {
        storeproductBasicdetails: (state, action) => {
            console.log(action)
            state.productBasicdetails = action.payload;


        }
    }
})

export const {storeproductBasicdetails}= productbasicDetailsSlice.actions
export default productbasicDetailsSlice.reducer