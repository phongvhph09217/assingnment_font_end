import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Dashboard  = (props) =>{


    // onchange = (event)=>{
    //   var target = event.target;
    //   var id = target.id;
    //   var name = target.name;
    //   var price = target.price;
    //   var value = target.value;
    // }

    // onSubmit =(event)=>{
    //   event.preventDefault();
    //   console.log(this.state);
    // }


    return (
      
      <form method="post" action="#">
        <h1>Admin</h1>
        <br></br>
        <table cellSpacing={0} className="shop_table cart">
          <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cart_item">
              <td className="product-remove" >
                <input type="text" className="" name="id"
                   >

                </input>
              </td>
              <td className="product-thumbnail">
               <input type="text" className="" name="name"
             >

               </input>
              </td>
              <td className="product-name">
              
               
              </td>
              <td className="product-price">
                <input type="text" className="" name="price"
               >
                  
                </input>
              </td>
             
              <td className="product-subtotal">
              <button type="submit" className="btn btn-primary" >
                  Save
              </button>&nbsp;
              <button type="button" className="btn btn-primary style"  >
                  <span ></span>Cancel
              </button>
              </td>
            </tr>
            {/* <tr>
              <td className="actions" colSpan={6}>
                <div className="coupon">
                  <label htmlFor="coupon_code">Coupon:</label>
                  <input type="text" placeholder="Coupon code" defaultValue id="coupon_code" className="input-text" name="coupon_code" />
                  <input type="submit" defaultValue="Apply Coupon" name="apply_coupon" className="button" />
                </div>
                <input type="submit" defaultValue="Update Cart" name="update_cart" className="button"/>
                <input type="submit" defaultValue="Checkout" name="proceed" className="checkout-button button alt wc-forward"/>
              </td>
            </tr> */}
          </tbody>
        </table>
      </form>
                  
 
    )
}


Dashboard.propTypes = {

}

export default Dashboard
