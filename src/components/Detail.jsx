import React,{useEffect , useState} from 'react'
import{useParams}from"react-router-dom";
import{useDispatch, useSelector}from"react-redux";
import currencyFormatter  from "currency-formatter"
import"./detail.css";
import {BsDash, BsPlus} from "react-icons/bs";

function Detail() {
    const[quantity, setQuantity]=useState(1)
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product}= useSelector(state=>state.ProductsReducer)
  
    useEffect(()=>{
dispatch({type:'PRODUCT', id:id})
    },[id] )
   const decQuantity=()=>{
       if(quantity>1){
           setQuantity(quantity-1 )
       }

   }
    return (
        <div className="detail">
        <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img src={`/images/${product.image}`} /></div>
                  {/* <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
                </div>
                {/* <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                </ul> */}
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.name}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">{product.desc}</p>
                <h4 className="price">current price: <span>{currencyFormatter.format(product.price, { code: 'USD' })}</span></h4>
                <p className="vote"><strong>Discount: </strong> {currencyFormatter.format(product.discount, { code: 'USD' })}<strong>%</strong></p>
                <h5 className="sizes">sizes:
                  <span className="size" data-toggle="tooltip" title="small">s</span>
                  <span className="size" data-toggle="tooltip" title="medium">m</span>
                  <span className="size" data-toggle="tooltip" title="large">l</span>
                  <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5>
              <div className="detail__info">
                  <div className="detail__incdesc">
                  <span className="desc" onClick={decQuantity}><BsDash/></span>
                  <span className="quantity">{quantity}</span>
                  <span className="inc" onClick={()=>setQuantity(quantity+1)}><BsPlus/></span>
                  </div>
              </div>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button" onClick={()=>dispatch({type: "ADD_TO_CART", payload:{product,quantity} })}>add to cart</button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default Detail
