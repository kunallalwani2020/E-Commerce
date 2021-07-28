import React from 'react'
import Header from './Header'
import{useSelector} from"react-redux";
import currencyFormatter  from "currency-formatter"
import{Link} from"react-router-dom"
function Home() {
  const {products} = useSelector(state => state.ProductsReducer);
  console.log(products);
    return (
        <div>
            <Header/>
           <div className="container ">
               <div className="row">
                   {products.map(at=>(
                  <div className="col-3" key={at.id}>
                      <div className="product">
                          <div className="product-img">
                              <Link to={`/details/${at.id}`}>
                              <img src={`/Images/${at.image}`} alt="image-name" /></Link>
                          </div>
                          <div className="product_name">{at.name} </div>
                          <div className="row">
                              <div className="col-6">
                                  <div className="product_price">
                                    
                                 <span className="actualPrice">{currencyFormatter.format(at.price, { code: 'USD' })}</span><span className="discount">{at.discount}%</span>


                              </div>
                          </div>
                          <div className="col-6">
                                  <div className="product_discount_price">
                                  {currencyFormatter.format(at.discount, { code: 'USD' })}
                              </div>
                          </div>
                      </div>
</div>
                  </div>
                   ))}
               </div>
          
    </div>
        </div>
    )
}

export default Home;
