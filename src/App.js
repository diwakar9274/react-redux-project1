import Header from './containers/Header';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import NotFound from './containers/NotFound';
const App = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
