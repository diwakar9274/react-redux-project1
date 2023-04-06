import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios';
import { setProducts } from '../redux/actions/productsAction';

const  ProductListing = () => {
  const products = useSelector( ( state ) => state )
  const dispatch  = useDispatch();
  const fetchProducts = async () => {
    const response = axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      dispatch(setProducts(response.data));
    })
    .catch((err) => {
      console.log('Err', err);
    });
  }

  useEffect(() => {
    fetchProducts();
  },[])
  console.log("products: ",products)
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing