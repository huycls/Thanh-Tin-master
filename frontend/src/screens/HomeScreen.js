import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import Pagination from '../Pagination';
import Slideshow from '../components/Slideshow';
import Sidebar from '../components/Sidebar';


export default withNamespaces() (function HomeScreen({t}) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

   useEffect(() => {
    dispatch(listProducts({}));
    // dispatch(listTopSellers());
   }, [dispatch]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(20);

  //get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const inxdexOfFirstProduct = indexOfLastProduct - productPerPage;

  //change page
  const paginate = (pagehomeNumber) => setCurrentPage(pagehomeNumber);
  return (
    <div>
    <Helmet>
      <title>{t("Products - Applications Thanh Tin Instrument And Chemical Co.LTD")}</title>
    </Helmet>
      <Slideshow />
      <div className="main-content">
        <Sidebar />
        <div className="product-box">      
          <h1 className="product-banner">{t("All Products")}</h1>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              {products.length === 0 && <MessageBox>{t("noproduct.label")}</MessageBox>}
              <div className="products">
                {products.slice(inxdexOfFirstProduct, indexOfLastProduct).map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
              <Pagination productPerPage={productPerPage} totalProduct={products.length} paginate={paginate} currentPage={currentPage}/>
            </div>   
          )}
        </div>
      </div>
    </div>
  );
})
