import React from 'react'
import {useNavigate} from 'react-router-dom'
import './productCard.css'
import AddToCartBtn from '../addToCartBtn/AddToCartBtn';

const ProductCard = ({productDetails}) => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate(`/details/${productDetails.id}`)
    }

  return (
    <div className='card_container'>
        <img src={productDetails?.thumbnail} style={{cursor:'pointer'}} onClick={clickHandler} alt=''/>
        <div>
            <p>{productDetails?.title}</p>
            <div>
                <p>Price : {(productDetails?.price * 83.33).toFixed(2)} Rs</p>
                <p>Rating : {(productDetails?.rating).toFixed(1)}</p>
            </div>
        </div>
        <AddToCartBtn productDetails = {productDetails} onClick={clickHandler} />
    </div>
  )
}

export default ProductCard