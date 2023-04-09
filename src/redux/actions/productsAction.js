import { ActionTypes } from '../constants/action-types'
import fakeStoreApi from '../../api/fakeStoreApi'

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = fakeStoreApi('/products').then((response) => {
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data
      })
    }).catch((err) => {
      console.log(err)
    })
    
  }
}

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = fakeStoreApi(`/products/${id}`).then((response) => {
      dispatch({
        type: ActionTypes.FETCH_PRODUCT,
        payload: response.data
      })
    }).catch((err) => {
      console.log(err)
    }) 
  }
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT
  };
};