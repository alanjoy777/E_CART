import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
const[wishlistCount,setWishlistCount]=useState(0)
const[cartCount,setCartCount]=useState(0)
const wishlist= useSelector(state=> state.wishlistSlice.wishlist)

const cart= useSelector(state=> state.cartReducer)

useEffect(()=>{
  setWishlistCount(wishlist?.length)
  setCartCount(cart?.length)
},[wishlist,cart])

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}> <i className='fa-solid fa-truck-fast fa-bounce'></i> E-Cart  </Link>

          </Navbar.Brand>
          <Nav className="me-0">
            <Nav.Link >
                <Link to={'/wishlist'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}> <i className='fa-solid fa-heart text-danger'></i> Wishlist <Badge bg='success rounded ms-2'>{wishlistCount}</Badge> </Link>
            </Nav.Link>
            <Nav.Link href="#features">
                
            <Link to={'/cart'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}> <i className='fa-solid fa-cart-shopping text-warning'></i> Cart <Badge bg='success rounded ms-2'>{cartCount}</Badge> </Link>

            </Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
