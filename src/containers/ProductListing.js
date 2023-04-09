import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios';
import { fetchProducts } from '../redux/actions/productsAction';

const  ProductListing = () => {
  const products = useSelector( ( state ) => state )
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  },[])
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing