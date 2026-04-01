import React from 'react';
import shoppingCart from '../../assets/products/shopping-cart.png'
import homeIcon from '../../assets/DigiTools.png'

const Navbar = ({carts}) => {
    const cartIcon = shoppingCart
    const HomeIcon = homeIcon
    const cartCount = carts.length
    return (
      <div className="container mx-auto navbar bg-base-100 shadow-sm fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="hidden md:flex">
            <img src={HomeIcon} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-2">
            <li>
              <div className="relative">
                <a className="btn btn-circle">
                  <img src={cartIcon} alt="" />
                </a>
                {cartCount > 0 && (
                  <div className="absolute -top-3 -right-2">
                    <span className="btn btn-primary btn-circle h-5 w-5 text-xs p-1">
                      {cartCount}
                    </span>
                  </div>
                )}
                
                {/* <div className="absolute -top-3 -right-2">
                  
                  <button className="btn btn-primary btn-circle h-5 w-5">
                    
                  </button>
                  
                </div> */}
              </div>
            </li>
            <li>
              <a className="btn rounded-full">login</a>
            </li>
            <li>
              <a className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] md:text-[16px]">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;