import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        addTowishList:(state,action)=>{
            state.wishlist.push(action.payload)
            
        },
        removeWishlist:(state,action)=>{
           state.wishlist=state.wishlist.filter(item=> item.id!=action.payload)
            
        }
    }
})

export const {addTowishList,removeWishlist}= wishlistSlice.actions

export default wishlistSlice.reducer