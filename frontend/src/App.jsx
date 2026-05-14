import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Route/Layout';
import ScrollToTop from './Homepage/Scroll/scrolltop';

import Content from "./Homepage/Content";
import Product from "./Homepage/Newarrivals";
import Topproducts from "./Homepage/Toparrivals";
import Categories from "./Homepage/Categories";
import Ratings from "./Homepage/Ratings";


import ProductDetail from './SearchProduct/ProductDetail';
import Youmightlike from "./Shop/Youmightlike";
import Cart from './Cart/Cardpage';
import Brands from './Brands/brands';
import Login from './AuthPages/LoginPage';
import Register from './AuthPages/Registerpage';

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route element={<Layout />}>

          <Route index element={
            <>
              <Content />
              <Product />
              <Topproducts />
              <Categories />
              <Ratings />
            </>
          } />

          <Route path='/shop' element={<Youmightlike />} />

          <Route path="/product/:id" element={<ProductDetail />} />


          <Route path="/cart" element={<Cart />} />

          <Route path='/brands' element={<Brands />} />

        </Route>


        <Route path='/login' element={<Login />} />

        <Route path="*" element={<h2>Page Not Found</h2>} />

        <Route path='/register' element={<Register />} />

      </Routes>
    </BrowserRouter >
  );
}

export default App;
