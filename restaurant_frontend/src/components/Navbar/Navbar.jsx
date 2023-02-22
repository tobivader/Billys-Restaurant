import React,{useState,} from 'react';
import $ from 'jquery'
import './Navbar.css';
import navlogo from '../Images/DRM.png'
import { NavLink } from 'react-router-dom';
import {GetCurrentPage} from '../../rootLayout'

/*Navbar component */
export default function Navbar(props){
  function openbasket(){

  }


  LoadDynamicNavbar();
  return(
    <div>
        <nav className="app__navbar">
        <div><img id="nav-logo"src={navlogo} alt="Nav Logo" /></div>
          <ul className=' app__navbar-links'>
            <li className='p__opensans hide' id ="home"><NavLink to="/">Home</NavLink></li>
            <li className='p__opensans' id ="menu" ><NavLink to="/Menu">Menu</NavLink></li>
            <li className='p__opensans' id ="location" ><NavLink to='/Location'>Location</NavLink></li>
            <li className='p__opensans' id ="about" ><NavLink to="/About">About</NavLink></li>
            <li className='p__opensans' id ="contact" ><NavLink to='/Contact'>Contact us</NavLink></li>
          </ul>
    <div className='app__navbar-right'>
        <p id="login"  className='p__opensans'><NavLink to='/Login'><i className="fa fa-fw fa-user"></i>Login</NavLink></p>
        <div id="cart"  className='p__opensans'><NavLink to ='/Checkout'><i onClick={openbasket} className="fa fa-shopping-cart"></i> </NavLink> </div>
      </div>
        </nav>
       <Basket className='Basket'/>
    </div>
  );
};

async function LoadDynamicNavbar(){
  const currentPage = GetCurrentPage();
  let CurrentPage = (currentPage===null)? null : currentPage.pathname;
    //Display every nav item
    $('#home').removeClass('hide');
    $('#menu').removeClass('hide');
    $('#location').removeClass('hide');
    $('#contact').removeClass('hide');
    $('#about').removeClass('hide');
    $('#login').removeClass('hide');
        //then use an if statement to filter them
    if(CurrentPage ===null || CurrentPage.length===1){
      $('#home').addClass('hide');
    }
    else{
      $('#home').removeClass('hide');
      if(CurrentPage.includes('Menu'))
      {
        $('#menu').addClass('hide');
      }
      else if(CurrentPage.includes('Location'))
      {
        $('#location').addClass('hide');
      }
      else if(CurrentPage.includes('Contact'))
      {
        $('#contact').addClass('hide');
      }
      else if(CurrentPage.includes('About'))
      {
        $('#about').addClass('hide');
      }
      else if(CurrentPage.includes('Account'))
      {
        $('#login').addClass('hide');
      }
      else if(CurrentPage.includes('Checkout')){
        $('#checkout').addClass('hide');
      }
    }
  
  }
  function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
    return (
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
            <input
              type="number"
              min="0"
              value={product.quantity}
              onChange={(event) => onChangeProductQuantity(index, event)}
            />
            <button onClick={() => onRemoveProduct(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  }
  
  
  


  

  function Basket({ itemCount }) {
    const [products, setProducts] = useState([
      { name: 'Product 1', price: 10, quantity: 1 },
      { name: 'Product 2', price: 20, quantity: 2 },
      { name: 'Product 3', price: 30, quantity: 3 },
    ]);
  
    function handleChangeProductQuantity(index, event) {
      if (!event) {
        return;
      }
      
      const newProducts = [...products];
      newProducts[index].quantity = parseInt(event.target.value);
      setProducts(newProducts);
    }
    
    
  
    function handleRemoveProduct(index) {
      const newProducts = [...products];
      newProducts.splice(index, 1);
      setProducts(newProducts);
    }
  
  
    return (
      <div className="Basket">
        <h1>Shopping Cart</h1>
        <span className="count">{itemCount} items in the bag</span>
        <ProductList
          products={products}
          onChangeProductQuantity={handleChangeProductQuantity}
          onRemoveProduct={handleRemoveProduct}
        />
      </div>
    );
  }
  