import React from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import wishlistSlice, { removeWishlist } from '../redux/slice/wishlistSlice';
import cartSlice, { addToCart } from '../redux/slice/cartSlice';

function Wishlist() {

 

  //const {loading,error,products}= useSelector((state)=> state.productSlice)

  const wishlist= useSelector(state=> state.wishlistSlice.wishlist)
  const dispatch =useDispatch()
  const cart= useSelector(state=> state.cartReducer)
 

  const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeWishlist(product.id))
  }

  return (
    <div className='container mt-5'>
        <Row>
      {
        wishlist.length>0?wishlist.map(product=>(
          <Col className='mb-3' sm={12} md={8} lg={4} xl={3} >
          <Card style={{ width: '18rem' }}>
   <Link to={'/view/1'}><Card.Img variant="top" src={product.thumbnail} />
   </Link>
         <Card.Body>
           <Card.Title>{product.title.slice(0,20)}</Card.Title>
           <Card.Text>
            {}
           </Card.Text>
   
           <div className="d-flex justify-content-between">
               <Button className='btn btn-light' onClick={()=>dispatch(removeWishlist(product.id))}><i className='fa-solid fa-heart-circle-minus text-danger'></i></Button>
               <Button className='btn btn-light'onClick={()=>handleCart(product)}><i className='fa-solid fa-cart-plus text-warning'></i></Button>
           </div>
           
         </Card.Body>
       </Card>
          </Col>
        )): <div className="container mt-5 d-flex align-items-center">
           <h1 className='text-danger'>Your Wishlist is Empty...</h1>
           <img src="https://metro-website-images.s3.eu-west-1.amazonaws.com/plugins/user/images/emptycart.png" alt="" />
        </div>
      }
    </Row>
    </div>
  )
}

export default Wishlist
