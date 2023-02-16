import { useState,useRef } from 'react';
import '../styles/header.css';
import '../styles/header.scss';
const Header=()=>{
    const herburg=useRef();
    const menuElement=useRef();
    const[isActive,setActive]=useState(false);
    const Toggle=()=>{
      setActive(current=>!current);
      if(menuElement.current.classList.contains('menu__display')){
         menuElement.current.classList.remove('menu__display')
      }
      else{
         menuElement.current.classList.add('menu__display');
      }
      }
    return(
        <>
          <div className="container wrapper">
             <div className="header">
                <div className='box'></div>
                <h1 className="header__title">CLIMATE GEOGRAPHIC</h1>
                <p className="header__description">climate news</p>
             </div>
             <div className={isActive?'toggle':" "} ref={herburg} onClick={Toggle}>
                <span></span>
                <span></span>
                <span></span>
             </div> 
             <div className='header__menu menu__display'ref={menuElement}>
               <h1 className="menu__headling">Climate Geographic</h1>
               <a href='/'>Home</a>
               <a href='/news'>Climate news</a> 
               <a href='/control-articles'>Climate articles</a>
               <a href='/newsletter'>sign in</a>
             </div>
          </div>
        </>
    )
}
export default Header;