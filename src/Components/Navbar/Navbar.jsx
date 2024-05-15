import React, { useContext, useState } from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import mits_logo from '../Assets/mits logo.jpg'
export const Navbar = () => {

  const [menu,setMenu]=useState("Shop");
  const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='navbar'>
    <div className="nav-logo">
    <img src={logo} alt="" />
      <p>Style<span>Scoop</span></p>
    </div>
    <ul className="nav-menu">
    <li onClick={()=>{setMenu("Shopp")}}><Link style={{ textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shopp"?<h/>:<></>}</li>
    <li onClick={()=>{setMenu("Men")}}><Link style={{ textDecoration:'none'}} to='/Men'>Men</Link>{menu==="Men"?<h/>:<></>}</li>
    <li onClick={()=>{setMenu("Women")}}><Link style={{ textDecoration:'none'}} to='/Women'>Women</Link>{menu==="Women"?<h/>:<></>}</li>
    <li onClick={()=>{setMenu("Kids")}}><Link style={{ textDecoration:'none'}} to='/Kids'>Kids</Link>{menu==="Kids"?<h/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
    <Link to='/login'><button>Login</button></Link>
    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
    </div>    
    
  )
}

