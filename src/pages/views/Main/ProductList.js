import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductList = ({ products }) => {
  return (
    <div>

      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="user-menu">
                <ul>
                  <li><a href="#"><i className="fa fa-user" /> My Account</a></li>
                  <li><a href="#"><i className="fa fa-heart" /> Wishlist</a></li>
                  <li><a href="cart.html"><i className="fa fa-user" /> My Cart</a></li>
                  <li><a href="checkout.html"><i className="fa fa-user" /> Checkout</a></li>
                  <li><a href="#"><i className="fa fa-user" /> Login</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="header-right">
                <ul className="list-unstyled list-inline">
                  <li className="dropdown dropdown-small">
                    <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">INR</a></li>
                      <li><a href="#">GBP</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-small">
                    <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">English</a></li>
                      <li><a href="#">French</a></li>
                      <li><a href="#">German</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End header area */}
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <h1><a href="./"><img src="img/logo.png" /></a></h1>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="shopping-item">
                <a href="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart" /> <span className="product-count">5</span></a>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End site branding area */}
      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
              <li><a><Link to="/home">Home</Link></a></li>
                <li><a><Link to="/list">Products List</Link></a></li>
                <li><a><Link to="/admin/products">Products</Link></a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Shop</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            {products.map(({ id, name, image, price }, index) => (
              <div className="col-md-3 col-sm-6">
                <div className="single-shop-product">
                  <div className="product-upper">
                    <img src={image} alt="" />
                  </div>
                  <h2><a href>{name}</a></h2>
                  <div className="product-carousel-price">
                    {price}
                  </div>
                  <div className="product-option-shop">
                    <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="footer-top-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-about-us">
                  <h2>u<span>Stora</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                  <div className="footer-social">
                    <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
                    <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
                    <a href="#" target="_blank"><i className="fa fa-youtube" /></a>
                    <a href="#" target="_blank"><i className="fa fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-menu">
                  <h2 className="footer-wid-title">User Navigation </h2>
                  <ul>
                    <li><a href>My account</a></li>
                    <li><a href>Order history</a></li>
                    <li><a href>Wishlist</a></li>
                    <li><a href>Vendor contact</a></li>
                    <li><a href>Front page</a></li>
                  </ul>                        
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-menu">
                  <h2 className="footer-wid-title">Categories</h2>
                  <ul>
                    <li><a href>Mobile Phone</a></li>
                    <li><a href>Home accesseries</a></li>
                    <li><a href>LED TV</a></li>
                    <li><a href>Computer</a></li>
                    <li><a href>Gadets</a></li>
                  </ul>                        
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-newsletter">
                  <h2 className="footer-wid-title">Newsletter</h2>
                  <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                  <div className="newsletter-form">
                    <input type="email" placeholder="Type your email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="copyright">
                  <p>© 2015 uCommerce. All Rights Reserved. <a href="http://www.freshdesignweb.com" target="_blank">freshDesignweb.com</a></p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-card-icon">
                  <i className="fa fa-cc-discover" />
                  <i className="fa fa-cc-mastercard" />
                  <i className="fa fa-cc-paypal" />
                  <i className="fa fa-cc-visa" />
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}



ProductList.propTypes = {

}

export default ProductList
