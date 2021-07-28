import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import"./cart.css"
// import"../App.css"
import{Link} from"react-router-dom"
import currencyFormatter  from "currency-formatter"
import {BsDash, BsPlus,  BsReverseBackspaceReverse } from "react-icons/bs";
const Cart = () => {
    const{ Products ,  totalPrice, totalQuantities,discountPrice}= useSelector(state=>state.CartReducer)
    const dispatch = useDispatch();
    console.log(Products)
    return (
       



//       <div className="cart">
//       <div className="container">
//           <h3>Your cart</h3>
//           {Products.length > 0 ? <>
//           <div className="row">
//               <div className="col-9">
//               <div className="cart__heading">
//                   <div className="row">
//                       <div className="col-2">Picture</div>
//                       <div className="col-2">Name</div>
//                       <div className="col-2">Price</div>
//                       <div className="col-2">Inc/Dec</div>
//                       <div className="col-2">Total Price</div>
//                       <div className="col-2">Remove</div>
//                   </div>
//               </div>
//               {Products.map(product => (
//                   <div className="row verticalAlign" key={product.id}>
//                    <div className="col-2">
//                        <div className="cart__image">
//                            <img src={`/images/${product.image}`} alt=""/>
//                       </div>   
//                    </div>
//                    <div className="col-2">
//                        <div className="cart__name">
//                            {product.name}
//                        </div>
//                    </div>
//                    <div className="col-2">
//                        <div className="cart__price">
//                            {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
//                        </div>
//                    </div>
//                    <div className="col-2">
//                    <div className="details__info cart__incDec">
//               <div className="details__incDec">
//               <span className="dec" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
// <span className="quantity">{product.quantity}</span>
// <span className="inc" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
// </div>
//           </div>
//                    </div>
//                    <div className="col-2">
//                              <div className="cart__total text-center">
//                                  {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}
//                              </div>
//                          </div>
//                          <div className="col-2">
//                              <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
//                                  <BsReverseBackspaceReverse />
//                              </div>
//                          </div>
//                         </div>
//                     ))}
//                     </div>
//               <div className="col-3 summary-col">
//                   <div className="summary">
//                       <div className="summary__heading">
//                           Summary
//                       </div>
//                       <div className="summary__details">
//                           <div className="row mb-10">
//                               <div className="col-6">
//                                   Total Items:
//                               </div>
//               <div className="col-6">{totalQuantities}</div>
//                           </div>
//                           <div className="row mb-10">
//                               <div className="col-6">
//                                   Total Price
//                               </div>
//                               <div className="col-6">
//                                   {currencyFormatter.format(totalPrice, {code: 'USD'})}
//                               </div>
//                           </div>
//                           <button type="button" className="checkout">Checkout</button>
//                       </div>
//                   </div>
//               </div>
//           </div>
//           </> : 'Your cart is empty!'}
//       </div>
//   </div>
// )
// }


<div className="containerA">

        <div className="row">
        {Products.length > 0 ? <>
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              {Products.map(product => (
              <tbody>
              
                <tr>
            
                  <td className="col-sm-8 col-md-6">
                  
                    <div className="media">
                      <a className="thumbnail pull-left" href="#"> <img className="media-object" src={`/images/${product.image}`} style={{width: '72px', height: '72px'}} /> </a>
                      <div className="media-body">
                        <h4 className="media-heading">{product.name}</h4>
                        {/* <h5 className="media-heading"> by <a href="#">Brand name</a></h5> */}
                        <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                      </div>
                    </div></td>
                    
                    <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                  <div className="details__info cart__incDec">
               <div className="details__incDec">
               <span className="inc" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash/></span>
 <span className="quantity">{product.quantity}</span>
 <span className="inc" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
 </div>
 </div>
 </td>
  
           
                    
                  <td className="col-sm-1 col-md-1 text-center"><strong>{currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})} </strong></td>
                  <td className="col-sm-1 col-md-1 text-center"><strong> {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}</strong></td>
                  <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger" onClick={()=>dispatch({type:"REMOVE", payload:product.id})}>
                      <span className="glyphicon glyphicon-remove" /> Remove
                    </button></td>
                </tr>
               
                
                <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td><h5>Subtotal</h5></td>
                  <td className="text-right"><h5><strong>   {currencyFormatter.format(totalPrice, {code: 'USD'})}</strong></h5></td>
                </tr>
            
                <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td><h3>Total</h3></td>
                  <td className="text-right"><h3><strong>{currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}</strong></h3></td>
                </tr>
                <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td>
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
                    </button></td>
                  <td>
                  <Link to={`/`}>  <button type="button" className="btn btn-success">
                      Checkout <span className="glyphicon glyphicon-play" />
                    </button></Link></td>
                </tr>
                 
              </tbody>
              ))}
            </table>
          </div>
             
                  
          </> :   <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {/* <div className="card-header">
                <h5>Cart</h5>
              </div> */}
              <div className="card-body cart">
                <div className="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width={130} height={130} className="img-fluid mb-4 mr-3" />
                  <h3><strong>Your Cart is Empty</strong></h3>
              <h4>Add something to make me happy </h4>  <Link to={`/`}><a href="#" className="btn btn-primary cart-btn-transform m-3" data-abc="true">   continue shopping</a></Link>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
        </div>

</div>
      
        )
    }
export default Cart
