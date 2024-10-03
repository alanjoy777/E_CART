import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchproductData } from '../redux/slice/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import wishlistSlice, { addTowishList } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Home() {
 const dispatch= useDispatch()

 const {loading,error,products}= useSelector((state)=> state.productSlice)
 const {wishlist} = useSelector(state=> state.wishlistSlice)
// console.log(loading);
// console.log(error);
// console.log(products);
const cart= useSelector(state=> state.cartReducer)

 useEffect(()=>{
   dispatch(fetchproductData())
 },[])
  

const handlewishlist =(product)=>{
  const existingProduct = wishlist.find(item=>item.id==product.id)
  if(existingProduct){
    alert("already exists")
  }else{
    dispatch(addTowishList(product))
  }
} 

  return (
    <div style={{marginTop:"50px"}}> 
      

    <Row>
    { 
      loading? <div className='d-flex justify-content-center mt-5 mb-5'>
        <Spinner animation="border" variant="info" />
        </div>
      :products.map(product=>(
        <Col className='mb-3' sm={12} md={8} lg={4} xl={3} >
        <Card style={{ width: '18rem' }}>
 <Link to={`/view/${product.id}`}><Card.Img variant="top" src={product.thumbnail} />
 </Link>
       <Card.Body>
         <Card.Title>{product.title.slice(0,20)}</Card.Title>
         
 
         <div className="d-flex justify-content-between">
             <Button className='btn btn-light' onClick={()=>handlewishlist(product)}><i className='fa-solid fa-heart text-danger'></i></Button>
             <Button className='btn btn-light' onClick={()=>dispatch(addToCart(product))}><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
         </div>
         
       </Card.Body>
     </Card>
        </Col>
      ))
    
    
    }
    </Row>

    </div>
  )
}

export default Home
