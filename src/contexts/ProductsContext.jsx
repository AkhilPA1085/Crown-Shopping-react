import { createContext, useState } from "react";
import PRODUCTS from "../Data/shop-data.json"

export const productContext = createContext({
    products:[]
})

export const ProductProvider = ({children})=>{
    const [products, setProducts] = useState(PRODUCTS)

    const value = {products,setProducts}
    
    return <productContext.Provider value={value}>{children}</productContext.Provider>
}

