import React, { createContext, useState } from "react";
import all_product from '../components/assests/all_product';

export const ShopContext = createContext(null);

const getDefaultcart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider =(props) =>  {

    const [cartItems,setcartItems]= useState (getDefaultcart());

   

    const addToCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
    }

    const getTotalcartamount = ()=>{
      
        let Totalamount =0;
        for(const item in  cartItems)
        {
            
            if(cartItems[item]>0)
            {
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                Totalamount += iteminfo.new_price*cartItems[item];
               
            }
            
            
        }
        return Totalamount;
    }
    
    const getTotalcartitems = ()=>{
        let totalitem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalitem+= cartItems[item];
            }
        }
        return totalitem;
    }

    const contextValue = { getTotalcartitems, getTotalcartamount, all_product ,cartItems, addToCart, removeFromCart};
    return(<ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
    )
}
export default ShopContextProvider; 