import { productReducer,selectedProductReducer } from '../reducers/productReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer
});

export default reducers;