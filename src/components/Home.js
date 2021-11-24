import React from 'react'
import currecyFormatter from "currency-formatter"
import { useSelector } from "react-redux"
import ProductsReducer from '../store/reducers/ProductsReducers'
import { Link } from 'react-router-dom'
import Details from './Details'
const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    return (
        <div className="home" >
            <img src="../images2/1111 (12).jpg" className="bg" />

            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={products.id}>
                            <div className="product">
                                <div className="product_img">
                                    <Link to={`/details/${product.id}`}><img src={`/images2/${product.image}`} alt="load" />
                                    </Link></div>
                                <div className="product_name">
                                    {product.name}
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="product_price">

                                            <span className="actualPrice">  {currecyFormatter.format(product.price, { code: 'USD' })}</span>
                                        </div>

                                    </div>
                                    <div className="col-6">
                                        <div className="product_discount">
                                            {currecyFormatter.format(product.discount, { code: 'USD' })}

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

export default Home
