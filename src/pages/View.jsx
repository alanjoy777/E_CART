import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import wishlistSlice, { addTowishList } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function View() {


const {id} = useParams()

const {loading}= useSelector((state)=> state.productSlice)

const [product,setProduct]=useState({})

useEffect(()=>{

  const products =JSON.parse(localStorage.getItem("products"))
   
  setProduct(products.find(product => product.id==id))  

},[])
  
const dispatch= useDispatch()
const {wishlist} = useSelector(state=> state.wishlistSlice)




const handlewishlist =(product)=>{
  const existingProduct = wishlist.find(item=>item.id==product.id)
  if(existingProduct){
    alert("already exists")
  }else{
    dispatch(addTowishList(product))
  }
} 

  return (
    <div className='container'>
      
       <div className='container row mt-5'>
      
  
      <div className="col-lg-4">
         <img style={{width:"100%",height:"400px"}} src={product.thumbnail} alt="" />
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-6">
        <p>Pid:019182</p>
        <h1>{product.title}</h1>
        <h5 className='fw-bolder'>Price: <span style={{color:"red"}}>${product.price}</span></h5>
        <p>{product.description}</p>
        
        <div className="d-flex justify-content-between">
              <Button className='btn btn-outline-dark' onClick={()=>handlewishlist(product)}><i className='fa-solid fa-heart text-danger'></i>Wishlist</Button>
              <Button className='btn btn-outline-light' onClick={()=>dispatch(addToCart(product))} ><i className='fa-solid fa-cart-shopping text-warning'></i>Cart</Button>
          </div>
          
  
      </div>
  
      </div>
    </div>
  )
}

export default View
