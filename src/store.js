import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productbasicDetailsReducer from "./utilities/slice/productbasicDetailsSlice.js"
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['product']
}

const rootReducer = combineReducers({
    product: productbasicDetailsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=configureStore({
    reducer: {
        productDetails: persistedReducer
    }
})

const persistor = persistStore(store)

export {store, persistor}