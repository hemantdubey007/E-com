import React, { useEffect, useState } from 'react'
import './productDetails.css'
import {useParams} from 'react-router-dom'
import fetchData from '../../utils/apiCall'
import AddToCartBtn from '../../components/addToCartBtn/AddToCartBtn'

const ProductDetails = () => {

  const {productId} = useParams()
  const [productDetails, setProductDetails] = useState({});

  async function fetchProductData(){
    const url = `https://dummyjson.com/products/${productId}`;
    // const url = `https://fakestoreapi.com/products/${productId}`;
    const res = await fetchData(url);
    setProductDetails(res);
  }
  useEffect(()=>{
    fetchProductData()
  },[])

  return Object.keys(productDetails).length ? (
    <div className='product_details_container'>
      <div className='product_left_container' style={{flex:1}}>
        <img src={productDetails?.thumbnail} alt={`image of ${productDetails?.title}`} style={{width:'100%'}}/>
      </div>
      <div className='product_right_container' style={{flex:2}}>
        <p className='product_title'>{productDetails?.title}</p>
        <p className='product_description'>Description : {productDetails?.description}</p>
        <p className='product_rating'>Rating : {productDetails?.rating?.toFixed(1)}</p>
        <p className='product_price'>Price : {(productDetails?.price * 83.33).toFixed(2)} Rs</p>
        <AddToCartBtn productDetails={productDetails} />
      </div>
    </div>
  ) : (<>Loading ...</>)
}

export default ProductDetails