import React from 'react';
import './Navbar.css';
import navlogo from '../Images/DRM.png'


/*Navbar component */
export default function Navbar(props){
  return(
    <div>
        <nav className="app__navbar">
        <div><img id="nav-logo"src={navlogo} alt="Nav Logo" /></div>
          <ul className=' app__navbar-links'>
          <li className='p__opensans hide' id ="home" onClick={()=>{props.onClick('Home')}}>Home</li>
            <li className='p__opensans' id ="menu" onClick={()=>{props.onClick('Menu')}}>Menu</li>
            <li className='p__opensans' id ="location" onClick={()=>{props.onClick('Location')}}>Location</li>
            <li className='p__opensans' id ="about" onClick={()=>{props.onClick('About')}}>About</li>
            <li className='p__opensans' id ="contact" onClick={()=>{props.onClick('ContactUs')}}>Contact us</li>
          </ul>
    <div className='app__navbar-right'>
        <p id="login" onClick={()=>{props.onClick('Login')}} className='p__opensans'><i className="fa fa-fw fa-user"></i>Login</p>
        <p id="cart" onClick={()=>{props.onClick('Cart')}} className='p__opensans'><i className="fa fa-shopping-cart"></i>Cart</p>
      </div>
        </nav>
    </div>
  );
};