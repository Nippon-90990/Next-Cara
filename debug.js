import React from 'react'
import Script from 'next/script'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";


const Navbar = () => {
  return (
    // <!-- header start -->
 <div>
  <header classname="header bg-pink-0">
    <div classname="container">
      <div classname="row v-center">
        <div classname="header-item item-left">
          <div classname="logo">
            <a href="/"><img classname="cusimg m-0 h-20" src="/Screenshot (2).png" alt="Aura.com" srcSet /></a>{'{'}/* Aura.com */{'}'}
          </div>
        </div>
        {'{'}/* menu start here */{'}'}
        <div classname="header-item item-center">
          {'{'}/* <div classname="menu-overlay">
          </div> */{'}'}
          <nav classname="menu">
            <div classname="mobile-menu-head">
              <div classname="go-back"><i classname="fa fa-angle-left" /></div><i classname="fa fa-angle-left">
                <div classname="current-menu-title">
                  <div classname="mobile-menu-close">×</div>
                </div>
                <ul classname="menu-main">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li classname="menu-item-has-children">
                    <a href="#">New <i classname="fa fa-angle-down" /></a><i classname="fa fa-angle-down">
                      <div classname="sub-menu mega-menu mega-menu-column-4">
                        <div classname="list-item text-center">
                          <a href="#">
                            <img src="/p1.jpg" alt="new Product" />
                            <h4 classname="title">Product 1</h4>
                          </a>
                        </div>
                        <div classname="list-item text-center">
                          <a href="#">
                            <img src="/p2.jpg" alt="new Product" />
                            <h4 classname="title">Product 2</h4>
                          </a>
                        </div>
                        <div classname="list-item text-center">
                          <a href="#">
                            <img src="/p3.jpg" alt="new Product" />
                            <h4 classname="title">Product 3</h4>
                          </a>
                        </div>
                        <div classname="list-item text-center">
                          <a href="#">
                            <img src="/p4.jpg" alt="new Product" />
                            <h4 classname="title">Product 4</h4>
                          </a>
                        </div>
                      </div>
                    </i></li><i classname="fa fa-angle-down">
                    <li classname="menu-item-has-children">
                      <a href="#">Shop</a>
                      <div classname="sub-menu mega-menu mega-menu-column-4">
                        <div classname="list-item">
                          <h4 classname="title">Men's Fashion</h4>
                          <ul>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                          </ul>
                          <h4 classname="title">Beauty</h4>
                          <ul>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                          </ul>
                        </div>
                        <div classname="list-item">
                          <h4 classname="title">Women's Fashion</h4>
                          <ul>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                          </ul>
                          <h4 classname="title">Furniture</h4>
                          <ul>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                          </ul>
                        </div>
                        <div classname="list-item">
                          <h4 classname="title">Home, Kitchen</h4>
                          <ul>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                            <li><a href="#">Product List</a></li>
                          </ul>
                        </div>
                        <div classname="list-item">
                          <img src="/shop1.jpg" alt="shop" />
                        </div>
                      </div>
                    </li>
                    <li classname="menu-item-has-children">
                      <a href="#">Blog </a>
                      <div classname="sub-menu single-column-menu">
                        <ul>
                          <li><a href="#">Standard Layout</a></li>
                          <li><a href="#">Grid Layout</a></li>
                          <li><a href="#">single Post Layout</a></li>
                        </ul>
                      </div>
                    </li>
                    <li classname="menu-item-has-children">
                      <a href="#">Pages</a>
                      <div classname="sub-menu single-column-menu">
                        <ul>
                          <li><a href="#">Login</a></li>
                          <li><a href="#">Register</a></li>
                          <li><a href="#">Faq</a></li>
                          <li><a href="#">404 Page</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </i></ul><i classname="fa fa-angle-down">
                </i></i></div></nav><i classname="fa fa-angle-left"><i classname="fa fa-angle-down">
            </i></i></div><i classname="fa fa-angle-left"><i classname="fa fa-angle-down">
            {'{'}/* menu end here */{'}'}
            <div classname="header-item item-right">
              <a href="#"><aioutlinesearch classname="cusb text-2xl" /></a>
              <a href="#"><aioutlineheart classname="cusb text-2xl" /></a>
              <a href="#"><aioutlineshoppingcart classname="cusb text-2xl" /></a>
              {'{'}/* mobile menu trigger */{'}'}
              <div classname="mobile-menu-trigger">
                <span>
                </span></div>
            </div>
          </i></i></div><i classname="fa fa-angle-left"><i classname="fa fa-angle-down">
        </i></i></div><i classname="fa fa-angle-left"><i classname="fa fa-angle-down">
        <script src="../../public/Script.js" />
      </i></i></header><i classname="fa fa-angle-left"><i classname="fa fa-angle-down">
    </i></i></div>

  )
}

export default Navbar